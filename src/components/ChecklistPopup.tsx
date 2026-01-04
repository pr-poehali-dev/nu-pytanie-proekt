import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const ChecklistPopup = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('checklist-popup-seen');
      if (!hasSeenPopup) {
        setOpen(true);
        sessionStorage.setItem('checklist-popup-seen', 'true');
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/e3a1434e-5331-47aa-854a-b2bf47e0287f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          eventType: formData.eventType,
          eventDate: date ? format(date, 'dd.MM.yyyy') : 'Не указана',
          message: '📋 Заявка на получение бесплатного чек-листа'
        })
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Спасибо за интерес! Я свяжусь с вами в ближайшее время и вышлю персональный чек-лист для вашего события. До скорой встречи!');
        setOpen(false);
        setFormData({ name: '', phone: '', eventType: '' });
        setDate(undefined);
        setAgreedToTerms(false);
      } else {
        alert('❌ Произошла ошибка. Пожалуйста, свяжитесь со мной напрямую через контакты.');
      }
    } catch (error) {
      console.error('Error submitting checklist:', error);
      alert('❌ Произошла ошибка. Пожалуйста, свяжитесь напрямую через контакты.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md bg-black border-2 border-gold/30">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gold flex items-center gap-2">
            <Icon name="Gift" size={28} className="text-gold" />
            Бесплатный чек-лист
          </DialogTitle>
          <DialogDescription className="text-champagne/80 text-base">
            Оставьте контакты и получите персональный чек-лист под ваше событие
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm mb-2 text-champagne">ФИО</label>
            <Input
              required
              placeholder="Как вас зовут?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-11"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-champagne">Номер телефона</label>
            <Input
              required
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-11"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-champagne">Тема события</label>
            <Input
              required
              placeholder="Например: свадьба, юбилей"
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-11"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-champagne">Дата события</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-light border-gold/30 hover:border-gold bg-black/50 text-champagne h-11"
                >
                  <Icon name="Calendar" size={16} className="mr-2" />
                  {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-muted border-gold/30">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  locale={ru}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              className="mt-1 border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
            />
            <label htmlFor="terms" className="text-xs text-champagne/70 leading-relaxed cursor-pointer">
              Я согласен на обработку персональных данных и принимаю{' '}
              <a href="/privacy" className="text-gold hover:underline">
                политику конфиденциальности
              </a>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gold text-black hover:bg-champagne h-11 text-base font-medium"
            disabled={!agreedToTerms}
          >
            Получить чек-лист
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChecklistPopup;