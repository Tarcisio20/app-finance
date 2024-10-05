export const TranslateInReal = (value : number) => value.toLocaleString('pt-BR', { 
  style: 'currency', 
  currency: 'BRL' 
})