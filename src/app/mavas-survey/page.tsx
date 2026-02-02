'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Send, CheckCircle, AlertCircle, SkipForward } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';

interface SurveyData {
  ownerAge: string;
  dailyBillCount: string;
  upiVsCashPercent: string;
  wholesalerApp: string;
  q1: string;
  q1_comment: string;
  q2: string;
  q2_comment: string;
  q3: string;
  q3_comment: string;
  q4: string;
  q4_comment: string;
  q5: string;
  q5_comment: string;
  q6: string;
  q6_comment: string;
  q7: string;
  q7_comment: string;
  q8: string;
  q8_comment: string;
  q9: string;
  q9_comment: string;
  q10: string;
  q10_comment: string;
  q11: string;
  q11_comment: string;
  q12: string;
  q12_comment: string;
  q13: string;
  q13_comment: string;
  q14: string;
  q14_comment: string;
  q15: string;
  q15_comment: string;
  q16: string;
  q16_comment: string;
  comments: string;
}

export default function MavasSurveyPage() {
  const [formData, setFormData] = useState<SurveyData>({
    ownerAge: '',
    dailyBillCount: '',
    upiVsCashPercent: '',
    wholesalerApp: '',
    q1: '',
    q1_comment: '',
    q2: '',
    q2_comment: '',
    q3: '',
    q3_comment: '',
    q4: '',
    q4_comment: '',
    q5: '',
    q5_comment: '',
    q6: '',
    q6_comment: '',
    q7: '',
    q7_comment: '',
    q8: '',
    q8_comment: '',
    q9: '',
    q9_comment: '',
    q10: '',
    q10_comment: '',
    q11: '',
    q11_comment: '',
    q12: '',
    q12_comment: '',
    q13: '',
    q13_comment: '',
    q14: '',
    q14_comment: '',
    q15: '',
    q15_comment: '',
    q16: '',
    q16_comment: '',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSkip = (field: keyof SurveyData) => {
    setFormData(prev => ({ ...prev, [field]: 'Skipped' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/mavas-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        showNotification('success', 'Survey submit ho gaya! Dhanyavaad! 🙏');
        // Reset form
        setFormData({
          ownerAge: '',
          dailyBillCount: '',
          upiVsCashPercent: '',
          wholesalerApp: '',
          q1: '', q1_comment: '',
          q2: '', q2_comment: '',
          q3: '', q3_comment: '',
          q4: '', q4_comment: '',
          q5: '', q5_comment: '',
          q6: '', q6_comment: '',
          q7: '', q7_comment: '',
          q8: '', q8_comment: '',
          q9: '', q9_comment: '',
          q10: '', q10_comment: '',
          q11: '', q11_comment: '',
          q12: '', q12_comment: '',
          q13: '', q13_comment: '',
          q14: '', q14_comment: '',
          q15: '', q15_comment: '',
          q16: '', q16_comment: '',
          comments: ''
        });
      } else {
        showNotification('error', result.error || 'Kuch galat ho gaya. Phir se try karein.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      showNotification('error', 'Network error. Internet check karein.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const RadioQuestion = ({ 
    question, 
    field 
  }: { 
    question: string; 
    field: keyof SurveyData;
  }) => {
    const commentField = `${field}_comment` as keyof SurveyData;
    
    return (
      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <p className="text-gray-800 mb-3 font-medium">{question}</p>
        <div className="flex items-center gap-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name={field}
              value="Haan"
              checked={formData[field] === 'Haan'}
              onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
              className="w-4 h-4 text-green-600"
            />
            <span className="ml-2 text-gray-700">✓ Haan</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name={field}
              value="Nahi"
              checked={formData[field] === 'Nahi'}
              onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
              className="w-4 h-4 text-red-600"
            />
            <span className="ml-2 text-gray-700">✗ Nahi</span>
          </label>
          <button
            type="button"
            onClick={() => handleSkip(field)}
            className="ml-auto text-sm text-blue-600 hover:text-blue-700 flex items-center"
          >
            <SkipForward className="w-4 h-4 mr-1" />
            Skip
          </button>
        </div>
        
        {/* Optional Comment */}
        <div>
          <textarea
            value={formData[commentField] || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, [commentField]: e.target.value }))}
            placeholder="Kuch aur batana chahte ho? (Optional)"
            rows={2}
            className="w-full px-3 py-2 text-sm border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none bg-red-50 text-red-900 placeholder-red-400"
          />
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4">
            <Store className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            MAVAS Survey
          </h1>
          <p className="text-gray-600 mb-1">Kirana Dukaandaar Field Research</p>
          <p className="text-sm text-gray-500">
            Aapki daily &quot;chik-chik&quot; aur problems ko samajhne ke liye
          </p>
        </motion.div>

        {/* Notification */}
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg flex items-start ${
              notification.type === 'success' 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
            )}
            <p className={notification.type === 'success' ? 'text-green-800' : 'text-red-800'}>
              {notification.message}
            </p>
          </motion.div>
        )}

        {/* Survey Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
        >
          {/* Basic Info Section */}
          <div className="border-b pb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Aapki Dukan Ki Jaankari</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-red-600 mb-2">
                  Owner ki Age *
                </label>
                <input
                  type="text"
                  value={formData.ownerAge}
                  onChange={(e) => setFormData(prev => ({ ...prev, ownerAge: e.target.value }))}
                  placeholder="Umr daalen"
                  className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50 text-red-900 placeholder-red-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-red-600 mb-2">
                  Daily Bill Count *
                </label>
                <input
                  type="text"
                  value={formData.dailyBillCount}
                  onChange={(e) => setFormData(prev => ({ ...prev, dailyBillCount: e.target.value }))}
                  placeholder="Roz kitne bill bante hain"
                  className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50 text-red-900 placeholder-red-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-red-600 mb-2">
                  UPI vs Cash % *
                </label>
                <input
                  type="text"
                  value={formData.upiVsCashPercent}
                  onChange={(e) => setFormData(prev => ({ ...prev, upiVsCashPercent: e.target.value }))}
                  placeholder="UPI aur Cash ka percentage"
                  className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50 text-red-900 placeholder-red-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-red-600 mb-2">
                  Wholesaler App *
                </label>
                <input
                  type="text"
                  value={formData.wholesalerApp}
                  onChange={(e) => setFormData(prev => ({ ...prev, wholesalerApp: e.target.value }))}
                  placeholder="Kaunsa app use karte ho"
                  className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50 text-red-900 placeholder-red-400"
                />
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">
              1. Typing Tax aur App ki Mushkilat (ASR &amp; Voice)
            </h3>
            
            <RadioQuestion 
              question="1. Aap sales ka hisaab kaise rakhte ho? (Register me, calculator pe, ya koi app use karte ho?)"
              field="q1"
            />
            <RadioQuestion 
              question="2. Agar app use karte ho, toh pura din entry karne me kitna time nikal jata hai?"
              field="q2"
            />
            <RadioQuestion 
              question="3. Dukan pe jab bheed (rush) hoti hai, tab phone me entry karna boring ya mushkil lagta hai kya?"
              field="q3"
            />
            <RadioQuestion 
              question="4. Aap din bhar Bluetooth neckband ya earbuds pehente ho?"
              field="q4"
            />
            <RadioQuestion 
              question='5. Agar aap bas bol do &quot;5 kg chawal bik gaya&quot; aur app apne aap stock update kar de, toh kya aapka kaam aasan hoga?'
              field="q5"
            />
          </div>

          {/* Section 2 */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-bold text-gray-900">
              2. Stockout aur Guesswork ki Reality
            </h3>
            
            <RadioQuestion 
              question="6. Aisa kitni baar hota hai ki maal khatam ho gaya aur aapko tab pata chala jab customer ne maanga?"
              field="q6"
            />
            <RadioQuestion 
              question="7. Aapko kaise pata chalta hai ki naya maal (restock) kitna mangwana hai? (Bas andaze se ya purani sales dekh kar?)"
              field="q7"
            />
            <RadioQuestion 
              question="8. Kya dukan me aisa maal bhi hai jo mahino se pada hai aur koi kharid nahi raha?"
              field="q8"
            />
          </div>

          {/* Section 3 */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-bold text-gray-900">
              3. Wholesaler se Haggle/Negotiation
            </h3>
            
            <RadioQuestion 
              question="9. Naya stock mangwane ke liye kitne wholesalers se rate compare karte ho?"
              field="q9"
            />
            <RadioQuestion 
              question="10. Agar Azadpur ya Narela Mandi me rate girta hai, toh aapka wholesaler aapko sasta rate deta hai?"
              field="q10"
            />
            <RadioQuestion 
              question="11. Agar koi AI &apos;agent&apos; aapki taraf se WhatsApp ya ONDC pe 5 wholesalers se lad-jhagad kar sabse sasta rate nikal le, toh aap use kaam pe rakhoge?"
              field="q11"
            />
          </div>

          {/* Section 4 */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-bold text-gray-900">
              4. Cash-Flow aur &quot;Profit First&quot; Logic
            </h3>
            
            <RadioQuestion 
              question="12. Kabhi aisa hua hai ki maal mangwana hai par us din cash kam hai, toh order cancel karna pada?"
              field="q12"
            />
            <RadioQuestion 
              question="13. Jab budget tight hota hai, toh aap kaise decide karte ho ki pehle kya mangwayein aur kya chhod dein?"
              field="q13"
            />
            <RadioQuestion 
              question='14. Kya aap apna &quot;Munafa&quot; (Profit) aur &quot;Stock ka paisa&quot; alag-alag rakhte ho?'
              field="q14"
            />
          </div>

          {/* Section 5 */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-bold text-gray-900">
              5. Market Pulse aur Premium Alerts
            </h3>
            
            <RadioQuestion 
              question="15. Lohri, Diwali ya colony ki shadiyon ke time aap extra maal pehle se bharte ho?"
              field="q15"
            />
            <RadioQuestion 
              question='16. Agar aapko 24 ghante pehle pata chal jaye ki kal Tel (Oil) ya Chini (Sugar) ke rate badhne wale hain, toh kya aap us &quot;Early bird info&quot; ke liye thoda pay karoge?'
              field="q16"
            />
          </div>

          {/* Comments Section */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-bold text-gray-900">
              Kuch Aur Kehna Chahte Ho?
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aapke Comments / Suggestions (Optional)
              </label>
              <textarea
                value={formData.comments}
                onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                placeholder="Apni baat yahan likhein..."
                rows={4}
                className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none bg-red-50 text-red-900 placeholder-red-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Submit ho raha hai...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Survey Submit Karein
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <p className="text-sm text-blue-800">
            💡 <strong>Note:</strong> Aap kisi bhi question ko skip kar sakte ho. Aapki privacy hamari priority hai.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
