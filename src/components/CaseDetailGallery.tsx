import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CaseData } from '@/pages/CaseDetailData';

interface CaseDetailGalleryProps {
  caseData: CaseData;
}

const CaseDetailGallery = ({ caseData }: CaseDetailGalleryProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="mb-12">
          <div className="inline-block px-5 py-2 border border-gold/30 rounded-full mb-6">
            <p className="text-xs tracking-[0.3em] text-champagne uppercase">Галерея</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-champagne">Фотографии события</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseData.images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
            >
              <img 
                src={image}
                alt={`${caseData.title} - фото ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-5 py-2 border border-gold/30 rounded-full mb-6">
                <p className="text-xs tracking-[0.3em] text-champagne uppercase">Заинтересовались?</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-champagne mb-6">
                Давайте обсудим <span className="text-gold">ваше событие</span>
              </h2>
              <p className="text-lg text-champagne/70">
                Расскажите о вашей идее, и я предложу концепцию мероприятия
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light mb-3 text-champagne">Ваше имя</label>
                  <Input
                    required
                    placeholder="Как вас зовут?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light mb-3 text-champagne">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light mb-3 text-champagne">Телефон</label>
                <Input
                  required
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-3 text-champagne">Расскажите о вашей идее</label>
                <Textarea 
                  required
                  placeholder="Какое событие вы планируете? Сколько гостей? Какие у вас пожелания?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-black/50 border-gold/30 focus:border-gold text-champagne min-h-32"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gold text-black hover:bg-champagne text-base h-14 tracking-wide font-medium"
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailGallery;
