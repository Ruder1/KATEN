// export class BerriesModel {
//     firmness: {
//       name: string
//       url: string
//     }
//     flavors: Array<{
//       flavor: {
//         name: string
//         url: string
//       }
//       potency: number
//     }>
//     growth_time: number
//     id: number
//     item: {
//       name: string
//       url: string
//     }
//     max_harvest: number
//     name: string
//     natural_gift_power: number
//     natural_gift_type: {
//       name: string
//       url: string
//     }
//     size: number
//     smoothness: number
//     soil_dryness: number
//   }

export class BerryCheck{
  count: number
  next: string
  previous: any
  results: Array<{
    name: string
    url: string
  }>
}


