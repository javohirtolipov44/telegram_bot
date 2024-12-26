import TelegramBot from "node-telegram-bot-api";

const API_KEY_BOT = "5516411755:AAFLcfTDeJR4eAzKIBBhTPmZpTK4TClMH1Q";
const URL_TO_BOT = "https://t.me/javohirtolipovbot";

const bot = new TelegramBot(API_KEY_BOT, {
  polling: {
    interval: 300,
    autoStart: true,
  },
});

const commands = [
  {
    command: "start",
    description: "Запуск бота",
  },
  {
    command: "ref",
    description: "Получить реферальную ссылку",
  },
  {
    command: "help",
    description: "Раздел помощи",
  },
  {
    command: "menu",
    description: "MENU",
  },
];

bot.setMyCommands(commands);
// bot.on("text", async (msg) => {
//   console.log(msg);
// });

// bot.on("text", async (msg) => {
//   try {
//     if (msg.text == "/start") {
//       await bot.sendMessage(msg.chat.id, `Bot ishga tushdi`);
//     } else {
//       await bot.sendMessage(msg.chat.id, msg.text);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// bot.on("text", async (msg) => {
//   try {
//     if (msg.text == "/start") {
//       await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);
//     } else if (msg.text == "/ref") {
//       await bot.sendMessage(msg.chat.id, `${URL_TO_BOT}?start=${msg.from.id}`);
//     } else {
//       await bot.sendMessage(msg.chat.id, msg.text);
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(msg);
// });

// bot.on("text", async (msg) => {
//   try {
//     if (msg.text.startsWith("/start")) {
//       await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);

//       if (msg.text.length > 6) {
//         const refID = msg.text.slice(7);

//         await bot.sendMessage(
//           msg.chat.id,
//           `Вы зашли по ссылке пользователя с ID ${refID}`
//         );
//       }
//     } else if (msg.text == "/ref") {
//       await bot.sendMessage(msg.chat.id, `${URL_TO_BOT}?start=${msg.from.id}`);
//     } else {
//       await bot.sendMessage(msg.chat.id, msg.text);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// bot.on("text", async (msg) => {
//   try {
//     if (msg.text.startsWith("/start")) {
//       await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);

//       if (msg.text.length > 6) {
//         const refID = msg.text.slice(7);

//         await bot.sendMessage(
//           msg.chat.id,
//           `Вы зашли по ссылке пользователя с ID ${refID}`
//         );
//       }
//     } else if (msg.text == "/ref") {
//       await bot.sendMessage(msg.chat.id, `${URL_TO_BOT}?start=${msg.from.id}`);
//     } else if (msg.text == "/help") {
//       await bot.sendMessage(
//         msg.chat.id,
//         `Раздел помощи HTML\n\n<b>Жирный Текст</b>\n<i>Текст Курсивом</i>\n<code>Текст с Копированием</code>\n<s>Перечеркнутый текст</s>\n<u>Подчеркнутый текст</u>\n<pre language='javascript'>console.log("salom")</pre>\n<a href='t.me'>Гиперссылка</a>`,
//         {
//           parse_mode: "HTML",
//         }
//       );

//       await bot.sendMessage(
//         msg.chat.id,
//         "Раздел помощи Markdown\n\n*Жирный Текст*\n_Текст Курсивом_\n`Текст с Копированием`\n~Перечеркнутый текст~\n``` код ```\n||скрытый текст||\n[Гиперссылка](t.me)",
//         {
//           parse_mode: "MarkdownV2",
//         }
//       );
//     } else if (msg.text == "/menu") {
//       await bot.sendMessage(msg.chat.id, `Меню бота`, {
//         reply_markup: {
//           keyboard: [
//             ["⭐️ Картинка", "⭐️ Видео"],
//             ["⭐️ Аудио", "⭐️ Голосовое сообщение"],
//             ["⭐️ Контакт", "⭐️ Геолокация"],
//             ["❌ Закрыть меню"],
//           ],
//           resize_keyboard: true,
//         },
//       });
//     } else if (msg.text == "❌ Закрыть меню") {
//       await bot.sendMessage(msg.chat.id, "Меню закрыто", {
//         reply_markup: {
//           remove_keyboard: true,
//         },
//       });
//     } else {
//       await bot.sendMessage(msg.chat.id, msg.text);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

bot.on("photo", async (img) => {
  try {
    await bot.downloadFile(img.photo[img.photo.length - 1].file_id, "./image");
  } catch (error) {
    console.log(error);
  }
  console.log(img);
});
