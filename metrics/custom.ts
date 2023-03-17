import { Counter } from '@ioc:Adonis/Prometheus'

export const HitMetric = new Counter({
  name: 'hit',
  help: 'request hit',
})
