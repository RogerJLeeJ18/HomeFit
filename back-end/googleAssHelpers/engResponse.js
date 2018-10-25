const errorResponses = [`
  <speak> 
    <p> 
      <s> 
        <prosody rate="slow" volume="-2db"> 
          I'm sorry, 
        </prosody> 
        <break time="5ms"/> 
        I may have miss heard you. 
      </s> 
      <s> 
        <prosody pitch="+5%" >
          Could you 
        </prosody> 
        <prosody pitch="+25%" > 
          try again? 
        </prosody>
      </s> 
    </p> 
  </speak>`,

  `<speak> 
    <prosody rate="fast" volume="-1db" > 
      <p> 
        I am terribly sorry 
      </p> 
      <break time="5ms" /> 
      <p> 
        I am having trouble understanding you 
      </p> 
      <p> 
        <prosody pitch="+5%">
          If it isn't 
        </prosody>
        <prosody pitch="+15%"> 
          too much to ask 
        </prosody> 
        <break time="5ms" /> 
        <prosody  pitch="+30%">
          could you try again? 
        </prosody> 
      </p> 
    </prosody> 
  </speak>`,

  `<speak>
    <s>
      This is embarrassing for me 
    </s> 
    <p>
      I sometimes have trouble with my hearing
    </p> 
    <p>
      even at such a young age 
    </p>
    <s>
      Would you kindly try the command again? 
    </s> 
  </speak>`
];


const linkAccountObjResponses = [
  {
    before: `
    <speak> 
      <prosody pitch="+10%" rate="fast">
        <s> 
          Thank you 
        </s> 
        <s> `,
    after: `
        </s> 
        <prosody pitch="+5%">
          <s>
            for linking your account to your current session. 
          </s> 
          <s> 
            Lets get started 
          </s> 
        </prosody>
      </prosody>
    </speak>`
  },

  {
    before: `
    <speak>
      <prosody rate="fast"> 
        <s> 
          <prosody pitch="+10%"> 
            We apologize for the inconvenience 
          </prosody> 
        </s> 
        <p> 
          <s>`,
    after: `
          </s> 
        </p> 
        <s> 
          We have now linked your account to your current session with us. 
        </s> 
        <s> 
          Lets get you moving 
        </s> 
      </prosody> 
    </speak>`
  },

  {
    before: `
    <speak> 
      <s> 
        <prosody pitch="-5%" rate="slow">
          Well 
        </prosody> 
      </s> 
      <p> 
        <s>`,
    after: `
        </s> 
      </p> 
      <break time="5ms" /> 
      <prosody rate="fast">
        <s> 
          Looks like we are all set 
        </s> 
        <s> 
          lets get started with those exercises 
        </s> 
      </prosody> 
    </speak>`
  },

  {
    before: `
    <speak> 
      <prosody rate="fast"> 
        <s> 
          <prosody pitch="+20%">
            Glad to have you back `,
    after: ` 
          </prosody> 
        </s> 
        <s>
          Now that we got all the technical stuff out of the way 
        </s> 
        <s> 
          Lets get ready to start that workout 
        </s> 
      </prosody> 
    </speak>`
  }
];

const startWorkoutObjResponses = [
  {
    before: '<speak> <prosody volume="+3db" pitch="+20%"> <s> Let me know when you are ready to begin your ',
    after: ' and are in position. </s> </prosody> </speak>'
  },

  {
    before: '<speak> <prosody volume="loud" pitch="+20%"> <s> Lets do some',
    after: '</s> <s> Let me know when you are ready</s> </prosody> </speak>'
  },

  {
    before: '<speak> <prosody rate="fast" volume="loud" pitch="+20%"> <s> <emphasis level="reduced"> cowabunga  </emphasis></s><s>lets do some',
    after: '</s> <break time="500ms" /> Come on <break time="5ms" /> Are you ready? </prosody> </speak>'
  },

  {
    before: '<speak> <prosody rate="fast" volume="loud" pitch="+20%"> <s> Alright it is ',
    after: ' time </s> <s> Let\'s get going! </s> <s> You ready? </s> </prosody>  </speak>'
  }
];

