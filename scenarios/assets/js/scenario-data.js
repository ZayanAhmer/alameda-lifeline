/* Scenario content: edit scenario wording and decisions here. */
window.__ALAMEDA_SCENARIO_CATALOG = {
  "A0": {
    "id": "A0",
    "track": "A",
    "title": "After School",
    "description": "Recognize a possible overdose in the school courtyard and act while other students are nearby.",
    "kind": "school",
    "resource": {
      "label": "Emergency response",
      "title": "Call 911 and get naloxone",
      "phone": "911",
      "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
    },
    "steps": [
      {
        "name": "Notice",
        "title": "Something feels wrong.",
        "scene": "Your friend Daniel is sitting near the school courtyard after classes. They seem unusually still. When you call their name, they do not respond, and their breathing seems slow and unusual. Other students are nearby. Nobody knows what happened.",
        "question": "What should you do?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for After School: Your friend Daniel is sitting near the school courtyard after classes. They seem unusually still. When you call their name, they do not respond, and their breathing seems slow and unusual. Other students are nearby. Nobody knows what happened.",
        "answers": [
          {
            "text": "Treat this as a possible medical emergency, get emergency help, and get naloxone if available.",
            "correct": true,
            "feedback": "Unresponsiveness plus slow or unusual breathing are S.A.V.E. signs. Act immediately; you do not need to know what happened."
          },
          {
            "text": "Assume they are sleeping and give them a few minutes.",
            "correct": false,
            "feedback": "This choice may delay the response. Unresponsiveness plus slow or unusual breathing are S.A.V.E. signs. Act immediately; you do not need to know what happened."
          },
          {
            "text": "Give them water and ask them to sit up.",
            "correct": false,
            "feedback": "This choice may delay the response. Unresponsiveness plus slow or unusual breathing are S.A.V.E. signs. Act immediately; you do not need to know what happened."
          }
        ]
      },
      {
        "name": "Respond",
        "title": "Help is nearby.",
        "scene": "A student nearby says they have naloxone nasal spray. Another student is reaching for their phone.",
        "question": "Which response is best?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for After School: A student nearby says they have naloxone nasal spray. Another student is reaching for their phone.",
        "answers": [
          {
            "text": "Use naloxone first, then decide whether emergency services are necessary.",
            "correct": false,
            "feedback": "This choice may delay the response. Calling 911 and giving naloxone happen together. One does not replace the other, and you do not need to wait for an adult to start."
          },
          {
            "text": "Wait for a teacher or another adult to arrive before doing anything.",
            "correct": false,
            "feedback": "This choice may delay the response. Calling 911 and giving naloxone happen together. One does not replace the other, and you do not need to wait for an adult to start."
          },
          {
            "text": "Call 911, use available naloxone according to its instructions, and follow the emergency call-taker’s directions.",
            "correct": true,
            "feedback": "Calling 911 and giving naloxone happen together. One does not replace the other, and you do not need to wait for an adult to start."
          }
        ]
      },
      {
        "name": "Stay",
        "title": "They are still not responding.",
        "scene": "After naloxone is given, your friend still does not seem to be responding normally. Emergency help is on the way.",
        "question": "What should you do while waiting for help?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for After School: After naloxone is given, your friend still does not seem to be responding normally. Emergency help is on the way.",
        "answers": [
          {
            "text": "Leave once naloxone has been given.",
            "correct": false,
            "feedback": "This choice may delay the response. Naloxone may take a few minutes to work, and more than one dose may be needed. Stay and follow the dispatcher’s directions."
          },
          {
            "text": "Stay with them, follow the emergency call-taker’s directions, and give another naloxone dose if indicated by the product instructions and current guidance.",
            "correct": true,
            "feedback": "Naloxone may take a few minutes to work, and more than one dose may be needed. Stay and follow the dispatcher’s directions."
          },
          {
            "text": "Assume naloxone did not work and stop seeking help.",
            "correct": false,
            "feedback": "This choice may delay the response. Naloxone may take a few minutes to work, and more than one dose may be needed. Stay and follow the dispatcher’s directions."
          }
        ]
      }
    ]
  },
  "A1": {
    "id": "A1",
    "track": "A",
    "title": "They Won't Wake Up",
    "description": "Practice recognizing a possible opioid overdose, giving naloxone, and getting help. This is a fictional scenario for education.",
    "kind": "overdose"
  },
  "A2": {
    "id": "A2",
    "track": "A",
    "title": "The Party",
    "description": "Handle an overdose when alcohol, fear of calling 911, and a possible return of symptoms complicate the situation.",
    "kind": "party",
    "resource": {
      "label": "Emergency response",
      "title": "Call 911 and get naloxone",
      "phone": "911",
      "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
    },
    "steps": [
      {
        "name": "Notice",
        "title": "Do not dismiss the signs.",
        "scene": "Two weeks later, Arjun is slumped against a wall at a small gathering. Pills and alcohol were both involved. His breathing is very slow and his lips look grayish.",
        "question": "What should you do first?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for The Party: Two weeks later, Arjun is slumped against a wall at a small gathering. Pills and alcohol were both involved. His breathing is very slow and his lips look grayish.",
        "answers": [
          {
            "text": "Assume he is just drunk and let him sleep it off.",
            "correct": false,
            "feedback": "This choice may delay the response. Alcohol being involved does not rule out opioid overdose. Slow breathing and gray lips are enough reason to act."
          },
          {
            "text": "Ask around about how much he drank before doing anything else.",
            "correct": false,
            "feedback": "This choice may delay the response. Alcohol being involved does not rule out opioid overdose. Slow breathing and gray lips are enough reason to act."
          },
          {
            "text": "Run a S.A.V.E. check: check responsiveness, breathing rate, and lip color.",
            "correct": true,
            "feedback": "Alcohol being involved does not rule out opioid overdose. Slow breathing and gray lips are enough reason to act."
          }
        ]
      },
      {
        "name": "Call",
        "title": "Someone is afraid of getting in trouble.",
        "scene": "A person nearby says, “We can’t call 911; there are pills here, and we’ll get in trouble.”",
        "question": "Which response is best?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for The Party: A person nearby says, “We can’t call 911; there are pills here, and we’ll get in trouble.”",
        "answers": [
          {
            "text": "Call 911 immediately and give naloxone if available.",
            "correct": true,
            "feedback": "Do not let fear or uncertainty delay emergency help. Legal protections have specific limits; get current local guidance after the emergency."
          },
          {
            "text": "Do not call; find another way to help.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not let fear or uncertainty delay emergency help. Legal protections have specific limits; get current local guidance after the emergency."
          },
          {
            "text": "Hide the pills first, then call.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not let fear or uncertainty delay emergency help. Legal protections have specific limits; get current local guidance after the emergency."
          }
        ]
      },
      {
        "name": "Respond",
        "title": "Breathing has not improved.",
        "scene": "About 2–3 minutes after the first dose, Mike still is not breathing normally.",
        "question": "What should happen next?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for The Party: About 2–3 minutes after the first dose, Mike still is not breathing normally.",
        "answers": [
          {
            "text": "Wait longer; he might just be slow to respond.",
            "correct": false,
            "feedback": "This choice may delay the response. If there is no improvement after 2–3 minutes, another dose may be needed. Keep emergency services involved and follow the dispatcher’s instructions."
          },
          {
            "text": "Give another naloxone dose according to product instructions and continue rescue breathing if trained while waiting for EMS.",
            "correct": true,
            "feedback": "If there is no improvement after 2–3 minutes, another dose may be needed. Keep emergency services involved and follow the dispatcher’s instructions."
          },
          {
            "text": "Try to wake him by shouting louder.",
            "correct": false,
            "feedback": "This choice may delay the response. If there is no improvement after 2–3 minutes, another dose may be needed. Keep emergency services involved and follow the dispatcher’s instructions."
          }
        ]
      },
      {
        "name": "Stay",
        "title": "He says he feels fine.",
        "scene": "Mike wakes up and says he is fine.",
        "question": "What is the safest response?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for The Party: Mike wakes up and says he is fine.",
        "answers": [
          {
            "text": "Let him go lie down alone.",
            "correct": false,
            "feedback": "This choice may delay the response. Improvement is not the end of the emergency. Symptoms can return after naloxone wears off, so stay until medical professionals take over."
          },
          {
            "text": "Have him walk it off outside.",
            "correct": false,
            "feedback": "This choice may delay the response. Improvement is not the end of the emergency. Symptoms can return after naloxone wears off, so stay until medical professionals take over."
          },
          {
            "text": "Stay with him until EMS arrives; naloxone can wear off before the opioid does.",
            "correct": true,
            "feedback": "Improvement is not the end of the emergency. Symptoms can return after naloxone wears off, so stay until medical professionals take over."
          }
        ]
      }
    ]
  },
  "A3": {
    "id": "A3",
    "track": "A",
    "title": "The Study Session",
    "description": "Respond when a classmate dismisses the risk and the person believes they took a different medication.",
    "kind": "study",
    "resource": {
      "label": "Emergency response",
      "title": "Call 911 and get naloxone",
      "phone": "911",
      "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
    },
    "steps": [
      {
        "name": "Notice",
        "title": "Trust what you observe.",
        "scene": "You are studying with classmates at Embarcadero High. Maya took what she believed was a Xanax bought online for exam stress. She becomes unresponsive with shallow breathing. A classmate says, “She’s fine, she does this sometimes.”",
        "question": "What should you do first?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for The Study Session: You are studying with classmates at Embarcadero High. Maya took what she believed was a Xanax bought online for exam stress. She becomes unresponsive with shallow breathing. A classmate says, “She’s fine, she does this sometimes.”",
        "answers": [
          {
            "text": "Run your own S.A.V.E. check regardless of what others say.",
            "correct": true,
            "feedback": "Do not let someone else’s reassurance override what you observe. Unresponsiveness and abnormal breathing need urgent action."
          },
          {
            "text": "Trust the classmate; she probably just needs rest.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not let someone else’s reassurance override what you observe. Unresponsiveness and abnormal breathing need urgent action."
          },
          {
            "text": "Wait for someone who knows her better to decide.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not let someone else’s reassurance override what you observe. Unresponsiveness and abnormal breathing need urgent action."
          }
        ]
      },
      {
        "name": "Call",
        "title": "A classmate refuses to call 911.",
        "scene": "The classmate says, “Her parents will be furious with us.”",
        "question": "Which response is best?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for The Study Session: The classmate says, “Her parents will be furious with us.”",
        "answers": [
          {
            "text": "Respect the objection and do not call.",
            "correct": false,
            "feedback": "This choice may delay the response. You do not need group consensus to get someone emergency help. Do not let fear delay the call."
          },
          {
            "text": "Wait to see if she wakes up in a few minutes.",
            "correct": false,
            "feedback": "This choice may delay the response. You do not need group consensus to get someone emergency help. Do not let fear delay the call."
          },
          {
            "text": "Explain that protections may apply and call 911 yourself if no one else will.",
            "correct": true,
            "feedback": "You do not need group consensus to get someone emergency help. Do not let fear delay the call."
          }
        ]
      },
      {
        "name": "Respond",
        "title": "Maya believes she took a Xanax.",
        "scene": "Maya says she did not take an opioid. You still observe S.A.V.E. signs.",
        "question": "What should you do?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for The Study Session: Maya says she did not take an opioid. You still observe S.A.V.E. signs.",
        "answers": [
          {
            "text": "Give naloxone if overdose is suspected and S.A.V.E. signs are present; follow product instructions and the dispatcher’s directions.",
            "correct": true,
            "feedback": "Counterfeit pills can contain unexpected substances. When an overdose is suspected, do not delay emergency help while trying to identify a pill."
          },
          {
            "text": "Hold off on naloxone because she says it was not an opioid.",
            "correct": false,
            "feedback": "This choice may delay the response. Counterfeit pills can contain unexpected substances. When an overdose is suspected, do not delay emergency help while trying to identify a pill."
          },
          {
            "text": "Try to identify the exact pill before acting.",
            "correct": false,
            "feedback": "This choice may delay the response. Counterfeit pills can contain unexpected substances. When an overdose is suspected, do not delay emergency help while trying to identify a pill."
          }
        ]
      },
      {
        "name": "Stay",
        "title": "Maya wakes up frightened and confused.",
        "scene": "Maya begins responding but seems scared and confused.",
        "question": "How should you respond?",
        "resource": {
          "label": "Emergency response",
          "title": "Call 911 and get naloxone",
          "phone": "911",
          "body": "Call 911 immediately, get naloxone if available, and follow the emergency call-taker’s directions. Naloxone does not replace emergency medical care."
        },
        "imageAlt": "Illustration for The Study Session: Maya begins responding but seems scared and confused.",
        "answers": [
          {
            "text": "Tell her she is in trouble and needs to explain herself.",
            "correct": false,
            "feedback": "This choice may delay the response. A calm, nonjudgmental response preserves trust and keeps her supported until she is evaluated by medical professionals."
          },
          {
            "text": "Reassure her calmly, stay with her, and wait for EMS.",
            "correct": true,
            "feedback": "A calm, nonjudgmental response preserves trust and keeps her supported until she is evaluated by medical professionals."
          },
          {
            "text": "Leave once she is talking.",
            "correct": false,
            "feedback": "This choice may delay the response. A calm, nonjudgmental response preserves trust and keeps her supported until she is evaluated by medical professionals."
          }
        ]
      }
    ]
  },
  "A4": {
    "id": "A4",
    "track": "A",
    "title": "Where Is the Naloxone?",
    "description": "Build preparedness before an emergency occurs by learning the school’s access and response process.",
    "kind": "preparedness",
    "resource": {
      "label": "Preparedness",
      "title": "Know your school’s process",
      "body": "Ask designated staff about naloxone supplies and the emergency-response procedure in advance. Do not publish unverified cabinet locations or access codes."
    },
    "steps": [
      {
        "name": "Prepare",
        "title": "Learn the process before you need it.",
        "scene": "In health class, you learn Embarcadero High may have naloxone on campus, but you do not know where it is kept or who can help.",
        "question": "What should you do?",
        "resource": {
          "label": "Preparedness",
          "title": "Know your school’s process",
          "body": "Ask designated staff about naloxone supplies and the emergency-response procedure in advance. Do not publish unverified cabinet locations or access codes."
        },
        "imageAlt": "Illustration for Where Is the Naloxone?: In health class, you learn Embarcadero High may have naloxone on campus, but you do not know where it is kept or who can help.",
        "answers": [
          {
            "text": "Assume it is unavailable unless you have personally seen it.",
            "correct": false,
            "feedback": "This choice may delay the response. Confirm your school’s storage and access process in advance so you do not have to figure it out during a crisis."
          },
          {
            "text": "Wait until an actual emergency to find out.",
            "correct": false,
            "feedback": "This choice may delay the response. Confirm your school’s storage and access process in advance so you do not have to figure it out during a crisis."
          },
          {
            "text": "Ask a designated staff member about the school’s naloxone procedures and supplies.",
            "correct": true,
            "feedback": "Confirm your school’s storage and access process in advance so you do not have to figure it out during a crisis."
          }
        ]
      },
      {
        "name": "Respond",
        "title": "Know what naloxone can and cannot do.",
        "scene": "You are learning what to do if someone may be experiencing an opioid overdose.",
        "question": "Which statement is accurate?",
        "resource": {
          "label": "Preparedness",
          "title": "Know your school’s process",
          "body": "Ask designated staff about naloxone supplies and the emergency-response procedure in advance. Do not publish unverified cabinet locations or access codes."
        },
        "imageAlt": "Illustration for Where Is the Naloxone?: You are learning what to do if someone may be experiencing an opioid overdose.",
        "answers": [
          {
            "text": "Naloxone can reverse an opioid overdose, including one involving fentanyl, but EMS is still needed.",
            "correct": true,
            "feedback": "Naloxone can reverse an opioid overdose, but emergency medical care is still needed. Learn your school’s approved procedure in advance."
          },
          {
            "text": "Naloxone replaces the need for emergency care.",
            "correct": false,
            "feedback": "This choice may delay the response. Naloxone can reverse an opioid overdose, but emergency medical care is still needed. Learn your school’s approved procedure in advance."
          },
          {
            "text": "Naloxone only works if you know exactly which opioid was involved.",
            "correct": false,
            "feedback": "This choice may delay the response. Naloxone can reverse an opioid overdose, but emergency medical care is still needed. Learn your school’s approved procedure in advance."
          }
        ]
      }
    ]
  },
  "A5": {
    "id": "A5",
    "track": "A",
    "title": "I'm Worried About My Friend",
    "description": "Practice a supportive conversation about pill use, and recognize when the situation changes into an emergency.",
    "kind": "conversation",
    "resource": {
      "label": "Support, not an emergency",
      "title": "First Step, Alameda County",
      "phone": "1-800-491-9099",
      "body": "Call or text to discuss mental health and substance-use support. First Step is for screening and referrals, not crises. For an immediate emergency, call 911.",
      "links": [
        {
          "text": "About First Step",
          "url": "https://health.alamedacountyca.gov/division/first-step/"
        }
      ]
    },
    "steps": [
      {
        "name": "Listen",
        "title": "A friend confides in you.",
        "scene": "A friend tells you privately they have been taking pills from someone else and asks you not to tell anyone. They are awake and talking normally.",
        "question": "How should you respond?",
        "resource": {
          "label": "Support, not an emergency",
          "title": "First Step, Alameda County",
          "phone": "1-800-491-9099",
          "body": "Call or text to discuss mental health and substance-use support. First Step is for screening and referrals, not crises. For an immediate emergency, call 911.",
          "links": [
            {
              "text": "About First Step",
              "url": "https://health.alamedacountyca.gov/division/first-step/"
            }
          ]
        },
        "imageAlt": "Illustration for I'm Worried About My Friend: A friend tells you privately they have been taking pills from someone else and asks you not to tell anyone. They are awake and talking normally.",
        "answers": [
          {
            "text": "Listen calmly, show concern, and encourage them to talk to a trusted adult or professional.",
            "correct": true,
            "feedback": "A calm conversation can preserve trust. Encourage appropriate support without making a promise that could prevent you from getting help in an emergency."
          },
          {
            "text": "Shame them so they understand the seriousness.",
            "correct": false,
            "feedback": "This choice may delay the response. A calm conversation can preserve trust. Encourage appropriate support without making a promise that could prevent you from getting help in an emergency."
          },
          {
            "text": "Promise you will never tell anyone, no matter what.",
            "correct": false,
            "feedback": "This choice may delay the response. A calm conversation can preserve trust. Encourage appropriate support without making a promise that could prevent you from getting help in an emergency."
          }
        ]
      },
      {
        "name": "Act",
        "title": "The situation changes.",
        "scene": "Later, your friend becomes hard to wake and their breathing changes.",
        "question": "What should you do now?",
        "resource": {
          "label": "Support, not an emergency",
          "title": "First Step, Alameda County",
          "phone": "1-800-491-9099",
          "body": "Call or text to discuss mental health and substance-use support. First Step is for screening and referrals, not crises. For an immediate emergency, call 911.",
          "links": [
            {
              "text": "About First Step",
              "url": "https://health.alamedacountyca.gov/division/first-step/"
            }
          ]
        },
        "imageAlt": "Illustration for I'm Worried About My Friend: Later, your friend becomes hard to wake and their breathing changes.",
        "answers": [
          {
            "text": "Keep it private and wait for them to recover.",
            "correct": false,
            "feedback": "This choice may delay the response. A private conversation becomes an emergency when S.A.V.E. signs appear. The priority shifts to getting emergency help."
          },
          {
            "text": "Try to identify the exact pill first.",
            "correct": false,
            "feedback": "This choice may delay the response. A private conversation becomes an emergency when S.A.V.E. signs appear. The priority shifts to getting emergency help."
          },
          {
            "text": "Recognize that the situation has changed, run a S.A.V.E. check, and call 911 immediately.",
            "correct": true,
            "feedback": "A private conversation becomes an emergency when S.A.V.E. signs appear. The priority shifts to getting emergency help."
          }
        ]
      }
    ]
  },
  "B1": {
    "id": "B1",
    "track": "B",
    "title": "Home Visit",
    "description": "Practice responding during a community health worker’s home wellness visit.",
    "kind": "home",
    "resource": {
      "label": "Local connection",
      "title": "Alameda County naloxone resources",
      "body": "Find free naloxone and local overdose-prevention information before an emergency.",
      "links": [
        {
          "text": "Alameda County Health · Opioid Treatment & Support",
          "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
        }
      ]
    },
    "steps": [
      {
        "name": "Notice",
        "title": "Your client’s condition changes.",
        "scene": "You are a Community Health Worker visiting your client Marisol. She seems “out of it,” says her chronic pain has worsened, and mentions taking extra medication. She passes out.",
        "question": "What should you do first?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for Home Visit: You are a Community Health Worker visiting your client Marisol. She seems “out of it,” says her chronic pain has worsened, and mentions taking extra medication. She passes out.",
        "answers": [
          {
            "text": "Give her a few minutes; she might just be very tired.",
            "correct": false,
            "feedback": "This choice may delay the response. Check responsiveness and breathing, and treat the signs as a possible emergency rather than waiting for more information."
          },
          {
            "text": "Call her family before deciding what to do.",
            "correct": false,
            "feedback": "This choice may delay the response. Check responsiveness and breathing, and treat the signs as a possible emergency rather than waiting for more information."
          },
          {
            "text": "Run a S.A.V.E. check: try to wake her and check her breathing, lips, and pupils.",
            "correct": true,
            "feedback": "Check responsiveness and breathing, and treat the signs as a possible emergency rather than waiting for more information."
          }
        ]
      },
      {
        "name": "Respond",
        "title": "You confirm S.A.V.E. signs.",
        "scene": "You confirm concerning S.A.V.E. signs and carry naloxone as part of your CHW kit.",
        "question": "What is the best next response?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for Home Visit: You confirm concerning S.A.V.E. signs and carry naloxone as part of your CHW kit.",
        "answers": [
          {
            "text": "Call 911 immediately and administer naloxone while waiting.",
            "correct": true,
            "feedback": "As the first person on scene, call 911 and give available naloxone according to its instructions while help is on the way."
          },
          {
            "text": "Wait for EMS before doing anything.",
            "correct": false,
            "feedback": "This choice may delay the response. As the first person on scene, call 911 and give available naloxone according to its instructions while help is on the way."
          },
          {
            "text": "Try to get her to drink water first.",
            "correct": false,
            "feedback": "This choice may delay the response. As the first person on scene, call 911 and give available naloxone according to its instructions while help is on the way."
          }
        ]
      },
      {
        "name": "Stay",
        "title": "There is no improvement yet.",
        "scene": "Marisol has not improved after a few minutes.",
        "question": "What should you do?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for Home Visit: Marisol has not improved after a few minutes.",
        "answers": [
          {
            "text": "Assume nothing more can be done until EMS arrives.",
            "correct": false,
            "feedback": "This choice may delay the response. Continue following the dispatcher’s directions, monitor breathing, and stay with her until emergency responders take over."
          },
          {
            "text": "Give another dose if indicated by product instructions, begin rescue breathing if trained, and stay with her.",
            "correct": true,
            "feedback": "Continue following the dispatcher’s directions, monitor breathing, and stay with her until emergency responders take over."
          },
          {
            "text": "Step out to call her doctor’s office for guidance.",
            "correct": false,
            "feedback": "This choice may delay the response. Continue following the dispatcher’s directions, monitor breathing, and stay with her until emergency responders take over."
          }
        ]
      }
    ]
  },
  "B2": {
    "id": "B2",
    "track": "B",
    "title": "Resource Fair",
    "description": "Respond at a community event when a person may be overdosing and the only naloxone kit is expired.",
    "kind": "outreach",
    "resource": {
      "label": "Local connection",
      "title": "Alameda County naloxone resources",
      "body": "Find free naloxone and local overdose-prevention information before an emergency.",
      "links": [
        {
          "text": "Alameda County Health · Opioid Treatment & Support",
          "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
        }
      ]
    },
    "steps": [
      {
        "name": "Respond",
        "title": "A person needs help.",
        "scene": "You are staffing a community health table at a neighborhood event. Someone runs up: “Jalen took some pills, he isn’t waking up and he’s breathing funny!” You have an expired naloxone kit in your bag.",
        "question": "What should you do first?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for Resource Fair: You are staffing a community health table at a neighborhood event. Someone runs up: “Jalen took some pills, he isn’t waking up and he’s breathing funny!” You have an expired naloxone kit in your bag.",
        "answers": [
          {
            "text": "Bring the kit, call 911, and run a S.A.V.E. check on Jalen.",
            "correct": true,
            "feedback": "Do not delay calling 911 or assessing the person while searching for perfect information. Bring available naloxone and follow emergency guidance."
          },
          {
            "text": "Leave the expired kit behind and look for event medical staff instead.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not delay calling 911 or assessing the person while searching for perfect information. Bring available naloxone and follow emergency guidance."
          },
          {
            "text": "Ask the group what Jalen took before responding.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not delay calling 911 or assessing the person while searching for perfect information. Bring available naloxone and follow emergency guidance."
          }
        ]
      },
      {
        "name": "Treat",
        "title": "The kit is expired.",
        "scene": "Someone notices the expiration date and says the kit should not be used.",
        "question": "Which response is best?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for Resource Fair: Someone notices the expiration date and says the kit should not be used.",
        "answers": [
          {
            "text": "Do not use expired naloxone because it could be harmful.",
            "correct": false,
            "feedback": "This choice may delay the response. Expired naloxone may be less effective, but do not let the expiration date delay emergency help or prevent use when no better option is available."
          },
          {
            "text": "Wait for someone to bring a non-expired kit before acting.",
            "correct": false,
            "feedback": "This choice may delay the response. Expired naloxone may be less effective, but do not let the expiration date delay emergency help or prevent use when no better option is available."
          },
          {
            "text": "Do not withhold it solely because it is expired; call 911 and follow the product instructions and dispatcher’s guidance.",
            "correct": true,
            "feedback": "Expired naloxone may be less effective, but do not let the expiration date delay emergency help or prevent use when no better option is available."
          }
        ]
      },
      {
        "name": "Stay",
        "title": "Jalen begins to stir.",
        "scene": "After a dose, Jalen begins to stir but is not fully back to normal.",
        "question": "What should you do?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for Resource Fair: After a dose, Jalen begins to stir but is not fully back to normal.",
        "answers": [
          {
            "text": "Stop once the dose is given; EMS will handle the rest.",
            "correct": false,
            "feedback": "This choice may delay the response. Stay with Jalen, keep monitoring breathing, follow dispatcher instructions, and tell EMS what was given and that the kit was expired."
          },
          {
            "text": "Stay, monitor breathing, give another dose if indicated, and tell EMS the kit was expired.",
            "correct": true,
            "feedback": "Stay with Jalen, keep monitoring breathing, follow dispatcher instructions, and tell EMS what was given and that the kit was expired."
          },
          {
            "text": "Help Jalen walk to a bench once he stirs.",
            "correct": false,
            "feedback": "This choice may delay the response. Stay with Jalen, keep monitoring breathing, follow dispatcher instructions, and tell EMS what was given and that the kit was expired."
          }
        ]
      }
    ]
  },
  "B3": {
    "id": "B3",
    "track": "B",
    "title": "The Long Wait",
    "description": "Support a family during a delayed emergency response, including a language barrier and a minor who needs help.",
    "kind": "wait",
    "resource": {
      "label": "Local connection",
      "title": "Alameda County naloxone resources",
      "body": "Find free naloxone and local overdose-prevention information before an emergency.",
      "links": [
        {
          "text": "Alameda County Health · Opioid Treatment & Support",
          "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
        }
      ]
    },
    "steps": [
      {
        "name": "Notice",
        "title": "EMS is delayed.",
        "scene": "You return to Marisol’s apartment for a follow-up visit. Her 16-year-old nephew Kai is unresponsive on the floor. Marisol says he was not acting right after friends visited. EMS estimates a 15–20 minute delay. Marisol’s mother, who does not speak English, is frightened.",
        "question": "What should you do first?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for The Long Wait: You return to Marisol’s apartment for a follow-up visit. Her 16-year-old nephew Kai is unresponsive on the floor. Marisol says he was not acting right after friends visited. EMS estimates a 15–20 minute delay. Marisol’s mother, who does not speak English, is frightened.",
        "answers": [
          {
            "text": "Wait a few minutes to see if Kai improves because EMS is delayed.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not wait for a translator or for EMS to arrive before taking immediate response steps. Follow the emergency call-taker’s instructions."
          },
          {
            "text": "Find someone to translate before doing anything else.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not wait for a translator or for EMS to arrive before taking immediate response steps. Follow the emergency call-taker’s instructions."
          },
          {
            "text": "Begin a S.A.V.E. check, call 911 if not already connected, and administer available naloxone according to instructions.",
            "correct": true,
            "feedback": "Do not wait for a translator or for EMS to arrive before taking immediate response steps. Follow the emergency call-taker’s instructions."
          }
        ]
      },
      {
        "name": "Respond",
        "title": "Kai has not improved.",
        "scene": "About three minutes pass and Kai has not responded normally.",
        "question": "What should you do?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for The Long Wait: About three minutes pass and Kai has not responded normally.",
        "answers": [
          {
            "text": "Give another dose if indicated by product instructions, begin rescue breathing if trained, and keep monitoring him.",
            "correct": true,
            "feedback": "Follow the dispatcher’s instructions, monitor breathing, and use additional naloxone only as indicated by current product guidance."
          },
          {
            "text": "Wait for EMS because you have done what you can.",
            "correct": false,
            "feedback": "This choice may delay the response. Follow the dispatcher’s instructions, monitor breathing, and use additional naloxone only as indicated by current product guidance."
          },
          {
            "text": "Call around for other family members.",
            "correct": false,
            "feedback": "This choice may delay the response. Follow the dispatcher’s instructions, monitor breathing, and use additional naloxone only as indicated by current product guidance."
          }
        ]
      },
      {
        "name": "Support",
        "title": "The grandmother is panicking.",
        "scene": "Kai’s grandmother is frightened, and you do not share a language.",
        "question": "How can you support her while keeping Kai’s care the priority?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for The Long Wait: Kai’s grandmother is frightened, and you do not share a language.",
        "answers": [
          {
            "text": "Focus only on Kai and ignore the communication barrier.",
            "correct": false,
            "feedback": "This choice may delay the response. Simple communication and interpretation support can help the family understand what is happening without delaying care."
          },
          {
            "text": "Use simple gestures, a translation app, or a phone interpreter while reassuring her and keeping her nearby.",
            "correct": true,
            "feedback": "Simple communication and interpretation support can help the family understand what is happening without delaying care."
          },
          {
            "text": "Ask her to leave so you can focus.",
            "correct": false,
            "feedback": "This choice may delay the response. Simple communication and interpretation support can help the family understand what is happening without delaying care."
          }
        ]
      },
      {
        "name": "Stay",
        "title": "The delay continues.",
        "scene": "Emergency responders are still on the way.",
        "question": "What should guide your next actions?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for The Long Wait: Emergency responders are still on the way.",
        "answers": [
          {
            "text": "Assume one additional dose is always the maximum.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not use a fixed dose limit in place of current instructions. Continue monitoring and follow the emergency call-taker’s directions."
          },
          {
            "text": "Stop if Kai does not wake up after two doses.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not use a fixed dose limit in place of current instructions. Continue monitoring and follow the emergency call-taker’s directions."
          },
          {
            "text": "Keep monitoring breathing and follow the dispatcher and product instructions; additional doses may be needed.",
            "correct": true,
            "feedback": "Do not use a fixed dose limit in place of current instructions. Continue monitoring and follow the emergency call-taker’s directions."
          }
        ]
      }
    ]
  },
  "B4": {
    "id": "B4",
    "track": "B",
    "title": "Two Down at the Encampment",
    "description": "Practice coordinated emergency response when two people are unresponsive and supplies are limited.",
    "kind": "multiple",
    "resource": {
      "label": "Local connection",
      "title": "Alameda County naloxone resources",
      "body": "Find free naloxone and local overdose-prevention information before an emergency.",
      "links": [
        {
          "text": "Alameda County Health · Opioid Treatment & Support",
          "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
        }
      ]
    },
    "steps": [
      {
        "name": "Alert",
        "title": "Two people need help.",
        "scene": "You are doing outreach with a harm-reduction team. Someone flags you down: two people who were together are now both unresponsive.",
        "question": "What should you do first?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for Two Down at the Encampment: You are doing outreach with a harm-reduction team. Someone flags you down: two people who were together are now both unresponsive.",
        "answers": [
          {
            "text": "Call 911 immediately for the emergency and make a quick S.A.V.E. check on each person.",
            "correct": true,
            "feedback": "Get emergency services moving immediately. Communicate that there are two people and follow the dispatcher’s instructions."
          },
          {
            "text": "Assess each person fully before calling 911 for either.",
            "correct": false,
            "feedback": "This choice may delay the response. Get emergency services moving immediately. Communicate that there are two people and follow the dispatcher’s instructions."
          },
          {
            "text": "Only call once you have decided who needs help more.",
            "correct": false,
            "feedback": "This choice may delay the response. Get emergency services moving immediately. Communicate that there are two people and follow the dispatcher’s instructions."
          }
        ]
      },
      {
        "name": "Prioritize",
        "title": "One person is not breathing normally.",
        "scene": "One person is not breathing at all; the other is breathing shallowly but still has breaths. You have a limited supply of naloxone.",
        "question": "What is the priority described in this scenario?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for Two Down at the Encampment: One person is not breathing at all; the other is breathing shallowly but still has breaths. You have a limited supply of naloxone.",
        "answers": [
          {
            "text": "Treat whoever you reach first without checking their condition.",
            "correct": false,
            "feedback": "This choice may delay the response. Tell the dispatcher there are two people and describe each person’s breathing. Follow their directions and provide help without delaying emergency response."
          },
          {
            "text": "Split each dose evenly between both people.",
            "correct": false,
            "feedback": "This choice may delay the response. Tell the dispatcher there are two people and describe each person’s breathing. Follow their directions and provide help without delaying emergency response."
          },
          {
            "text": "Prioritize the person who is not breathing at all while continuing to follow the dispatcher’s directions for both people.",
            "correct": true,
            "feedback": "Tell the dispatcher there are two people and describe each person’s breathing. Follow their directions and provide help without delaying emergency response."
          }
        ]
      },
      {
        "name": "Continue",
        "title": "One person improves; the other does not.",
        "scene": "The first person improves, while the second still is not responding.",
        "question": "What should happen next?",
        "resource": {
          "label": "Local connection",
          "title": "Alameda County naloxone resources",
          "body": "Find free naloxone and local overdose-prevention information before an emergency.",
          "links": [
            {
              "text": "Alameda County Health · Opioid Treatment & Support",
              "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
            }
          ]
        },
        "imageAlt": "Illustration for Two Down at the Encampment: The first person improves, while the second still is not responding.",
        "answers": [
          {
            "text": "Use the next available naloxone dose on the second person according to instructions and follow the dispatcher’s guidance.",
            "correct": true,
            "feedback": "Continue monitoring both people and communicate changes to the dispatcher. Follow current naloxone and breathing-support instructions."
          },
          {
            "text": "Stop helping the second person until the first person is fully recovered.",
            "correct": false,
            "feedback": "This choice may delay the response. Continue monitoring both people and communicate changes to the dispatcher. Follow current naloxone and breathing-support instructions."
          },
          {
            "text": "Save the remaining dose in case a third person needs it.",
            "correct": false,
            "feedback": "This choice may delay the response. Continue monitoring both people and communicate changes to the dispatcher. Follow current naloxone and breathing-support instructions."
          }
        ]
      }
    ]
  },
  "C1": {
    "id": "C1",
    "track": "C",
    "title": "Gurgling Sounds",
    "description": "Practice being a youth bystander in a juvenile facility and reporting an emergency to trained staff.",
    "kind": "facility",
    "resource": {
      "label": "Get help now",
      "title": "Alert trained facility staff",
      "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
    },
    "steps": [
      {
        "name": "Notice",
        "title": "A classmate is unresponsive.",
        "scene": "You are in class with other youth. One student is slumped over a desk, making gurgling sounds, and does not respond when another student says their name.",
        "question": "What is the most important thing to do right now?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for Gurgling Sounds: You are in class with other youth. One student is slumped over a desk, making gurgling sounds, and does not respond when another student says their name.",
        "answers": [
          {
            "text": "Wait to see if they wake up; you do not want to make a big deal out of nothing.",
            "correct": false,
            "feedback": "This choice may delay the response. Gurgling sounds and unresponsiveness are serious warning signs. Getting trained staff there immediately is the fastest way to help."
          },
          {
            "text": "Try to shake them awake yourself before saying anything to staff.",
            "correct": false,
            "feedback": "This choice may delay the response. Gurgling sounds and unresponsiveness are serious warning signs. Getting trained staff there immediately is the fastest way to help."
          },
          {
            "text": "Immediately tell staff: “Something’s wrong; they’re not responding and making unusual sounds.”",
            "correct": true,
            "feedback": "Gurgling sounds and unresponsiveness are serious warning signs. Getting trained staff there immediately is the fastest way to help."
          }
        ]
      },
      {
        "name": "Alert",
        "title": "Staff have not noticed.",
        "scene": "Staff are on the other side of the room and have not noticed the situation.",
        "question": "What should you do?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for Gurgling Sounds: Staff are on the other side of the room and have not noticed the situation.",
        "answers": [
          {
            "text": "Go directly to staff or use the facility’s alert method, and clearly describe what you are seeing.",
            "correct": true,
            "feedback": "Be specific and urgent. Saying the person is not waking up and making gurgling sounds helps staff understand what they need to check."
          },
          {
            "text": "Wait for staff to look over.",
            "correct": false,
            "feedback": "This choice may delay the response. Be specific and urgent. Saying the person is not waking up and making gurgling sounds helps staff understand what they need to check."
          },
          {
            "text": "Ask other students what they think is wrong first.",
            "correct": false,
            "feedback": "This choice may delay the response. Be specific and urgent. Saying the person is not waking up and making gurgling sounds helps staff understand what they need to check."
          }
        ]
      },
      {
        "name": "Report",
        "title": "Staff ask what happened.",
        "scene": "Staff arrive and ask you what you observed.",
        "question": "How should you respond?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for Gurgling Sounds: Staff arrive and ask you what you observed.",
        "answers": [
          {
            "text": "Say you do not know anything to avoid getting your classmate in trouble.",
            "correct": false,
            "feedback": "This choice may delay the response. Accurate information about what you observed and when helps staff and medical responders provide appropriate care quickly."
          },
          {
            "text": "Tell staff exactly what you saw and when it started, even if you do not know the cause.",
            "correct": true,
            "feedback": "Accurate information about what you observed and when helps staff and medical responders provide appropriate care quickly."
          },
          {
            "text": "Only answer if staff threaten consequences for not answering.",
            "correct": false,
            "feedback": "This choice may delay the response. Accurate information about what you observed and when helps staff and medical responders provide appropriate care quickly."
          }
        ]
      }
    ]
  },
  "C2": {
    "id": "C2",
    "track": "C",
    "title": "Something's Not Right",
    "description": "Practice recognizing abnormal breathing in a shared room and advocating when an initial report is dismissed.",
    "kind": "facility",
    "resource": {
      "label": "Get help now",
      "title": "Alert trained facility staff",
      "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
    },
    "steps": [
      {
        "name": "Notice",
        "title": "Breathing seems unusual.",
        "scene": "During a quieter period, you notice another youth has not moved in a while and seems to be breathing strangely: slowly, with long pauses.",
        "question": "What should you do?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for Something's Not Right: During a quieter period, you notice another youth has not moved in a while and seems to be breathing strangely: slowly, with long pauses.",
        "answers": [
          {
            "text": "Check whether they respond to their name or your approach, and alert staff immediately if they do not.",
            "correct": true,
            "feedback": "Do not wait for a scheduled check if something feels wrong now. Early recognition and a prompt report matter."
          },
          {
            "text": "Assume they are sleeping deeply and leave them alone.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not wait for a scheduled check if something feels wrong now. Early recognition and a prompt report matter."
          },
          {
            "text": "Wait until the next scheduled check to mention it.",
            "correct": false,
            "feedback": "This choice may delay the response. Do not wait for a scheduled check if something feels wrong now. Early recognition and a prompt report matter."
          }
        ]
      },
      {
        "name": "Speak up",
        "title": "Staff seem to think you are overreacting.",
        "scene": "You alert staff, but they do not seem concerned.",
        "question": "What is the best next response?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for Something's Not Right: You alert staff, but they do not seem concerned.",
        "answers": [
          {
            "text": "Drop it because staff did not seem concerned.",
            "correct": false,
            "feedback": "This choice may delay the response. It is appropriate to repeat specific observations respectfully. Clear details help staff assess the situation."
          },
          {
            "text": "Get frustrated and walk away.",
            "correct": false,
            "feedback": "This choice may delay the response. It is appropriate to repeat specific observations respectfully. Clear details help staff assess the situation."
          },
          {
            "text": "Calmly repeat what you observed and ask staff to check in person.",
            "correct": true,
            "feedback": "It is appropriate to repeat specific observations respectfully. Clear details help staff assess the situation."
          }
        ]
      },
      {
        "name": "Support",
        "title": "Staff confirm it is an emergency.",
        "scene": "Staff check and confirm an emergency. They begin responding and call for medical help.",
        "question": "What should you do now?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for Something's Not Right: Staff check and confirm an emergency. They begin responding and call for medical help.",
        "answers": [
          {
            "text": "Step back to give staff room to work and answer their questions clearly.",
            "correct": true,
            "feedback": "Once trained staff are responding, give them space and provide accurate information if asked."
          },
          {
            "text": "Try to give the person something yourself.",
            "correct": false,
            "feedback": "This choice may delay the response. Once trained staff are responding, give them space and provide accurate information if asked."
          },
          {
            "text": "Leave the area so you are not involved.",
            "correct": false,
            "feedback": "This choice may delay the response. Once trained staff are responding, give them space and provide accurate information if asked."
          }
        ]
      }
    ]
  },
  "C3": {
    "id": "C3",
    "track": "C",
    "title": "They're Not Listening",
    "description": "Practice respectfully persisting when a staff member initially dismisses a concern about a peer.",
    "kind": "advocacy",
    "resource": {
      "label": "Get help now",
      "title": "Alert trained facility staff",
      "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
    },
    "steps": [
      {
        "name": "Speak up",
        "title": "Your first report is dismissed.",
        "scene": "You tell a staff member that your roommate does not look right and is very hard to wake. The staff member says, “He’s probably just tired, let him sleep,” and starts to walk away.",
        "question": "What should you do?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for They're Not Listening: You tell a staff member that your roommate does not look right and is very hard to wake. The staff member says, “He’s probably just tired, let him sleep,” and starts to walk away.",
        "answers": [
          {
            "text": "Let it go because you told someone, so it is no longer your responsibility.",
            "correct": false,
            "feedback": "This choice may delay the response. Specific observations—such as not waking up or changes in breathing or color—can help staff understand why an immediate check is needed."
          },
          {
            "text": "Try to handle it yourself without staff.",
            "correct": false,
            "feedback": "This choice may delay the response. Specific observations—such as not waking up or changes in breathing or color—can help staff understand why an immediate check is needed."
          },
          {
            "text": "Calmly but firmly repeat specific details and ask for someone to check him right now.",
            "correct": true,
            "feedback": "Specific observations—such as not waking up or changes in breathing or color—can help staff understand why an immediate check is needed."
          }
        ]
      },
      {
        "name": "Stay",
        "title": "Staff realize it is serious.",
        "scene": "The staff member checks and realizes the situation is serious. More staff arrive to respond.",
        "question": "What should you do?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for They're Not Listening: The staff member checks and realizes the situation is serious. More staff arrive to respond.",
        "answers": [
          {
            "text": "Stay nearby for questions and follow any instructions, including stepping back or moving to a specific spot.",
            "correct": true,
            "feedback": "Remain available if staff need information while giving the responders room to work."
          },
          {
            "text": "Walk away now that more people are involved.",
            "correct": false,
            "feedback": "This choice may delay the response. Remain available if staff need information while giving the responders room to work."
          },
          {
            "text": "Try to listen closely to everything staff are doing.",
            "correct": false,
            "feedback": "This choice may delay the response. Remain available if staff need information while giving the responders room to work."
          }
        ]
      },
      {
        "name": "Reflect",
        "title": "You feel uneasy about pushing back.",
        "scene": "Afterward, you feel uneasy about having questioned the staff member.",
        "question": "What should you take away?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for They're Not Listening: Afterward, you feel uneasy about having questioned the staff member.",
        "answers": [
          {
            "text": "Do not report anything next time to avoid conflict.",
            "correct": false,
            "feedback": "This choice may delay the response. Advocating for a peer’s safety is appropriate. It is possible to persist respectfully without being confrontational."
          },
          {
            "text": "Assume you were wrong to push the issue because staff handled it.",
            "correct": false,
            "feedback": "This choice may delay the response. Advocating for a peer’s safety is appropriate. It is possible to persist respectfully without being confrontational."
          },
          {
            "text": "Recognize that speaking up clearly and respectfully was appropriate, and do it again if needed.",
            "correct": true,
            "feedback": "Advocating for a peer’s safety is appropriate. It is possible to persist respectfully without being confrontational."
          }
        ]
      }
    ]
  },
  "C4": {
    "id": "C4",
    "track": "C",
    "title": "What Do I Say Now?",
    "description": "Practice answering staff questions honestly after a peer receives emergency care, despite social pressure.",
    "kind": "conversation",
    "resource": {
      "label": "Get help now",
      "title": "Alert trained facility staff",
      "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
    },
    "steps": [
      {
        "name": "Report",
        "title": "Staff ask what you know.",
        "scene": "After your roommate is revived and taken for medical evaluation, a staff member asks what you know, including whether you saw anything or noticed changes earlier in the day.",
        "question": "How should you respond?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for What Do I Say Now?: After your roommate is revived and taken for medical evaluation, a staff member asks what you know, including whether you saw anything or noticed changes earlier in the day.",
        "answers": [
          {
            "text": "Answer honestly about what you actually observed, even if you are unsure how it will be used.",
            "correct": true,
            "feedback": "Accurate information helps staff and medical providers understand what happened and provide appropriate follow-up care."
          },
          {
            "text": "Say you did not notice anything to avoid your roommate facing consequences.",
            "correct": false,
            "feedback": "This choice may delay the response. Accurate information helps staff and medical providers understand what happened and provide appropriate follow-up care."
          },
          {
            "text": "Only share information if your roommate says it is okay first.",
            "correct": false,
            "feedback": "This choice may delay the response. Accurate information helps staff and medical providers understand what happened and provide appropriate follow-up care."
          }
        ]
      },
      {
        "name": "Handle pressure",
        "title": "Another youth calls you a “snitch.”",
        "scene": "Another youth says you should not have told staff what you observed.",
        "question": "What is the most helpful perspective?",
        "resource": {
          "label": "Get help now",
          "title": "Alert trained facility staff",
          "body": "Use the facility’s established call or alert method. Clearly describe what you see, stay available for questions, and follow staff instructions."
        },
        "imageAlt": "Illustration for What Do I Say Now?: Another youth says you should not have told staff what you observed.",
        "answers": [
          {
            "text": "Apologize and avoid talking to staff in the future.",
            "correct": false,
            "feedback": "This choice may delay the response. It is understandable to feel social pressure. Telling the truth about what you observed is a way to help keep a peer safe; it does not guarantee there will never be consequences."
          },
          {
            "text": "Argue with the other youth about it.",
            "correct": false,
            "feedback": "This choice may delay the response. It is understandable to feel social pressure. Telling the truth about what you observed is a way to help keep a peer safe; it does not guarantee there will never be consequences."
          },
          {
            "text": "Recognize that telling the truth to help keep someone safe is different from betraying them, even if the social pressure is real.",
            "correct": true,
            "feedback": "It is understandable to feel social pressure. Telling the truth about what you observed is a way to help keep a peer safe; it does not guarantee there will never be consequences."
          }
        ]
      }
    ]
  }
};

window.__ALAMEDA_TRACKS = [
  {
    "id": "A",
    "title": "Students & Youth",
    "short": "Students / Youth",
    "description": "Recognize overdose, respond with peers, and build preparedness and support skills in school and youth settings.",
    "scenarios": [
      "A0",
      "A1",
      "A2",
      "A3",
      "A4",
      "A5"
    ]
  },
  {
    "id": "B",
    "title": "Community Health Workers, Family & Neighborhood",
    "short": "Community Health / Family",
    "description": "Practice decisions during home visits, community events, outreach, and neighborhood response.",
    "scenarios": [
      "B1",
      "B2",
      "B3",
      "B4"
    ]
  },
  {
    "id": "C",
    "title": "Youth in Juvenile Facilities",
    "short": "Youth in Juvenile Facilities",
    "description": "Practice promptly reporting concerns, speaking up when dismissed, and supporting a peer in a facility.",
    "scenarios": [
      "C1",
      "C2",
      "C3",
      "C4"
    ]
  }
];
