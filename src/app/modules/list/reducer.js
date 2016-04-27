import {loop, Effects} from 'redux-loop';

const initialState = {
  data: [
    {
      id: 1111111,
      title: "你咋不上天呢",
      description: "人生大幸莫过于身边有一帮逗逼跟你一起疯",
      content: "昨晚跟朋友上山打球, 一时兴起搞到十点多，于是决定一起去吃夜宵。然后各自拿出手机通知家里不回去吃饭了。其中唯一的一条单身狗看不下去了，也拿出手机打了个电话，“喂，我不回去吃饭了”。我问他打给谁啊，他一脸认真的说，10086啊！干！逗逼过我啊~",
      createAt: "2016-04-26 23:32:14",
      tags: ["哈哈~"],
    },
    {
      id: 22222222,
      title: "转一篇好文 【9 things every React.js beginner should know】",
      description: "I've been using React.js for about 6 months now. In the grand scheme of things that's not very long at all, but in the ever-churning world of JavaScript frameworks, that just about qualifies you as a bearded elder! I've helped out a few people lately with React starter tips, so I thought it would be a good idea to write some of them up here to share more broadly. These are all either things that I wish I'd known when I started out, or things that really helped me 'get' React.",
      content: "Searching through components to determine behaviour is not really something we should be doing anyway. Remember, React is a view library, so while render logic in the components is OK, business logic is a massive code smell. But when so much of your application's state is right there in the component, easily accessible by this.state, it can become really tempting to start putting things like calculations or validation into the component, where it does not belong. Revisiting my earlier point, this makes testing that much harder - you can't test render logic without the business logic getting in the way, and vice versa!",
      createAt: "2016-04-27 23:32:14",
      tags: ["技术", "react"],
    },
    {
      id: 33333333,
      title: "你咋不上天呢",
      description: "人生大幸莫过于身边有一帮逗逼跟你一起疯",
      content: "昨晚跟朋友上山打球, 一时兴起搞到十点多，于是决定一起去吃夜宵。然后各自拿出手机通知家里不回去吃饭了。其中唯一的一条单身狗看不下去了，也拿出手机打了个电话，“喂，我不回去吃饭了”。我问他打给谁啊，他一脸认真的说，10086啊！干！逗逼过我啊~",
      createAt: "2016-04-27 23:32:14",
      tags: "哈哈~",
    },
    {
      id: 44444444,
      title: "你咋不上天呢",
      description: "人生大幸莫过于身边有一帮逗逼跟你一起疯",
      content: "昨晚跟朋友上山打球, 一时兴起搞到十点多，于是决定一起去吃夜宵。然后各自拿出手机通知家里不回去吃饭了。其中唯一的一条单身狗看不下去了，也拿出手机打了个电话，“喂，我不回去吃饭了”。我问他打给谁啊，他一脸认真的说，10086啊！干！逗逼过我啊~",
      createAt: "2016-04-27 23:32:14",
      tags: "哈哈~",
    }
  ]
}

export default (state = initialState, action) => {
  return loop(state, Effects.none());
}