const nextExerObjResponses = [
  {
    part1: {
      before: '<speak> <prosody pitch="+15%"> <s> The recommended pace for ',
      prep: 'is',
      after: ' seconds. </s> <s> Let\'s begin </s> <break time="500ms" />'
    },
    part2: {
      before: ' <s> Let\'s take a break.</s> <s> Let me know when you are ready to do another set </s> <s> Or if you want to start ',
      after: ', we can do that as well</s> </prosody> </speak>'
    }
  },

  {
    part1:{
      before: `
        <speak>
          <prosody range="high" pitch="+14%">
            <s>
              So each rep for `,
      prep: ` should take `,
      after: `seconds to complete
            </s>
            <s>
              Let's get this show on the road
            </s>
            <break time="500ms" />`
    },
    part2: {
      before: `
            <p>
              <s>
                <prosody pitch="+5%" rate="slow">
                  <emphasis>
                    woo
                  </emphasis>
                </prosody>
                let's take a break before the next set
              </s>
            </p>
            <p>
              <s>
                or if you feel ready to begin

      `,
      after: `
              </s>
              <s>
                just tell me to start the next exercise
              </s>
            </p>
            <p>
              <prosody pitch="+16%">
                so what will it be
              </prosody>
            </p>
          </prosody>
        </speak>`
    }
  }
];

const greetings = [
  `<speak>
    <prosody rate="fast">
    <p>
      <s>
        <prosody volume="+3db" pitch="+25%" >
          Welcome to Home Fit trainer
        </prosody>
      </s>
      <s>
        <prosody volume="+3db" pitch="+30%" >
          The <break time="10ms" /> fitness trainer <break time="5ms" /> 
        </prosody> 
        <prosody rate="slow" volume="+1db" pitch="+15%" > 
          designed for your personal needs.
        </prosody>
      </s> 
    </p>
    </prosody>
    <break time="5ms" />
    <p>
      <prosody pitch="+10%" volume="+2db" >
        <s>
          Before we begin
        </s>
        <s>
          I will need you to connect our session to your home fit account
        </s>
      </prosody>
      <prosody pitch="+15%" volume="+1db">
        <s>
          To do that all you have to do is say link my account and say your home fit account name
        </s>
      </prosody>
      <prosody pitch="+10%" >
        <s>
          after you link up we can begin today's workout
        </s>
      </prosody>
    </p>
  </speak>`,

  `<speak> 
    <prosody rate="fast">
      <p>
        <prosody volume="+3db" pitch="+15%" >
          Hi
        </prosody>
      </p>
      <p>
        <prosody volume="+2db" pitch="+10%">
          I am excited for our workout today
        </prosody>
      </p> 
      <p>
        <prosody rate="slow" volume="-1db" pitch="-5%">
          But
        </prosody>
        <prosody volume="+1db" pitch="+5%">
        <s>
          Don't forget you will need to connect our current session with your home fit username
        </s>
        <s>
          all you have to do is say link my account and say your home fit account name 
        </s>
        </prosody>
      </p>
    </prosody>
  </speak>`,

  `<speak>
    <prosody rate="fast" pitch="+5%" volume="+1db">
      <p>
        Welcome to Home Fit trainer.
      </p>
    </prosody>
    <prosody pitch="+15%" volume="+3db">
      <s> 
        The only trainer you will ever need.
      </s>
    </prosody>
    <prosody rate="fast" pitch="+10%" volume="+2db">
      <p>
        Link your session and we can begin
      </p>
    </prosody>
  </speak>`,

  `<speak> 
    <voice gender="female" languages="es-ES" age="21" required="age languages gender variant">
      <p> 
        <s>
          <prosody rate="" volume="+3db" pitch="+25%" >
            Welcome to Home Fit trainer
          </prosody>
        </s>
        <s> 
          To begin, you must link your account to our current session. 
        </s>
        <s> 
          To achieve this, simply say link my account and your username.
        </s>
      </p>
    </voice>
  </speak>`
];

module.exports = {
  greetings,
  nextExerObjResponses,
  startWorkoutObjResponses,
  linkAccountObjResponses,
  errorResponses
}