import members from '../data/nest-circles.json'

const _members = []

members.forEach((m) => {
  const i = Math.ceil(Math.random() * 20)
  _members.push({
    ...m,
    avatar: `/avatars/${i}.png`,
  })
})

export default _members
