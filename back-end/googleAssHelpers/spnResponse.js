const spanishErrorResponse = [`<speak> <p> <s> Lo siento mucho, no le puedo entender. </s> <s> <prosody pitch="+10%"> ¿Podría preguntarme otra vez? </prosody> </s> </p> </speak>`,
`<speak> <p> <s> Perdóname, no le entiendo. </s> <s> <prosody pitch="+10%"> ¿Puede repetirlo, por favor?</prosody> </s> </p> </speak>`,
`<speak> <p> <s> Me avergüenza decir, </s>  <s> pero le he entendí mal. </s> <s> Repitalo, por favor. </s> </p> </speak>`,
`<speak> <p> <s> Perdón, </s> <s> dígame otra vez. </s> </p> </speak>`];

const linkAccountObjResponsesMasculine = [
  {
    before: '<speak> <s> Gracias </s> <s>',
    after: '</s>, <s> por conectar a su cuenta a la sesión actual. </s> <s> Empezamos. </s> </speak>'
  },
  {
    before: '<speak> <s> Disculpa, por la molestia, </s> <p> <s>',
    after: '</s> </p> <break time="750ms" /> <s> Hemos conectado a tu cuenta a la sesión actual con nosotros. </s> <s> Empezaremos con la sesión de ejecisio de hoy. </s> </speak>'
  },
  {
    before: '<speak> <s> Bueno, </s> <p> <s>',
    after: '</s> </p> <s> Todo bien, </s> <s> Empezamos con los ejercisios. </s> </speak>'
  },
  {
    before: '<speak> <s> Me alegra de oírle ',
    after: '</s> <s> si esté listo, podemos empezar con los ejercisios de hoy. </s> </speak>'
  }
];

const linkAccountObjResponsesFeminine = [
  {
    before: '<speak> <s> Gracias </s> <s>',
    after: '</s>, <s> por conectar a su cuenta a la sesión actual. </s> <s> Empezamos. </s> </speak>'
  },
  {
    before: '<speak> <s> Disculpa, por la molestia, </s> <p> <s>',
    after: '</s> </p> <break time="750ms" /> <s> Hemos conectado a su cuenta a la sesión actual con nosotros. </s> <s> Empezaremos con la sesión de ejecisio de hoy. </s> </speak>'
  },
  {
    before: '<speak> <s> Bueno, </s> <p> <s>',
    after: '</s> </p> <s> Todo bien, </s> <s> Empezamos con los ejercisios. </s> </speak>'
  },
  {
    before: '<speak> <s> Me alegra de oírle ',
    after: '</s> <s> si esté lista, podemos empezar con los ejercisios de hoy. </s> </speak>'
  }
];

const startWorkoutObjResponsesMasculine = [
  {
    before: '<speak> <s> Avísame cuando esté listo de empezar su ',
    after: ' e en posición. </s> </speak>'
  },
  {
    before: '<speak> <s> Hacemos ',
    after: '</s> <s> Dígame cuando esté listo. </s></speak>'
  },
  {
    before: '<speak> <s> <prosody pitch="+20%" ><empasis level="reduced"> Vale </emphasis></prosody> </s><s> Seguimos con ',
    after: '</s> </speak>'
  },
  {
    before: '<speak> <s> Es la hora de seguir, </s> <s> Comenzamos el siguiente ejercisio',
    after: '</s> </speak>'
  }
];

const startWorkoutObjResponsesFeminine = [
  {
    before: '<speak> <s> Avísame cuando esté lista de empezar su ',
    after: ' e en posición. </s> </speak>'
  },
  {
    before: '<speak> <s> Hacemos ',
    after: '</s> <s> Dígame cuando esté lista. </s></speak>'
  },
  {
    before: '<speak> <s> <prosody pitch="+20%" ><emphasis level="reduced"> Vale </emphasis></prosody> </s><s> Seguimos con ',
    after: '</s> </speak>'
  },
  {
    before: '<speak> <s> Es la hora de seguir, </s> <s> Comenzamos el siguiente ejercisio',
    after: '</s> </speak>'
  }
];

const nextExerObjResponsesMasculine = [
  {
    part1: {
      before: '<speak> <s> El rato recomendado por ',
      prep: 'es',
      after: ' segundos. </s> <s> Empezamos </s> <break time="500ms" />'
    },
    part2: {
      before: ' <s> Descansamos.</s> <s> Avísame cuando esté listo de hacer la siguiente colección </s> <s> o podemos empezar ahora ',
      after: ', si le gustaría </s> </speak>'
    }
  }
];

const nextExerObjResponsesFeminine = [
  {
    part1: {
      before: '<speak> <s> El rato recomendado por ',
      prep: 'es',
      after: ' segundos. </s> <s> Empezamos </s> <break time="500ms" />'
    },
    part2: {
      before: ' <s> Descansamos.</s> <s> Avísame cuando esté listo de hacer la siguiente colección </s> <s> o podemos empezar ahora ',
      after: ', si le gustaría </s> </speak>'
    }
  }
]

const greetings = [
  `<speak>
    <p>
      <s>
        Welcome to Home fit trainer
      </s>
      <s> 
        The fitness trainer designed for your personal needs.
      </s> 
    </p>
    <p>
      <s>
        Before we begin
      </s>
      <s>
        I will need you to connect our session to your home fit account
      </s>
      <s>
        To do that all you have to do is say link my account and say your account name
      </s>
      <s>
        after you link up we can begin today's workout
      </s>
    </p>
  </speak>`,
  `<speak> 
    <p>
      <prosody rate"fast" volume="+3db" pitch="+25st" >
        Hi
      </prosody>
    </p>
    <p>
      <prosody rate="fast" pitch="+15st">
        I am excited for our workout today
      </prosody>
    </p> 
    <p>
      <prosody rate="slow" pitch="-10st">
        <s>
          But
        </s>
      </prosody>
      <s>
        Don't forget you will need to connect our current session with your home fit username
      </s>
      <s>
        all you have to do is say link my account and say your account name 
      </s>
    </p>
  </speak>`,
  `<speak>
    <p>
      How should i greet our users roger?
    </p>
  </speak>`,
  `<speak>
    <p>
      How should i greet our users josh?
    </p>
  </speak>`,
  `<speak>
    <p>
      How should i greet our users cornelius?
    </p>
  </speak>`
];

module.exports = {
  spanishErrorResponse,
  linkAccountObjResponsesMasculine,
  linkAccountObjResponsesFeminine,
  startWorkoutObjResponsesMasculine,
  startWorkoutObjResponsesFeminine,
  nextExerObjResponsesMasculine,
  nextExerObjResponsesFeminine
}