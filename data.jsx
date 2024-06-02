export const questions = [
    {
      questionType: "radio",
      questionId: "q1",
      question: " Kaç tane büyük okyanus vardır?",
      answers: [
        { id: 1, answer: 3 },
        { id: 2, answer: 4 },
        { id: 3, answer: 5 },
        { id: 4, answer: 6 },
      ],
      rightAnswer: 6,
    },
    {
      questionType: "checkbox",
      questionId: "q2",
      question: " Ren Nehri, aşağıdaki hangi ülkelerden geçer",
      answers: [
        { id: 5, answer: "Almanya" },
        { id: 6, answer: "Fransa" },
        { id: 7, answer: "İsviçre" },
        { id: 8, answer: "İtalya" },
      ],
      rightAnswer: ["Almanya", "Fransa", "İsviçre"],
    },
    {
      questionType: "radio",
      questionId: "q3",
      question: " Everest Dağı, hangi dağ sırasında yer almaktadır?",
      answers: [
        { id: 9, answer: "And Dağları" },
        { id: 10, answer: "Karadeniz Dağları" },
        { id: 11, answer: "Himalaya Dağları" },
        { id: 12, answer: "Rockies Dağları" },
      ],
      rightAnswer: "Himalaya Dağları",
    },
    {
      questionType: "text",
      questionId: "q4",
      question:
        "Sahara Çölü hangi kıtada bulunmaktadır? (Asya,Avrupa,Afrika,Amerika)",
      rightAnswer: "afrika",
    },
  ];