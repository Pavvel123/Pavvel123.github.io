const timetable = [
    {
      day: "Poniedziałek",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
          subject: "Metody numeryczne",
          room: "EA 507",
          teacher: "dr inż. Piotr Sypek",
          type: "L",
          week: "A"
        },
        {
          time: "10:15 - 11:00",
          subject: "Metody numeryczne",
          room: "EA 507",
          teacher: "dr inż. Piotr Sypek",
          type: "L",
          week: "A"
        },
        {
          time: "11:15 - 12:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA 504",
          teacher: "mgr Anna Domagalska",
          type: "P",
          week: "A"
        },
        {
          time: "12:15 - 13:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA 504",
          teacher: "mgr Anna Domagalska",
          type: "P",
          week: "A"
        },
        {
          time: "13:15 - 14:00",
          subject: "Systemy wbudowane i mikroprocesory",
          room: "NE AUD1L",
          teacher: "dr inż. Krzysztof Bikonis",
          type: "W",
          week: "AB",
          EndDate: "2025-04-14"
        },
        {
          time: "14:15 - 15:00",
          subject: "Systemy wbudowane i mikroprocesory",
          room: "NE AUD1L",
          teacher: "dr inż. Maciej Kokot",
          type: "W",
          week: "AB",
          EndDate: "2025-04-14"
        },
        {
          time: "15:15 - 16:00",
          subject: "Wprowadzenie do cyberbezpieczeństwa",
          room: "NE AUD1L",
          teacher: "dr inż. Wojciech Gumiński",
          type: "W",
          week: "AB",
          EndDate: "2025-04-14"
        },
        {
          time: "16:15 - 17:00",
          subject: "Wprowadzenie do cyberbezpieczeństwa",
          room: "NE AUD1L",
          teacher: "dr inż. Wojciech Gumiński",
          type: "W",
          week: "AB",
          EndDate: "2025-04-14"
        },
        {
          time: "17:15 - 18:00",
        },
        {
          time: "18:15 - 19:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE 205",
          teacher: "dr inż. Maciej Sac",
          type: "Ć",
          week: "AB"
        },
      ]
    },
    {
      day: "Wtorek",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
        },
        {
          time: "10:15 - 11:00",
        },
        {
          time: "11:15 - 12:00",
          subject: "Sztuczna inteligencja",
          room: "NE AUD1P",
          teacher: "dr hab. Julian Szymański",
          type: "W",
          week: "AB",
        },
        {
          time: "12:15 - 13:00",
          subject: "Sztuczna inteligencja",
          room: "NE AUD1P",
          teacher: "dr hab. Julian Szymański",
          type: "W",
          week: "AB",
        },
        {
          time: "13:15 - 14:00",
          subject: "Sztuczna inteligencja",
          room: "EA 507",
          teacher: "mgr inż. Szymon Olewniczak",
          type: "P",
          week: "AB",
          StartDate: "2025-04-29"
        },
        {
          time: "14:15 - 15:00",
          subject: "Sztuczna inteligencja",
          room: "EA 507",
          teacher: "mgr inż. Szymon Olewniczak",
          type: "P",
          week: "AB",
          StartDate: "2025-04-29"
        },
        {
          time: "15:15 - 16:00",
        },
        {
          time: "16:15 - 17:00",
        },
        {
          time: "17:15 - 18:00",
          subject: "System operacyjny MAC OS X i iOS",
          room: "zajęcia zdalne",
          teacher: "mgr inż. Tomasz Idzi",
          type: "W",
          week: "AB",
          EndDate: "2025-04-15"
        },
        {
          time: "18:15 - 19:00",
          subject: "System operacyjny MAC OS X i iOS",
          room: "zajęcia zdalne",
          teacher: "mgr inż. Tomasz Idzi",
          type: "W",
          week: "AB",
          EndDate: "2025-04-15"
        },
        {
          time: "19:15 - 20:00",
          subject: "System operacyjny MAC OS X i iOS",
          room: "zajęcia zdalne",
          teacher: "mgr inż. Tomasz Idzi",
          type: "L",
          week: "AB",
          EndDate: "2025-04-15"
        },
        {
          time: "20:15 - 21:00",
          subject: "System operacyjny MAC OS X i iOS",
          room: "zajęcia zdalne",
          teacher: "mgr inż. Tomasz Idzi",
          type: "L",
          week: "AB",
          EndDate: "2025-04-15"
        },
      ]
    },
    {
      day: "Środa",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
          subject: "Systemy wbudowane i mikroprocesory",
          room: "EA 438",
          teacher: "dr inż. Krzysztof Bikonis",
          type: "L",
          week: "AB",
        },
        {
          time: "10:15 - 11:00",
          subject: "Systemy wbudowane i mikroprocesory",
          room: "EA 438",
          teacher: "dr inż. Krzysztof Bikonis",
          type: "L",
          week: "AB",
        },
        {
          time: "11:15 - 12:00",
          subject: "Platformy technologiczne",
          room: "EA 507",
          teacher: "dr inż. Wojciech Siwicki",
          type: "L",
          week: "AB",
        },
        {
          time: "12:15 - 13:00",
          subject: "Platformy technologiczne",
          room: "EA 507",
          teacher: "dr inż. Wojciech Siwicki",
          type: "L",
          week: "AB",
        },
        {
          time: "13:15 - 14:00",
          subject: "Język angielski III",
          room: "Gmach B 313",
          teacher: "mgr Ewa Rogala",
          type: "Ć",
          week: "AB",
        },
        {
          time: "14:15 - 15:00",
          subject: "Język angielski III",
          room: "Gmach B 313",
          teacher: "mgr Ewa Rogala",
          type: "Ć",
          week: "AB",
        },
        {
          time: "15:15 - 16:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE AUD1L",
          teacher: "dr hab. Jerzy Konorski",
          type: "W",
          week: "AB",
        },
        {
          time: "16:15 - 17:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE AUD1L",
          teacher: "dr hab. Jerzy Konorski",
          type: "W",
          week: "AB",
        },
        {
          time: "17:15 - 18:00",
          subject: "Wprowadzenie do cyberbezpieczeństwa",
          room: "NE 207",
          teacher: "dr inż. Krzysztof Gierłowski",
          type: "P",
          week: "AB",
          StartDate: "2025-04-30"
        },
        {
          time: "18:15 - 19:00",
          subject: "Wprowadzenie do cyberbezpieczeństwa",
          room: "NE 207",
          teacher: "dr inż. Krzysztof Gierłowski",
          type: "P",
          week: "AB",
          StartDate: "2025-04-30"
        },
      ]
    },
    {
      day: "Czwartek",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
        },
        {
          time: "10:15 - 11:00",
          subject: "Platformy technologiczne",
          room: "EA AUD2",
          teacher: "dr inż. Krzysztof Cwalina",
          type: "W",
          week: "AB",
          EndDate: "2025-04-17"
        },
        {
          time: "11:15 - 12:00",
          subject: "Platformy technologiczne",
          room: "EA AUD2",
          teacher: "dr inż. Krzysztof Cwalina",
          type: "W",
          week: "AB",
          EndDate: "2025-04-17"
        },
        {
          time: "12:15 - 13:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA AUD2",
          teacher: "dr inż. Mariusz Matuszek",
          type: "W",
          week: "AB",
        },
        {
          time: "13:15 - 14:00",
        },
        {
          time: "14:15 - 15:00",
        },
        {
          time: "15:15 - 16:00",
        },
        {
          time: "16:15 - 17:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA 527",
          teacher: "mgr inż. Michał Kościowski",
          type: "L",
          week: "AB",
        },
        {
          time: "17:15 - 18:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA 527",
          teacher: "mgr inż. Michał Kościowski",
          type: "L",
          week: "AB",
        },
      ]
    },
    {
      day: "Piątek",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
          subject: "Sieci komputerowe",
          room: "NE AUD1P",
          teacher: "dr inż. Krzysztof Nowicki",
          type: "W",
          week: "AB",
        },
        {
          time: "10:15 - 11:00",
          subject: "Sieci komputerowe",
          room: "NE AUD1P",
          teacher: "dr inż. Krzysztof Nowicki",
          type: "W",
          week: "AB",
        },
        {
          time: "11:15 - 12:00",
          subject: "Metody numeryczne",
          room: "NE AUD1L",
          teacher: "dr hab. Grzegorz Fotyga",
          type: "W",
          week: "AB",
        },
        {
          time: "12:15 - 13:00",
          subject: "Sztuczna inteligencja",
          room: "EA 527",
          teacher: "mgr inż. Szymon Olewniczak",
          type: "L",
          week: "A",
        },
        {
          time: "13:15 - 14:00",
          subject: "Sztuczna inteligencja",
          room: "EA 527",
          teacher: "mgr inż. Szymon Olewniczak",
          type: "L",
          week: "A",
        },
        {
          time: "14:15 - 15:00",
          subject: "Metody numeryczne",
          room: "EA 507",
          teacher: "dr inż. Piotr Sypek",
          type: "P",
          week: "A"
        },
        {
          time: "15:15 - 16:00",
          subject: "Metody numeryczne",
          room: "EA 507",
          teacher: "dr inż. Piotr Sypek",
          type: "P",
          week: "A"
        },
        {
          time: "16:15 - 17:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE 239",
          teacher: "dr hab. Jacek Rak",
          type: "L",
          week: "A"
        },
        {
          time: "17:15 - 18:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE 239",
          teacher: "dr hab. Jacek Rak",
          type: "L",
          week: "A"
        },
      ]
    }
  ];
  
  export default timetable;