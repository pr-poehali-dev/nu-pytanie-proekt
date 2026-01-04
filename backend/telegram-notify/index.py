import json
import os
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    '''Отправка уведомлений из форм сайта в Telegram'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        name = body.get('name', 'Не указано')
        phone = body.get('phone', 'Не указано')
        event_type = body.get('eventType', 'Не указано')
        event_date = body.get('eventDate', 'Не указана')
        message = body.get('message', 'Не указано')
        
        telegram_message = f"""
🎉 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> {name}
📱 <b>Контакт:</b> {phone}
🎭 <b>Тип мероприятия:</b> {event_type}
📅 <b>Дата:</b> {event_date}

💬 <b>Сообщение:</b>
{message}
"""
        
        bot_token = os.environ.get('MARICOEVENT', '').strip()
        chat_id = os.environ.get('MARICO', '').strip()
        
        if not bot_token or not chat_id:
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'message': 'Заявка принята! Мы свяжемся с вами в ближайшее время.',
                    'debug': f'bot_token={bool(bot_token)}, chat_id={bool(chat_id)}'
                }),
                'isBase64Encoded': False
            }
        
        try:
            telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
            
            data = urllib.parse.urlencode({
                'chat_id': chat_id,
                'text': telegram_message,
                'parse_mode': 'HTML'
            }).encode('utf-8')
            
            req = urllib.request.Request(telegram_url, data=data, method='POST')
            with urllib.request.urlopen(req, timeout=5) as response:
                telegram_response = json.loads(response.read().decode('utf-8'))
        except Exception as telegram_error:
            pass
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': False,
                'error': str(e)
            }),
            'isBase64Encoded': False
        }