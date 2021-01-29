export const email = 'hackforfuture@gmail.com'
export const siteName = 'Hack for Future'
export const description =
    'A creative community of entrepreneurs, designers and developers working on open source solutions for a sustainable future'

const subject = `I want to join! 🌱`
const body = `Hi! My name is 

I'd like to join because... 
I want to learn... 
I want to contribute with... 
I learned about ${siteName} through... 

See you soon!`

export const communityInvite = `mailto:${email}?subject=${encodeURIComponent(
    subject,
)}&body=${encodeURIComponent(body)}`
