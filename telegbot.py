import telebot, requests, json
#Старый API 7100573123:AAFJAnV8UXmdTWHN_27vhElCYksRSOlJWn8
bot = telebot.TeleBot('7077255177:AAGl1-6qDV6JaoGFYk7RfITAjyFc5B8pAo8')
ans = [[1, 8, 101, 'По Бугазской косе '], [1, 9, 11, 'От Ласточкиных гнезд до Варваровской Щели'],
       [1, 9, 111, 'От 800 ступеней до Варваровской щели'], [1, 10, 100, 'От Сукко до Большого Утриша '],
       [1, 10, 100, 'От Варваровской щели до Сукко'], [2, 12, 101, 'Санаторий Малая Бухта '],
       [2, 12, 100, 'Санаторий «Голубая волна»'], [3, 13, 14, 'Детский санаторий Вита'],
       [3, 13, 15, 'Пляж пансионата Славянка'], [3, 13, 115, 'Золотые пески'],
       [3, 16, 101, 'Пляж Аквамарин'], [3, 16, 100, 'Пляж санатория Малая'],
       [4, 17, 101, 'Храм Святого Георгия'], [4, 18, 101, 'Храм Святой Великомученницы Варвары'],
       [4, 19, 101, 'Поклонный крест'], [4, 19, 100, 'Храм Святого Онуфрия Великого '],
       [5, 20, 101, 'Музей Горгиппия'], [5, 20, 100, 'Памятник Калинину'],
       [6, 21, 23, 'Гузгасская коса'], [6, 21, 24, 'Варваровская щель'],
       [6, 21, 124, 'Дюны Джемете'], [6, 22, 25, 'Витязевский лиман'],
       [6, 22, 26, 'Кипарисовое озеро'], [6, 22, 126, 'Дуб черешчатый'],
       [6, 22, 100, 'На данный момент по заданным критериям нет предложений'],
       [7, 27, 101, 'Арт-авеню'], [7, 28, 101, 'Сквер им. Гудовича'],
       [7, 29, 101, 'Сквер военной техники'], [7, 30, 101, 'Братская могила советских воинов'],
       [7, 31, 101, '800 ступеней'], [7, 32, 101, 'Лермонтовская беседка'],
       [7, 33, 101, 'Анапский маяк'], [7, 33, 100, 'Русско-Турецкие ворота']]
ques = ["Вы предпочитаете пешеходные маршруты?",
    "Вы предпочитаете отдых в санатории?",
    "Вы предпочитаете отдых на пляже?",
    "Вас интересуют религиозные постройки?",
    "Вы хотели бы посетить памятник истории?",
    "Вам хотелось бы полюбоваться природой?",
    "Вы хотели бы добраться до объекта самостоятельно?",
    "Вас интересуют экологические маршруты?",
    "Вы хотели бы посетить горы?",
    "Вы хотели бы построить маршрут вдоль берега?",
    "Вы готовы к сложному маршруту?",
    "Вы хотите отдыхать в здравнице?",
    "Песок мягкий и приятный?",
    "Вы планируете отдыхать с детьми?",
    "Рядом с пляжем должен быть пансионат?",
    "Вы предпочитаете гальку на пляже?",
    "Постройка должна быть национальной достопримечательностью?",
    "Постройка должна быть в классическом стиле?",
    "Вокруг постройки должен быть потрясающий вид?",
    "Это должен быть археологический музей?",
    "Вас интересует живописный ландшафт?",
    "Это конкретный объект?",
    "Это морской ландшафт?",
    "Это горный ландшафт?",
    "Вас интересуют лечебные грязи?",
    "Это должен быть памятник природы?",
    "Вы хотите посетить творческий объект?",
    "Вы хотите посетить парк?",
    "Вас интересуют военные экспонаты?",
    "Вы хотите посетить военный мемориал?",
    "Вы готовы к экстремальному походу?",
    "Вы хотели бы взобраться на смотровую площадку?",
    "Вы хотите пройтись вдоль моря?"]

@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, 'Приветствую! Ответьте на вопросы в формате «да» или «нет», чтобы подобрать подходящее для Вас мероприятие.')
    handle_first_question(message)


cnt = 1
k = -1

def handle_first_question(message):
    bot.reply_to(message, ques[cnt-1])
    bot.register_next_step_handler(message, handle_first_response)

@bot.message_handler(func=lambda message: True)
def handle_first_response(response):
    if (response.text.lower())!='да' and (response.text.lower())!='нет':
        if response.text.lower()=='ещё':
            bot.send_message(response.chat.id, 'Инициализация нового диалога')
            handle_first_question(response)
        else:
            bot.send_message(response.chat.id, 'Неверно введён ответ')
            handle_first_question(response)
    else:
        global cnt
        global cnt1
        print(cnt)
        if response.text.lower() == "да":
            for a in ans:
                if a[0] == cnt:
                    cnt = a[1]
                    handle_second_question(response)
                    return
        elif response.text.lower() == "нет":
            cnt += 1
            if cnt<8:
                handle_first_question(response)
            else:
                bot.send_message(response.chat.id, 'Обратитесь в службу поддержки')
                return

def handle_second_question(message):
    bot.reply_to(message, ques[cnt-1])
    bot.register_next_step_handler(message, handle_second_response)

@bot.message_handler(func=lambda message: True)
def handle_second_response(response):
    if (response.text.lower())!='да' and (response.text.lower())!='нет':
        bot.send_message(response.chat.id, 'Неверно введён ответ')
        handle_second_question(response)
    else:
        global cnt
        global k
        k = -1
        print(cnt)
        if response.text.lower() == "да":
            for a in ans:
                k += 1
                if a[1] == cnt:
                    if a[2] != 101:
                        cnt = a[2]
                        handle_third_question(response)
                        return
                    else:
                        bot.reply_to(response, ans[k][3])
                        exit_bot(response)
                        return
        elif response.text.lower() == "нет":
            for a in ans:
                k += 1
                if a[1] == cnt:
                    if a[2] == 100:
                        bot.reply_to(response, ans[k][3])
                        exit_bot(response)
                        return
            cnt += 1
            if cnt<34:
                handle_second_question(response)
            else:
                bot.send_message(response.chat.id, 'Обратитесь в службу поддержки')
                return


def handle_third_question(message):
    bot.reply_to(message, ques[cnt-1])
    bot.register_next_step_handler(message, handle_third_response)

@bot.message_handler(func=lambda message: True)
def handle_third_response(response):
    if (response.text.lower())!='да' and (response.text.lower())!='нет':
        bot.send_message(response.chat.id, 'Неверно введён ответ')
        handle_third_question(response)
    else:
        global cnt
        global k
        k=-1
        print(cnt)
        if response.text.lower() == "да":
            bot.reply_to(response, ans[k][3])
            exit_bot(response)
            return
        elif response.text.lower() == "нет":
            for a in ans:
                k += 1
                if a[2] == (100 + cnt):
                    bot.reply_to(response, a[3])
                    exit_bot(response)
                    return
            cnt += 1
            handle_third_question(response)

def exit_bot(message):
    global cnt
    global k
    bot.send_message(message.chat.id, 'https://play.google.com/store/apps/details?id=ru.anapa.app')
    bot.send_message(message.chat.id, 'Для выбора нового мероприятия введите в чат «ещё»')
    cnt = 1
    k = -1
    return

bot.polling()