// muito errado isso, mas não tem um parâmetro coeso vindo do backend pra fazer essa referẽncia das cores e dos icones pro componente
// Aqui tá pegando pelos index dos dados que retornam, correto é retornar uma chave ex: TODOS
const defItem = [
  {
    color: '#D190DD',
    icon: 'table',
  },
  {
    color: '#C1CA4F',
    icon: 'paper-plane',
  },
  {
    color: '#35C667',
    icon: 'play-circle',
  },
  {
    color: '#3FA8F4',
    icon: 'pen',
  },
  {
    color: '#EBBD3E',
    icon: 'bed',
  },
  {
    color: '#9FABD5',
    icon: 'check',
  },
]

export const returnIconAndColorFilter = (id) => ({ color: defItem[id].color, icon: defItem[id].icon })
