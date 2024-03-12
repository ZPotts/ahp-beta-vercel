import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger,transition,style,animate,query } from '@angular/animations';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.4s ease-in', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})

export class AppComponent {
  title = 'ahpv3';

  QUESTIONLIST =[
    {
      "questionId": 1,
      "questionText": "You noticed a slump in business this month. It’s likely time to update your promotions and marketing efforts. How do you feel about this element of business?",
      "answers": [
          {
            "answerId": 1,
            "answerText": " I enjoy creating marketing ideas and promotions for clients.",
            "points": 4
          },
          {
            "answerId": 2,
            "answerText": " I may not be the most creative but I have others who help me bring my ideas to life.",
            "points": 3
          },
          {
            "answerId":3,
            "answerText": "I know I should do it but I don't like it!",
            "points": 2
          },
          {
            "answerId":4,
            "answerText": "I prefer spending my time with clients and leaving marketing for someone else.",
            "points": 1
          }
      ]
    },
    {
      "questionId": 2,
      "questionText": "You are totally booked, have personal obligations, and need to renew your liability insurance. When it comes to self-direction and time management, how do you handle it?",
      "answers": [
          {
            "answerId": 1,
            "answerText": "I appreciate having someone to help me stay on track.",
            "points": 1
          },
          {
            "answerId": 2,
            "answerText": "Great! I don't really need to be managed anymore.",
            "points": 4
          },
          {
            "answerId":3,
            "answerText": "I'm good at these skills but still strive to be even better.",
            "points": 3
          },
          {
            "answerId":4,
            "answerText": "These aren't my best traits.",
            "points": 2
          }
      ]
    },
    {
      "questionId": 3,
      "questionText": "Your favorite designer just released their latest collection and you're coveting one of the items. If you make just a little more money this week, that item is yours! How would you rate your level of self-motivation?",
      "answers": [
          {
            "answerId": 1,
            "answerText": "I've got great intentions but I'm not the most self-motivated person.",
            "points": 1
          },
          {
            "answerId": 2,
            "answerText": "I'm self-motivated but I can always use extra support.",
            "points": 3
          },
          {
            "answerId":3,
            "answerText": "I know what I want and I'm ready to work hard to get it.",
            "points": 4
          },
          {
            "answerId":4,
            "answerText": "I'm self-motivated enough but I find it easier to follow the lead of others.",
            "points": 2
          }
      ]
    },
    {
      "questionId": 4,
      "questionText": "As with many other service-driven industries, the hair industry can be unpredictable. One month might be a challenge but the next may feel like a windfall. Can you live without the stability of a steady income?",
      "answers": [
          {
            "answerId": 1,
            "answerText": "Maybe, but I'm not sure I'm willing to test the waters to find out.",
            "points": 2
          },
          {
            "answerId": 2,
            "answerText": "I can live with the ebbs and flows of self-employment.",
            "points": 4
          },
          {
            "answerId":3,
            "answerText": "I think so, but it could create some stressful months if I don't plan properly.",
            "points": 3
          },
          {
            "answerId":4,
            "answerText": "I'm the sole provider for my family and need a steady paycheck.",
            "points": 1
          }
      ]
    },
    {
      "questionId": 5,
      "questionText": "Your station should reflect the environment you want to provide your clients. Do you prefer the peace of a solitary space, like one you might find in a solo suite? Or do you prefer the hustle and bustle of a busy salon?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "I mostly enjoy working alone but I appreciate having colleagues.",
            "points": 3
          },
          {
            "answerId":  2,
            "answerText": "I like working alone in my space and setting my own business practices, services, hours, etc.",
            "points": 4
          },
          {
            "answerId": 3,
            "answerText": "I enjoy collaborating with a team and don’t mind sharing my room with other hair professionals.",
            "points": 1
          },
          {
            "answerId": 4,
            "answerText": "I envision a scenario where I do both.",
            "points": 2
          }
      ]
    },
    {
      "questionId": 6,
      "questionText": "Events and specials are a must-do in the esthetic industry. They are a great way to build excitement and interest, but it takes time and energy to put them together. How would you describe your penchant for planning?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "I plan, but I want to be even better at it when it comes to business. ",
            "points": 3},
          {
            "answerId":  2,
            "answerText": "I try to plan, but my plans are often changed mid-stride. ",
            "points": 2},
          {
            "answerId": 3,
            "answerText": "I'm more of a “live in the moment” kind of person. ",
            "points": 1},
          {
            "answerId": 4,
            "answerText": "I follow the “fail to plan, plan to fail” mantra.",
            "points": 4}
      ]
    }
    ,

    {
      "questionId": 7,
      "questionText": "To share or not to share: Some of us enjoy sharing a salon suite, some not so much. It’s important to know which camp you’re in. Do you prefer the privacy of a solo space or the savings that come with splitting the cost?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "I prefer a quiet setting in an area I’ve designed.",
            "points": 4},
          {
            "answerId":  2,
            "answerText": "I don’t mind a team environment, but I don’t like to share my salon space with others.",
            "points": 3},
          {
            "answerId": 3,
            "answerText": "	I enjoy a busy work environment and don’t mind sharing my space.",
            "points": 1},
          {
            "answerId": 4,
            "answerText": "	Sharing a salon area with other hair care professionals during the week seems efficient.",
            "points": 2}
      ]
    },
    {
      "questionId": 8,
      "questionText": "Obstacles will arise in any path we choose. The obstacles you face as a business owner are not the same as those faced by an employee. How do you feel when you are confronted with obstacles?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "It depends on the obstacle; business-related challenges are best left to someone else. ",
            "points": 2},
          {
            "answerId":  2,
            "answerText": "I can typically handle obstacles, but I can get stuck when the solution isn't apparent. ",
            "points":  3},
          {
            "answerId": 3,
            "answerText": "I enjoy the challenge and love to solve problems! ",
            "points":  4},
          {
            "answerId": 4,
            "answerText": "I freeze in my tracks when challenges get thrown at me.",
            "points": 1}
      ]
    },
    {
      "questionId": 9,
      "questionText": "Owning a successful business or working for yourself involves money management. Which best describes how you deal with money?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "I have a savings plan in place and am never late with my bills.",
            "points": 4
          },
          {
            "answerId":  2,
            "answerText": "I struggle keeping money in the bank and am often overdrawn and overwhelmed.",
            "points": 1
          },
          {
            "answerId": 3,
            "answerText": "I rely on apps to keep me on track with my money and budgets, but I sometimes slip.",
            "points": 3
          },
          {
            "answerId": 4,
            "answerText": "I have a budget, but it’s hard to pass up a splurge item when desire strikes.",
            "points": 2
          }
      ]
    },
    {
      "questionId": 10,
      "questionText": "Work ethic is a coveted attribute that not everyone shares. Which best describes yours?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "I prefer a path where I'm not the one in charge of making decisions or meeting deadlines. ",
            "points": 1},
          {
            "answerId":  2,
            "answerText": "I work hard on projects, but if a nap comes calling ... ",
            "points": 2},
          {
            "answerId": 3,
            "answerText": "I have a good work ethic, but I still won't pass up a good shortcut. ",
            "points": 3},
          {
            "answerId": 4,
            "answerText": "I work hard until the job or task is complete.",
            "points": 4}
      ]
    },
    {
      "questionId": 11,
      "questionText": "Think about the excitement of helping a client for the first time or the satisfaction of seeing the results from a long-term hair care plan. Which sounds more enticing: clients you see only once, or clients you’ve built a relationship with?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "I enjoy working with regular clients on their long-term goals.",
            "points": 4
          },
          {
            "answerId":  2,
            "answerText": "I mostly enjoy working with new clients but I appreciate the reliability of my few regulars.",
            "points": 2
          },
          {
            "answerId": 3,
            "answerText": "I envision working in a resort salon/spa where I’ll only see clients one time—but they’ll never forget me!",
            "points": 1
          },
          {
            "answerId": 4,
            "answerText": "I would prefer an 80/20 split between regular clients and one-time clients.",
            "points": 3
          }
      ]
    },
    {
      "questionId": 12,
      "questionText": "Stress is something every professional feels at one point or another. Some of us manage it better than others. What best describes how you handle high levels of stress?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "Friends and colleagues tell me I’m as cool as a cucumber when stress hits.",
            "points": 4
          },
          {
            "answerId":  2,
            "answerText": "I rely on meditation apps to help me keep it together.",
            "points": 3
          },
          {
            "answerId": 3,
            "answerText": "I don’t manage stress well, and let’s leave it at that!",
            "points": 1
          },
          {
            "answerId": 4,
            "answerText": "I’m not always the nicest or most efficient person when stress hits.",
            "points": 2
          }
      ]
    },
    {
      "questionId": 13,
      "questionText": "Goal setting is simple, but accomplishing those goals takes commitment. Do you regularly set and accomplish goals or is the setting part the accomplishment in itself?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "My intentions are good, but I often fall short of accomplishing my goals. ",
            "points": 3},
          {
            "answerId":  2,
            "answerText": "Yes, I constantly set goals and create realistic plans to achieve them. ",
            "points": 4},
          {
            "answerId": 3,
            "answerText": "Goals?! I'm just trying to make it to Tuesday! ",
            "points": 1},
          {
            "answerId": 4,
            "answerText": "I set goals as part of my new year resolutions, and then usually forget them by March.",
            "points": 2}
      ]
    },
    {
      "questionId": 14,
      "questionText": "Working solo is ideal for some but can be boring or lonely for others. Some of us need frequent social interaction in our work environment while others prefer quiet and calm. Which best describes how you feel about working with others?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "I like working alone in my space, setting my own hours, and determining my own menu. ",
            "points": 4},
          {
            "answerId":  2,
            "answerText": "I mostly enjoy working alone, but I do appreciate having colleagues to confer with. ",
            "points": 3},
          {
            "answerId": 3,
            "answerText": "I envision a scenario where I work alone and with others. ",
            "points": 2},
          {
            "answerId": 4,
            "answerText": "I enjoy collaborating with a team and don't mind sharing my room with other hair professionals. ",
            "points": 1}
      ]
    },
    {
      "questionId": 15,
      "questionText": "Change can be tough. Some of us thrive on change while others prefer to avoid it. Which best describes how you deal with change?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "I enjoy changing things up in my business and personal life. ",
            "points": 4},
          {
            "answerId":  2,
            "answerText": "I'm willing to try, but I'm often scared at the notion of change. ",
            "points": 2},
          {
            "answerId": 3,
            "answerText": "Change? If it ain't broke ... ",
          "points": 1},
          {
            "answerId": 4,
            "answerText": "I do OK; I try to remember that change is a necessary part of life.",
            "points": 3}
      ]
    },
    {
      "questionId": 16,
      "questionText": "Communication is required for everything we do, but it doesn’t come easy to everyone. If you’re working with others, it’s important to be able to clearly communicate. Would you say you are a good communicator?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "Usually, but I work hard at it. ",
            "points": 3},
          {
            "answerId":  2,
            "answerText": "Yes, I take pride in my written and verbal communications with clients, colleagues, etc.",
          "points": 4},
          {
            "answerId": 3,
            "answerText": "It's not my best asset, but I haven't given up trying. ",
            "points": 2},
          {
            "answerId": 4,
            "answerText": "No. I would rather do anything else.",
            "points": 1}
      ]
    },
    {
      "questionId": 17,
      "questionText": "Making decisions is a necessary part of our every-day life. As a business owner, your daily decisions can be crucial to the success of your business. How confident are your decision-making skills?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "Not great; there are so many factors, possible outcomes; it's a lot of pressure.",
            "points": 1},
          {
            "answerId":  2,
            "answerText": "OK, but I may need a little time to think things through.  ",
            "points": 2},
          {
            "answerId": 3,
            "answerText": "Great, I'm often the sounding board for friends and colleagues. ",
            "points": 4},
          {
            "answerId": 4,
            "answerText": "Pretty good, but I sometimes find myself second-guessing my decisions.  ",
            "points": 3}
      ]
    },
    {
      "questionId": 18,
      "questionText": "Winning feels great but coming in second place is a bummer. You will likely experience both in your career. What kind of a winner and loser are you?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "Neutral. I appreciate healthy business competition and win or lose, I try to learn from it. ",
            "points": 3 },
          {
            "answerId":  2,
            "answerText": "Winning is important. I tend to find it difficult to handle defeat.",
          "points": 4},
          {
            "answerId": 3,
            "answerText": "Competition is too much stress. I spend so much time worrying that I can't focus on the task at hand. ",
          "points": 2},
          {
            "answerId":  4,
            "answerText": "Winning is important. I tend to find it difficult to handle defeat.",
          "points": 1},
      ]
    },
    {
      "questionId": 19,
      "questionText": "As a business owner, it takes persistence and self-discipline to achieve success. Would you describe yourself as having persistence and self-discipline?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "Yes, I'm proud of the work I accomplish, and my dedication gets me there. ",
            "points": 4},
          {
            "answerId":  2,
            "answerText": "Mostly, but sometimes it's nice to have someone push me a little. ",
            "points": 3},
          {
            "answerId": 3,
            "answerText": "Usually, but I can get easily sidetracked with less important issues.",
            "points": 2},
          {
            "answerId": 4,
            "answerText": "Does hitting the snooze button 10 times each morning count? ",
            "points": 1}
      ]
    },
    {
      "questionId": 20,
      "questionText": "Employees can focus on a specific skill but being the owner means wearing numerous hats. Which of these describes your ability to juggle?",
      "answers": [
          {
            "answerId":  1,
            "answerText": "I'm a specialist and I like to focus on my craft. ",
            "points": 1},
          {
            "answerId":  2,
            "answerText": "Between family, school, and work, juggling is my jam.",
            "points": 4},
          {
            "answerId": 3,
            "answerText": "I'm versatile when the need arises. ",
            "points": 3},
          {
            "answerId": 4,
            "answerText": "If I must, then I can, but I prefer to focus on one thing.",
            "points": 2}
      ]
    }
  ]

  /* scores */
  form1Totals: number = 0;
  form2Totals: number = 0;
  form3Totals: number = 0;
  form4Totals: number = 0;
  form5Totals: number = 0;
  form6Totals: number = 0;
  form7Totals: number = 0;
  totalScore: number = 0;
  userRecommendation: string = '';

  /* current page */
  currentPage: number = 1;

  /* buttons */
  buttonState: { [key: string]: string } = {
    '1': 'active',
    '2': 'disabled',
    '3': 'disabled',
    '4': 'disabled',
    '5': 'disabled',
    '6': 'disabled',
    '7': 'disabled',
  };

  questionsForm1 = new FormGroup({
    q1: new FormControl('', Validators.required),
    q2: new FormControl('', Validators.required ),
    q3: new FormControl('', Validators.required)
  });

  questionsForm2 = new FormGroup({
    q4: new FormControl('', Validators.required),
    q5: new FormControl('', Validators.required),
    q6: new FormControl('', Validators.required)
  });

  questionsForm3 = new FormGroup({
    q7: new FormControl('', Validators.required),
    q8: new FormControl('', Validators.required ),
    q9: new FormControl('', Validators.required)
  });

  questionsForm4 = new FormGroup({
    q10: new FormControl('', Validators.required),
    q11: new FormControl('', Validators.required),
    q12: new FormControl('', Validators.required)
  });


  questionsForm5 = new FormGroup({
    q13: new FormControl('', Validators.required),
    q14: new FormControl('', Validators.required ),
    q15: new FormControl('', Validators.required)
  });

  questionsForm6 = new FormGroup({
    q16: new FormControl('', Validators.required),
    q17: new FormControl('', Validators.required),
    q18: new FormControl('', Validators.required)
  });
  
  questionsForm7 = new FormGroup({
    q19: new FormControl('', Validators.required),
    q20: new FormControl('', Validators.required),
  });

  constructor() {
    this.questionsForm1.valueChanges.subscribe(values => {
      const q1Value = Number(values.q1);
      const q2Value = Number(values.q2);
      const q3Value = Number(values.q3);
      this.form1Totals = q1Value + q2Value + q3Value;
      console.log(this.form1Totals);
    });

    this.questionsForm2.valueChanges.subscribe(values => {
      const q4Value = Number(values.q4);
      const q5Value = Number(values.q5);
      const q6Value = Number(values.q6);
      this.form2Totals = q4Value + q5Value + q6Value;
      console.log(this.form2Totals);
    });

    this.questionsForm3.valueChanges.subscribe(values => {
      const q7Value = Number(values.q7);
      const q8Value = Number(values.q8);
      const q9Value = Number(values.q9);
      this.form3Totals = q7Value + q8Value + q9Value;
      console.log(this.form3Totals);
    });

    this.questionsForm4.valueChanges.subscribe(values => {
      const q10Value = Number(values.q10);
      const q11Value = Number(values.q11);
      const q12Value = Number(values.q12);
      this.form4Totals = q10Value + q11Value + q12Value;
      console.log(this.form4Totals);
    });

    this.questionsForm5.valueChanges.subscribe(values => {
      const q13Value = Number(values.q13);
      const q14Value = Number(values.q14);
      const q15Value = Number(values.q15);
      this.form5Totals = q13Value + q14Value + q15Value;
      console.log(this.form5Totals);
    });

    this.questionsForm6.valueChanges.subscribe(values => {
      const q16Value = Number(values.q16);
      const q17Value = Number(values.q17);
      const q18Value = Number(values.q18);
      this.form6Totals = q16Value + q17Value + q18Value;
      console.log(this.form6Totals);
    });

    
    this.questionsForm7.valueChanges.subscribe(values => {
      const q19Value = Number(values.q19);
      const q20Value = Number(values.q20);
      this.form7Totals = q19Value + q20Value;
      console.log(this.form7Totals);
    });
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  calculateRecommendation(totalScore: number): string {
    console.log("calc rec called with Total score: " + totalScore);
    if (totalScore > 50) {
      return "versatile";
    } else if (totalScore <= 50 && totalScore > 35 ) {
      return "contractor";
    } else {
      return "employee";
    }
  }

  onSubmit(whichForm: number | undefined) {
    this.totalScore = 
      this.form1Totals 
    + this.form2Totals 
    + this.form3Totals 
    + this.form4Totals 
    + this.form5Totals 
    + this.form6Totals 
    + this.form7Totals;
    this.buttonState[this.currentPage.toString()] = 'completed';
    this.currentPage = this.currentPage + 1;
    this.buttonState[this.currentPage.toString()] = 'active';


    if (whichForm === 7) {
      this.userRecommendation = this.calculateRecommendation(this.totalScore);
      console.log("User recommendation: " + this.userRecommendation);
    }

    console.log("form1: " + this.form1Totals);
    console.log("form2: " + this.form2Totals);
    console.log("form3: " + this.form3Totals);
    console.log("form4: " + this.form4Totals);
    console.log("form5: " + this.form5Totals);
    console.log("form6: " + this.form6Totals);
    console.log("form7: " + this.form7Totals);
    console.log("Total: " + this.totalScore);
  }
}
