export default function sortHeroesByHealth(heroes) {
   const copy = [...heroes]
   
   copy.sort((a, b) => {
    return b.health - a.health
   })

   return copy
}