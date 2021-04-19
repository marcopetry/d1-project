// muito errado isso, mas não tem um parâmetro vindo do backend pra fazer essa referẽncia das cores e dos icones pro componente
// Aqui tá pegando pelos index dos dados que retornam, correto é retornar uma chave ex: TODOS
const defItem = [
  {
    color: 'error',
    icon: 'table',
  },
  {
    color: 'warning',
    icon: 'paper-plane',
  },
  {
    color: 'success',
    icon: 'play-circle',
  },
  {
    color: 'info',
    icon: 'pen',
  },
  {
    color: 'orange',
    icon: 'bed',
  },
  {
    color: 'darkGrey',
    icon: 'check',
  },
]

export const returnIconAndColorFilter = (id) => ({ color: defItem[id].color, icon: defItem[id].icon })
