/* ============================================================
 * curriculum.js  ·  做中学课标数据层（生成产物，勿手改）
 * 生成命令: node scripts/build-curriculum.js
 * 来源: teachany-courseware/data/trees/cn/{elementary,middle}
 * 覆盖: 1-9 年级 · 1001 个课标节点
 * ============================================================ */
window.CURRICULUM = {
  "meta": {
    "source": "teachany-courseware/data/trees/cn/{elementary,middle}",
    "generated": "2026-08-25",
    "totalNodes": 1001,
    "stages": {
      "elementary": {
        "subjects": 7,
        "nodes": 289
      },
      "middle": {
        "subjects": 11,
        "nodes": 367
      },
      "high": {
        "subjects": 11,
        "nodes": 345
      }
    }
  },
  "grades": {
    "1": [
      {
        "subject": "chinese",
        "name": "小学语文",
        "nodes": [
          {
            "id": "chn-e-initials",
            "name": "声母",
            "points": [
              "学会汉语拼音。能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。",
              "能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。"
            ],
            "domain": "拼音",
            "prerequisites": [
              "chn-e-simple-vowels"
            ],
            "extends": [
              "chn-e-syllable-spelling"
            ],
            "courses": [
              "chn-e-initials"
            ]
          },
          {
            "id": "chn-e-simple-vowels",
            "name": "单韵母",
            "points": [
              "学会汉语拼音。能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。",
              "能借助汉语拼音认读汉字，学会用音序检字法和部首检字法查字典。"
            ],
            "domain": "拼音",
            "semester": "上",
            "extends": [
              "chn-e-compound-vowel"
            ],
            "courses": [
              "chn-e-simple-vowels"
            ]
          },
          {
            "id": "chn-e-nasal-vowels",
            "name": "鼻韵母",
            "points": [
              "学会汉语拼音。能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。",
              "能借助汉语拼音认读汉字，学会用音序检字法和部首检字法查字典。"
            ],
            "domain": "拼音",
            "prerequisites": [
              "chn-e-nasal-vowel-back"
            ],
            "extends": [
              "chn-e-syllable-spelling"
            ],
            "courses": [
              "chn-e-nasal-vowels"
            ]
          },
          {
            "id": "chn-e-syllable-spelling",
            "name": "音节拼读与拼写",
            "points": [
              "学会汉语拼音。能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。",
              "能准确地拼读音节，正确书写声母、韵母和音节。认识大写字母，熟记《汉语拼音字母表》。"
            ],
            "domain": "拼音",
            "prerequisites": [
              "chn-e-initials",
              "chn-e-compound-vowel"
            ],
            "extends": [
              "chn-e-tone-marks"
            ],
            "courses": [
              "chn-e-syllable-spelling"
            ]
          },
          {
            "id": "chn-e-tone-marks",
            "name": "声调与标调规则",
            "points": [
              "学会汉语拼音。能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。",
              "能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。"
            ],
            "domain": "拼音",
            "prerequisites": [
              "chn-e-syllable-spelling"
            ],
            "extends": [
              "chn-e-pinyin-reading"
            ],
            "courses": [
              "chn-e-tone-marks"
            ]
          },
          {
            "id": "chn-e-pinyin-reading",
            "name": "拼音阅读（借助拼音识字）",
            "points": [
              "能借助汉语拼音认读汉字，学会用音序检字法和部首检字法查字典。",
              "学会汉语拼音。能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。"
            ],
            "domain": "拼音",
            "prerequisites": [
              "chn-e-tone-marks"
            ],
            "extends": [
              "chn-e-char-recognition-1"
            ],
            "courses": [
              "chn-e-pinyin-reading"
            ]
          },
          {
            "id": "chn-e-compound-vowel",
            "name": "复韵母",
            "points": [
              "学会汉语拼音。能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。",
              "能借助汉语拼音认读汉字，学会用音序检字法和部首检字法查字典。"
            ],
            "domain": "拼音",
            "semester": "上",
            "prerequisites": [
              "chn-e-simple-vowels"
            ],
            "courses": [
              "chn-compound-vowel"
            ]
          },
          {
            "id": "chn-e-nasal-vowel-front",
            "name": "前鼻韵母",
            "points": [
              "学会汉语拼音。能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。",
              "能借助汉语拼音认读汉字，学会用音序检字法和部首检字法查字典。"
            ],
            "domain": "拼音",
            "semester": "上",
            "prerequisites": [
              "chn-e-compound-vowel"
            ],
            "courses": [
              "chn-e-nasal-vowel-front"
            ]
          },
          {
            "id": "chn-e-nasal-vowel-back",
            "name": "后鼻韵母",
            "points": [
              "学会汉语拼音。能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。",
              "能读准声母、韵母、声调和整体认读音节。能准确地拼读音节，正确书写声母、韵母和音节。"
            ],
            "domain": "拼音",
            "semester": "上",
            "prerequisites": [
              "chn-e-nasal-vowel-front"
            ],
            "courses": [
              "chn-e-nasal-vowel-back"
            ]
          },
          {
            "id": "chn-e-char-recognition-1",
            "name": "一年级常用字认读（300字）",
            "points": [
              "认识常用汉字1600个左右，其中800个左右会写。",
              "喜欢学习汉字，有主动识字、写字的愿望。",
              "能借助汉语拼音认读汉字，学会用音序检字法和部首检字法查字典。"
            ],
            "domain": "识字与写字",
            "prerequisites": [
              "chn-e-pinyin-reading"
            ],
            "extends": [
              "chn-e-char-writing-1",
              "chn-e-char-recognition-2"
            ],
            "courses": [
              "chn-e-char-recognition-1"
            ]
          },
          {
            "id": "chn-e-char-writing-1",
            "name": "基本笔画与笔顺",
            "points": [
              "掌握汉字的基本笔画和常用的偏旁部首，能按基本的笔顺规则用硬笔写字，注意间架结构，初步感受汉字的形体美。",
              "努力养成良好的写字习惯，写字姿势正确，书写规范、端正、整洁。"
            ],
            "domain": "识字与写字",
            "prerequisites": [
              "chn-e-stroke-order"
            ],
            "extends": [
              "chn-e-char-structure"
            ],
            "courses": [
              "chn-e-char-writing-1"
            ]
          },
          {
            "id": "chn-e-stroke-order",
            "name": "笔画与笔顺",
            "points": [
              "掌握汉字的基本笔画和常用的偏旁部首，能按基本的笔顺规则用硬笔写字，注意间架结构，初步感受汉字的形体美。",
              "努力养成良好的写字习惯，写字姿势正确，书写规范、端正、整洁。"
            ],
            "domain": "识字与写字",
            "semester": "上",
            "courses": [
              "chn-e-stroke-order"
            ]
          },
          {
            "id": "chn-e-radical-recognition",
            "name": "偏旁部首",
            "points": [
              "掌握汉字的基本笔画和常用的偏旁部首，能按基本的笔顺规则用硬笔写字，注意间架结构，初步感受汉字的形体美。",
              "观察字形，体会汉字部件之间的关系。梳理学过的字，感知汉字与生活的联系。"
            ],
            "domain": "识字与写字",
            "semester": "下",
            "prerequisites": [
              "chn-e-char-structure"
            ],
            "courses": [
              "chn-e-radical-recognition"
            ]
          },
          {
            "id": "chn-e-punctuation-basic",
            "name": "基本标点符号（句号/问号/感叹号）",
            "points": [
              "认识课文中出现的常用标点符号，在阅读中体会句号、问号、感叹号所表达的不同语气。",
              "根据表达的需要，学习使用逗号、句号、问号、感叹号。"
            ],
            "domain": "句子与标点",
            "prerequisites": [
              "chn-e-char-recognition-1"
            ],
            "extends": [
              "chn-e-sentence-types"
            ],
            "courses": [
              "chn-e-punctuation-basic"
            ]
          },
          {
            "id": "chn-e-picture-writing",
            "name": "看图写话",
            "points": [
              "对写话有兴趣，留心周围事物，写自己想说的话，写想象中的事物。在写话中乐于运用阅读和生活中学到的词语。",
              "观察大自然，热心参加校园、社区活动，积累活动体验。结合语文学习，用口头或图文等方式整理、表达自己在活动中的见闻和想法。"
            ],
            "domain": "写作表达",
            "prerequisites": [
              "chn-e-sentence-types"
            ],
            "extends": [
              "chn-e-diary-writing"
            ],
            "courses": [
              "chn-e-picture-writing"
            ]
          },
          {
            "id": "chn-e-sentence-writing",
            "name": "写话与造句",
            "points": [
              "对写话有兴趣，留心周围事物，写自己想说的话，写想象中的事物。在写话中乐于运用阅读和生活中学到的词语。",
              "根据表达的需要，学习使用逗号、句号、问号、感叹号。"
            ],
            "domain": "写作表达",
            "semester": "下",
            "prerequisites": [
              "chn-e-sentence-types"
            ],
            "courses": [
              "chn-e-sentence-writing"
            ]
          },
          {
            "id": "chn-e-listen-speak-basic",
            "name": "听故事与复述",
            "points": [
              "听故事、看影视作品，能复述大意和自己感兴趣的情节。",
              "能认真听他人讲话，努力了解讲话的主要内容。"
            ],
            "domain": "口语交际",
            "extends": [
              "chn-e-conversation-etiquette"
            ],
            "courses": [
              "chn-e-listen-speak-basic"
            ]
          },
          {
            "id": "chn-e-nursery-rhyme",
            "name": "儿歌、童谣与浅易古诗",
            "points": [
              "诵读儿歌、儿童诗和浅近的古诗，展开想象，获得初步的情感体验，感受语言的优美。",
              "背诵优秀诗文50篇（段）。"
            ],
            "domain": "古诗文",
            "prerequisites": [
              "chn-e-pinyin-reading"
            ],
            "extends": [
              "chn-e-tang-poetry"
            ],
            "courses": [
              "chn-e-nursery-rhyme"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "小学数学",
        "nodes": [
          {
            "id": "math-e-numbers-within-10",
            "name": "10以内数的认识",
            "points": [
              "10以内数的教学重点是使学生体验1-9从数量到数的抽象过程，通过9再加1就是十，体会十的表达与1-9的不同。",
              "数的认识教学应提供学生熟悉的情境，使学生感受具体情境中的数量，可以用对应的方法，借助小方块、圆片和小棒等表示相等的数量，然后过渡到用数字表达。",
              "能用数表示物体的个数或事物的顺序，能认、读、写万以内的数；能用符号表示数的大小关系，形成初步的数感和符号意识。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "courses": [
              "math-elem-number-recognition"
            ]
          },
          {
            "id": "math-e-numbers-within-20",
            "name": "20以内数的认识",
            "points": [
              "在一年级第一学期的入学适应期，利用生活经验和幼儿园相关活动经验，通过具体形象、生动活泼的活动方式学习简单的数学内容。这期间的主要目标包括: 认识 20 以内的数",
              "能用数表示物体的个数或事物的顺序，能认、读、写万以内的数；能说出不同数位上的数表示的数值；能用符号表示数的大小关系，形成初步的数感和符号意识。",
              "数的认识教学应提供学生熟悉的情境，使学生感受具体情境中的数量，可以用对应的方法，借助小方块、圆片和小棒等表示相等的数量，然后过渡到用数字表达。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-numbers-within-10"
            ],
            "courses": [
              "math-elem-numbers-within-20"
            ]
          },
          {
            "id": "math-e-numbers-within-100",
            "name": "100以内数的认识",
            "points": [
              "经历简单的数的抽象过程，认识万以内的数，能进行简单的整数四则运算，形成初步的数感、符号意识和运算能力。",
              "数的认识教学应提供学生熟悉的情境，使学生感受具体情境中的数量，可以用对应的方法，借助小方块、圆片和小棒等表示相等的数量，然后过渡到用数字表达。",
              "通过数量多少的比较，理解数的大小关系。在这样的教学活动中，帮助学生形成初步的符号意识和数感。"
            ],
            "domain": "数与代数",
            "semester": "下",
            "prerequisites": [
              "math-e-numbers-within-20"
            ],
            "courses": [
              "math-elem-numbers-within-100"
            ]
          },
          {
            "id": "math-e-addition-subtraction-within-20",
            "name": "20以内加减法",
            "points": [
              "在一年级第一学期的入学适应期，通过具体形象、生动活泼的活动方式学习简单的数学内容。这期间的主要目标包括：会20以内数的加减法（不含退位减法）。",
              "能熟练口算20以内数的加减法和表内乘除法，能口算简单的百以内数的加减法。",
              "数的运算教学应让学生感知数的加减运算要在相同数位上进行，体会简单的推理过程。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "prerequisites": [
              "math-e-numbers-within-20"
            ],
            "courses": [
              "math-elem-add-sub-within-20"
            ]
          },
          {
            "id": "math-e-plane-shapes",
            "name": "平面图形的认识",
            "points": [
              "能辨认长方形、正方形、平行四边形、三角形、圆等平面图形，能直观描述这些平面图形的特征。",
              "通过实物和模型辨认简单的立体图形和平面图形，能对图形分类，会用简单图形拼图。",
              "图形的认识教学要选用学生身边熟悉的素材，鼓励学生动手操作，感知立体图形和平面图形的特点。"
            ],
            "domain": "图形与几何",
            "semester": "一下-二上",
            "courses": [
              "math-elem-plane-shapes"
            ]
          },
          {
            "id": "math-e-solid-shapes",
            "name": "立体图形的认识",
            "points": [
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，会计算常见立体图形的体积和表面积。",
              "图形的认识与测量包括立体图形和平面图形的认识，线段长度的测量，以及图形的周长、面积和体积的计算。",
              "图形的认识主要是对图形的抽象。学生经历从实际物体抽象出几何图形的过程，认识图形的特征，感悟点、线、面、体的关系。"
            ],
            "domain": "图形与几何",
            "semester": "上",
            "prerequisites": [
              "math-e-plane-shapes"
            ],
            "courses": [
              "math-elem-solid-shapes"
            ]
          },
          {
            "id": "math-e-measurement-sense",
            "name": "量感培养（跨学段）",
            "points": [
              "体验物体长度的测量过程，认识常见的长度单位，形成初步的量感。",
              "经历平面图形的周长和面积的测量过程，探索长方形周长和面积的计算方法，形成量感。",
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，形成量感。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-length-units"
            ],
            "courses": [
              "math-e-measurement-sense"
            ]
          },
          {
            "id": "math-e-word-problems-basic",
            "name": "简单加减法应用题",
            "points": [
              "在解决生活情境问题的过程中，体会数和运算的意义，形成初步的符号意识、数感、运算能力和推理意识。",
              "能在熟悉的生活情境中运用数和数的运算，合理表达简单的数量关系，解决简单的问题。",
              "能在教师指导下，从日常生活中提出简单的数学问题，尝试运用所学的知识和方法解决问题。"
            ],
            "domain": "综合与实践",
            "prerequisites": [
              "math-e-addition-subtraction-within-20"
            ],
            "courses": [
              "math-elem-word-problems-basic"
            ]
          }
        ]
      },
      {
        "subject": "science",
        "name": "小学科学",
        "nodes": [
          {
            "id": "sci-e-object-properties",
            "name": "观察物体的外部特征",
            "points": [
              "认识常见物体的基本外部特征，认识生活中常见的材料。",
              "能利用多种感官或简单的工具，观察对象的外部形态特征及现象，并能对这些特征和现象进行简单的比较、分类等。",
              "能在教师指导下，观察具体事物的构成要素，通过口述、画图等方式描述事物的外在特征。"
            ],
            "domain": "物质科学",
            "courses": [
              "sci-e-object-properties"
            ]
          },
          {
            "id": "sci-e-living-vs-nonliving",
            "name": "生物与非生物",
            "points": [
              "认识周边常见的植物和动物，能简单描述其外部主要特征和生长过程。知道植物和动物的生存需要环境条件。",
              "知道自然物和人造物存在区别；知道常见简单科技产品的结构决定了其功能，知道简单的制作问题需要定义和界定。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-object-properties"
            ],
            "courses": [
              "sci-e-living-vs-nonliving"
            ]
          },
          {
            "id": "sci-e-plant-parts",
            "name": "植物的各部分",
            "points": [
              "认识周边常见的植物和动物，能简单描述其外部主要特征和生长过程。",
              "能区分植物和动物的主要特征，并能对植物和动物进行简单分类；认识植物的某些结构、动物的某些结构与行为具有维持自身生存的功能。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-living-vs-nonliving"
            ],
            "courses": [
              "sci-e-plant-parts"
            ]
          },
          {
            "id": "sci-e-weather-observation",
            "name": "天气的观察",
            "points": [
              "能描述太阳升落、季节变化和月亮形状变化等自然现象，说出天气变化及其对人类生活的影响。",
              "知道地球是人类和动植物的共同家园。"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-measurement"
            ],
            "courses": [
              "sci-e-weather-observation"
            ]
          },
          {
            "id": "sci-e-tools-use",
            "name": "常见工具的使用",
            "points": [
              "知道简单工具的功能和使用方法，能利用身边的材料和简单工具动手完成简单的任务，能发现作品中存在的问题并尝试提出解决方案。",
              "掌握常见工具的使用方法；能拆开简单产品并复原，制作某种产品的简化实物模型并反映其中的部分科学原理；能发现作品的不足并进行改进。"
            ],
            "domain": "技术与工程",
            "prerequisites": [
              "sci-e-object-properties"
            ],
            "courses": [
              "sci-e-tools-use"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "小学道德与法治",
        "nodes": [
          {
            "id": "pol-e-g1-u1",
            "name": "我是小学生啦",
            "points": [
              "【课标】帮助学生适应小学生活，养成良好学习习惯和生活习惯，乐于与老师、同学交往。",
              "【教材·我是小学生啦】开开心心上学去；我向国旗敬个礼；这是我们的校园；平平安安回家来"
            ],
            "domain": "道德修养",
            "semester": "上"
          },
          {
            "id": "pol-e-g1-u3",
            "name": "养成良好习惯",
            "points": [
              "【课标】养成良好的卫生、饮食习惯，有安全意识和自我保护意识，遵守交通规则。",
              "【教材·养成良好习惯】作息有规律；吃饭有讲究；对人有礼貌；玩也有学问"
            ],
            "domain": "生命安全与健康",
            "semester": "上",
            "prerequisites": [
              "pol-e-g1-u2"
            ]
          },
          {
            "id": "pol-e-g1-u4",
            "name": "我们讲文明",
            "points": [
              "【课标】知道生活中处处有规则，初步树立规则意识，了解国旗、国歌等国家象征的意义。",
              "【教材·我们讲文明】我们小点儿声；人人爱护公物；我们不乱扔；大家排好队"
            ],
            "domain": "法治启蒙",
            "semester": "上",
            "prerequisites": [
              "pol-e-g1-u3"
            ]
          },
          {
            "id": "pol-e-g1-u2",
            "name": "过好校园生活",
            "points": [
              "【课标】懂礼貌、讲诚信，知道感恩，尊重父母师长，爱护集体。",
              "【教材·过好校园生活】老师，您好！；拉拉手，交朋友；上课了，好好学；课余生活真丰富"
            ],
            "domain": "中华优秀传统文化",
            "semester": "上",
            "prerequisites": [
              "pol-e-g1-u1"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "小学信息科技",
        "nodes": [
          {
            "id": "it-e-online-experience",
            "name": "在线体验与信息获取",
            "points": [
              "感知在线社会，体验在线信息获取与表达。"
            ],
            "domain": "在线社会与信息表达"
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "小学心理健康教育",
        "nodes": [
          {
            "id": "psych-e-g1-school-adapt",
            "name": "入学适应与规则意识",
            "points": [
              "帮助学生认识班级、学校、日常学习生活环境和基本规则。",
              "帮助学生适应新环境、新集体和新的学习生活，树立纪律意识、时间意识和规则意识。",
              "使学生有安全感和归属感，初步学会自我控制。"
            ],
            "domain": "生活适应"
          },
          {
            "id": "psych-e-g1-learning-habit",
            "name": "学习习惯与友好交往",
            "points": [
              "初步感受学习知识的乐趣，重点是学习习惯的培养与训练。",
              "培养学生礼貌友好的交往品质，乐于与老师、同学交往，在谦让、友善的交往中感受友情。"
            ],
            "domain": "学习辅导",
            "prerequisites": [
              "psych-e-g1-school-adapt"
            ]
          }
        ]
      }
    ],
    "2": [
      {
        "subject": "chinese",
        "name": "小学语文",
        "nodes": [
          {
            "id": "chn-e-char-recognition-2",
            "name": "二年级常用字认读（600字）",
            "points": [
              "认识常用汉字1600个左右，其中800个左右会写。",
              "喜欢学习汉字，有主动识字、写字的愿望。",
              "学习独立识字。能借助汉语拼音认读汉字，学会用音序检字法和部首检字法查字典。"
            ],
            "domain": "识字与写字",
            "prerequisites": [
              "chn-e-char-recognition-1"
            ],
            "extends": [
              "chn-e-radical-knowledge"
            ],
            "courses": [
              "chn-e-char-recognition-2"
            ]
          },
          {
            "id": "chn-e-char-structure",
            "name": "汉字结构（独体/合体/左右/上下）",
            "points": [
              "掌握汉字的基本笔画和常用的偏旁部首，能按基本的笔顺规则用硬笔写字，注意间架结构，初步感受汉字的形体美。",
              "观察字形，体会汉字部件之间的关系。梳理学过的字，感知汉字与生活的联系。"
            ],
            "domain": "识字与写字",
            "prerequisites": [
              "chn-e-char-writing-1"
            ],
            "extends": [
              "chn-e-radical-knowledge"
            ],
            "courses": [
              "chn-e-char-structure"
            ]
          },
          {
            "id": "chn-e-radical-knowledge",
            "name": "偏旁部首与查字典",
            "points": [
              "掌握汉字的基本笔画和常用的偏旁部首，能按基本的笔顺规则用硬笔写字，注意间架结构，初步感受汉字的形体美。",
              "学习独立识字。能借助汉语拼音认读汉字，学会用音序检字法和部首检字法查字典。"
            ],
            "domain": "识字与写字",
            "prerequisites": [
              "chn-e-char-structure"
            ],
            "extends": [
              "chn-e-homophone-polysemy"
            ],
            "courses": [
              "chn-e-radical-knowledge"
            ]
          },
          {
            "id": "chn-e-vocabulary-expansion",
            "name": "词语积累与运用",
            "points": [
              "结合上下文和生活实际了解课文中词句的意思，在阅读中积累词语。",
              "对写话有兴趣，留心周围事物，写自己想说的话，写想象中的事物。在写话中乐于运用阅读和生活中学到的词语。",
              "积累自己喜欢的成语和格言警句。"
            ],
            "domain": "识字与写字",
            "semester": "下",
            "prerequisites": [
              "chn-e-char-recognition-2"
            ],
            "courses": [
              "chn-e-vocabulary-expansion"
            ]
          },
          {
            "id": "chn-e-dictionary-skills",
            "name": "查字典",
            "points": [
              "学习独立识字。能借助汉语拼音认读汉字，学会用音序检字法和部首检字法查字典。",
              "学会使用常用的语文工具书，运用多种媒介学习语文，初步掌握基本的语文学习方法，养成良好的学习习惯。"
            ],
            "domain": "识字与写字",
            "semester": "上",
            "prerequisites": [
              "chn-e-radical-knowledge"
            ],
            "courses": [
              "chn-e-dictionary-skills"
            ]
          },
          {
            "id": "chn-e-word-formation",
            "name": "词语构成（合成词、叠词、ABB/AABB）",
            "points": [
              "结合上下文和生活实际了解课文中词句的意思，在阅读中积累词语。",
              "在写话中乐于运用阅读和生活中学到的词语。",
              "观察字形，体会汉字部件之间的关系。梳理学过的字，感知汉字与生活的联系。"
            ],
            "domain": "词语积累",
            "prerequisites": [
              "chn-e-homophone-polysemy"
            ],
            "extends": [
              "chn-e-synonym-antonym"
            ],
            "courses": [
              "chn-e-word-formation"
            ]
          },
          {
            "id": "chn-e-sentence-types",
            "name": "陈述句、疑问句、感叹句、祈使句",
            "points": [
              "认识课文中出现的常用标点符号，在阅读中体会句号、问号、感叹号所表达的不同语气。",
              "根据表达的需要，学习使用逗号、句号、问号、感叹号。"
            ],
            "domain": "句子与标点",
            "prerequisites": [
              "chn-e-punctuation-basic"
            ],
            "extends": [
              "chn-e-sentence-expansion"
            ],
            "courses": [
              "chn-e-sentence-types"
            ]
          },
          {
            "id": "chn-e-sentence-comprehension",
            "name": "句子理解",
            "points": [
              "结合上下文和生活实际了解课文中词句的意思，在阅读中积累词语。",
              "认识课文中出现的常用标点符号，在阅读中体会句号、问号、感叹号所表达的不同语气。"
            ],
            "domain": "阅读理解",
            "semester": "下",
            "prerequisites": [
              "chn-e-sentence-types"
            ],
            "courses": [
              "chn-e-sentence-comprehension"
            ]
          },
          {
            "id": "chn-e-diary-writing",
            "name": "日记与留言条",
            "points": [
              "观察周围世界，能不拘形式地写下自己的见闻、感受和想象，注意把自己觉得新奇有趣或印象最深、最受感动的内容写清楚。",
              "能用便条、简短的书信等进行交流。尝试在习作中运用自己平时积累的语言材料，特别是有新鲜感的词句。"
            ],
            "domain": "写作表达",
            "prerequisites": [
              "chn-e-picture-writing"
            ],
            "extends": [
              "chn-e-narrative-writing"
            ],
            "courses": [
              "chn-e-diary-writing"
            ]
          },
          {
            "id": "chn-e-conversation-etiquette",
            "name": "礼貌用语与日常对话",
            "points": [
              "学说普通话，逐步养成说普通话的习惯，有表达交流的自信心。",
              "能认真听他人讲话，努力了解讲话的主要内容。与他人交谈，态度自然大方，有礼貌。",
              "能主动参与日常生活中的文化活动，根据不同的场合，尝试运用合适的音量和语气与他人交流，有礼貌地请教、回应。"
            ],
            "domain": "口语交际",
            "prerequisites": [
              "chn-e-listen-speak-basic"
            ],
            "extends": [
              "chn-e-oral-presentation"
            ],
            "courses": [
              "chn-e-conversation-etiquette"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "小学数学",
        "nodes": [
          {
            "id": "math-e-numbers-within-10000",
            "name": "万以内数的认识",
            "points": [
              "在实际情境中感悟并理解万以内数的意义，理解数位的含义，知道用算盘可以表示多位数。",
              "了解符号=，<，>的含义，会比较万以内数的大小；通过数的大小比较，感悟相等和不等关系。",
              "能用数表示物体的个数或事物的顺序，能认、读、写万以内的数；能说出不同数位上的数表示的数值。"
            ],
            "domain": "数与代数",
            "semester": "下",
            "prerequisites": [
              "math-e-numbers-within-100"
            ],
            "courses": [
              "math-elem-numbers-within-10000"
            ]
          },
          {
            "id": "math-e-addition-subtraction-within-100",
            "name": "100以内加减法",
            "points": [
              "探索加法和减法的算理与算法，会整数加减法。",
              "能熟练口算20以内数的加减法和表内乘除法，能口算简单的百以内数的加减法；能计算两位数和三位数的加减法。",
              "数的运算教学应让学生感知数的加减运算要在相同数位上进行，体会简单的推理过程。"
            ],
            "domain": "数与代数",
            "semester": "下-上",
            "prerequisites": [
              "math-e-addition-subtraction-within-20",
              "math-e-numbers-within-100"
            ],
            "courses": [
              "math-elem-add-sub-within-100"
            ]
          },
          {
            "id": "math-e-multiplication-table",
            "name": "表内乘法（九九乘法表）",
            "points": [
              "探索乘法和除法的算理与算法，会简单的整数乘除法。",
              "能熟练口算20以内数的加减法和表内乘除法，能口算简单的百以内数的加减法。",
              "在具体情境中，启发学生理解乘法是加法的简便运算，感悟除法是乘法的逆运算。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-addition-subtraction-within-100"
            ],
            "courses": [
              "math-elem-multiplication-table"
            ]
          },
          {
            "id": "math-e-division-intro",
            "name": "表内除法",
            "points": [
              "探索乘法和除法的算理与算法，会简单的整数乘除法。",
              "能熟练口算20以内数的加减法和表内乘除法，能口算简单的百以内数的加减法。",
              "在具体情境中，启发学生理解乘法是加法的简便运算，感悟除法是乘法的逆运算。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-multiplication-table"
            ],
            "courses": [
              "math-elem-division-intro"
            ]
          },
          {
            "id": "math-e-division-concept",
            "name": "除法的认识",
            "points": [
              "探索乘法和除法的算理与算法，会简单的整数乘除法。",
              "能描述四则运算的含义，知道减法是加法的逆运算、乘法是加法的简便运算、除法是乘法的逆运算。",
              "在具体情境中，启发学生理解乘法是加法的简便运算，感悟除法是乘法的逆运算。"
            ],
            "domain": "数与代数",
            "semester": "下",
            "prerequisites": [
              "math-e-division-intro"
            ],
            "courses": [
              "math-e-division-concept"
            ]
          },
          {
            "id": "math-e-angle-concept",
            "name": "角的认识与度量",
            "points": [
              "结合生活情境认识角，知道角的大小关系；会用量角器量角，会用量角器或三角板画角。",
              "会比较角的大小；能说出直角、锐角、钝角的特征，能辨认平角和周角；会用量角器测量角的大小，能用直尺和量角器画出指定度数的角。"
            ],
            "domain": "图形与几何",
            "semester": "二上/四上",
            "prerequisites": [
              "math-e-plane-shapes"
            ],
            "courses": [
              "math-elem-angles"
            ]
          },
          {
            "id": "math-e-length-units",
            "name": "长度单位（厘米/米/千米）",
            "points": [
              "结合生活实际，体会建立统一度量单位的重要性，认识长度单位米、厘米。",
              "感悟统一单位的重要性，能恰当地选择长度单位米、厘米描述生活中常见物体的长度，能进行单位之间的换算。",
              "引导学生经历统一度量单位的过程，创设测量课桌长度等生活情境，借助拃的长度、铅笔的长度等不同的方式测量，感受统一长度单位的意义。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-numbers-within-100"
            ],
            "courses": [
              "math-elem-length-units"
            ]
          },
          {
            "id": "math-e-time-units",
            "name": "时间单位（时/分/秒）",
            "points": [
              "在主题活动中认识货币单位、时间单位和基本方向，尝试用数学方法解决问题，积累数学活动经验，形成初步的量感和应用意识。",
              "体验物体长度的测量过程，认识常见的长度单位，形成初步的量感和空间观念。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-numbers-within-100"
            ],
            "courses": [
              "math-elem-time-units"
            ]
          },
          {
            "id": "math-e-measurement-sense",
            "name": "量感培养（跨学段）",
            "points": [
              "体验物体长度的测量过程，认识常见的长度单位，形成初步的量感。",
              "经历平面图形的周长和面积的测量过程，探索长方形周长和面积的计算方法，形成量感。",
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，形成量感。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-length-units"
            ],
            "courses": [
              "math-e-measurement-sense"
            ]
          },
          {
            "id": "math-e-pictograph",
            "name": "象形统计图（数据分类与整理）",
            "points": [
              "经历简单的分类过程，能根据给定的标准进行分类，形成初步的数据意识。",
              "经历简单的数据收集过程，了解数据收集、整理和呈现的简单方法；形成初步的数据意识。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-e-numbers-within-100"
            ],
            "courses": [
              "math-elem-pictograph"
            ]
          }
        ]
      },
      {
        "subject": "science",
        "name": "小学科学",
        "nodes": [
          {
            "id": "sci-e-materials-in-life",
            "name": "生活中常见的材料",
            "points": [
              "认识常见物体的基本外部特征，认识生活中常见的材料；知道生活中常见的力，认识力可以改变物体的形状。",
              "知道生活中的天然材料和人造材料存在区别；知道技术产品包含科学概念、原理；知道简单的设计问题存在限制条件，并有多种设计方案。"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-object-properties"
            ],
            "courses": [
              "sci-e-materials-in-life"
            ]
          },
          {
            "id": "sci-e-push-pull-force",
            "name": "推和拉的力",
            "points": [
              "知道生活中常见的力，认识力可以改变物体的形状。",
              "认识物体有多种运动形式，力可以改变物体的运动状态。"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-object-properties"
            ],
            "courses": [
              "sci-e-push-pull-force"
            ]
          },
          {
            "id": "sci-e-magnetism",
            "name": "磁铁与磁现象",
            "points": [
              "知道生活中常见的力，认识力可以改变物体的形状。",
              "认识物体有多种运动形式，力可以改变物体的运动状态，运动的物体具有能量。",
              "能利用材料和工具，通过口述、绘画、画图等方式表达自己的想法。"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-push-pull-force"
            ],
            "courses": [
              "sci-e-magnetism"
            ]
          },
          {
            "id": "sci-e-animal-features",
            "name": "动物的外形与特征",
            "points": [
              "认识周边常见的植物和动物，能简单描述其外部主要特征和生长过程。",
              "能利用多种感官或简单的工具，观察对象的外部形态特征及现象，并能对这些特征和现象进行简单的比较、分类等。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-living-vs-nonliving"
            ],
            "courses": [
              "sci-e-animal-features"
            ]
          },
          {
            "id": "sci-e-senses",
            "name": "人的感官",
            "points": [
              "认识周边常见的植物和动物，能简单描述其外部主要特征和生长过程。",
              "能利用多种感官或简单的工具，观察对象的外部形态特征及现象，并能对这些特征和现象进行简单的比较、分类等。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-living-vs-nonliving"
            ],
            "courses": [
              "sci-e-senses"
            ]
          },
          {
            "id": "sci-e-seasons",
            "name": "四季变化",
            "points": [
              "能描述太阳升落、季节变化和月亮形状变化等自然现象，说出天气变化及其对人类生活的影响。",
              "知道太阳、地球和月球的周期性运动以及相关的自然现象，能认识到太空探索拓宽了人类的视野。"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-weather-observation"
            ],
            "courses": [
              "sci-e-seasons"
            ]
          },
          {
            "id": "sci-e-measurement",
            "name": "测量与数据记录",
            "points": [
              "能利用多种感官或简单的工具，观察对象的外部形态特征及现象，并能对这些特征和现象进行简单的比较、分类等。具有初步的收集信息和得出结论的意识。",
              "能运用感官和选择恰当的工具、仪器，观察并描述对象的外部形态特征及现象，用较准确的科学词汇、统计图表等记录和整理信息。"
            ],
            "domain": "技术与工程",
            "prerequisites": [
              "sci-e-tools-use"
            ],
            "courses": [
              "sci-e-measurement"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "小学道德与法治",
        "nodes": [
          {
            "id": "pol-e-g2-u1",
            "name": "过好节假日",
            "points": [
              "【课标】礼貌与诚信，克己守礼，自尊自爱，自强自律；感受传统节日与家乡文化。",
              "【教材·过好节假日】假期有收获；教师节快乐；团团圆圆过中秋；欢欢喜喜庆国庆"
            ],
            "domain": "道德修养",
            "semester": "上",
            "prerequisites": [
              "pol-e-g1-u4"
            ]
          },
          {
            "id": "pol-e-g2-u3",
            "name": "我的家乡美",
            "points": [
              "【课标】掌握基本安全知识和技能，珍爱生命。",
              "【教材·我的家乡美】我爱家乡山和水；家乡物产养育我；可亲可敬的家乡人；家乡新变化"
            ],
            "domain": "生命安全与健康",
            "semester": "上",
            "prerequisites": [
              "pol-e-g2-u2"
            ]
          },
          {
            "id": "pol-e-g2-u4",
            "name": "我爱我们的祖国",
            "points": [
              "【课标】了解基本法律常识，树立规则意识和权利意识。",
              "【教材·我爱我们的祖国】美丽中国我们的家；我们都是中国人；红红火火中国年；祖国，我为您自豪"
            ],
            "domain": "法治启蒙",
            "semester": "上",
            "prerequisites": [
              "pol-e-g2-u3"
            ]
          },
          {
            "id": "pol-e-g2-u2",
            "name": "我爱我们班",
            "points": [
              "【课标】诚实守信，友善待人，有集体意识和责任感。",
              "【教材·我爱我们班】这是我们班；班级生活有规则；我是班级值日生；我为班级作贡献"
            ],
            "domain": "中华优秀传统文化",
            "semester": "上",
            "prerequisites": [
              "pol-e-g2-u1"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "小学信息科技",
        "nodes": [
          {
            "id": "it-e-digital-tools-basic",
            "name": "常用数字工具与安全使用",
            "points": [
              "体验常用数字工具，知道安全、规范使用。"
            ],
            "domain": "在线社会与信息表达",
            "prerequisites": [
              "it-e-online-experience"
            ]
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "小学心理健康教育",
        "nodes": [
          {
            "id": "psych-e-g2-self-confidence",
            "name": "自信与集体归属感",
            "points": [
              "培养学生礼貌友好的交往品质，乐于与老师、同学交往，在谦让、友善的交往中感受友情。",
              "使学生有安全感和归属感，初步学会自我控制。",
              "树立集体意识，培养自主参与各种活动的能力。"
            ],
            "domain": "人际交往",
            "prerequisites": [
              "psych-e-g1-learning-habit"
            ]
          },
          {
            "id": "psych-e-g2-emotion-basics",
            "name": "情绪体验与自我控制",
            "points": [
              "初步学会体验情绪并表达自己的情绪。",
              "使学生有安全感和归属感，初步学会自我控制。"
            ],
            "domain": "情绪调适",
            "prerequisites": [
              "psych-e-g2-self-confidence"
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "subject": "chinese",
        "name": "小学语文",
        "nodes": [
          {
            "id": "chn-e-homophone-polysemy",
            "name": "同音字、多音字与形近字",
            "points": [
              "能感知常用汉字形、音、义之间的联系，初步建立汉字与生活中事物、行为的联系，初步感受汉字的文化内涵。",
              "尝试分类整理学过的字词。尝试发现所学汉字形、音、义和书写的特点，帮助自己识字、写字。"
            ],
            "domain": "识字与写字",
            "prerequisites": [
              "chn-e-char-recognition-2"
            ],
            "extends": [
              "chn-e-word-formation"
            ],
            "courses": [
              "chn-e-homophone-polysemy"
            ]
          },
          {
            "id": "chn-e-calligraphy-practice",
            "name": "硬笔书法与书写规范",
            "points": [
              "写字姿势正确，养成良好的书写习惯。能用硬笔熟练地书写正楷字，做到规范、端正、整洁。",
              "掌握汉字的基本笔画和常用的偏旁部首，能按基本的笔顺规则用硬笔写字，注意间架结构，初步感受汉字的形体美。"
            ],
            "domain": "识字与写字",
            "prerequisites": [
              "chn-e-char-structure"
            ],
            "courses": [
              "chn-e-calligraphy-practice"
            ]
          },
          {
            "id": "chn-e-synonym-antonym",
            "name": "近义词与反义词",
            "points": [
              "能联系上下文，理解词句的意思，体会课文中关键词句表达情意的作用。能借助字典、词典和生活积累，理解生词的意义。",
              "积累课文中的优美词语、精彩句段，以及在课外阅读和生活中获得的语言材料。",
              "尝试分类整理学过的字词。尝试发现所学汉字形、音、义和书写的特点，帮助自己识字、写字。"
            ],
            "domain": "词语积累",
            "prerequisites": [
              "chn-e-word-formation"
            ],
            "extends": [
              "chn-e-idiom-proverb"
            ],
            "courses": [
              "chn-e-synonym-antonym"
            ]
          },
          {
            "id": "chn-e-idiom-proverb",
            "name": "成语、谚语与歇后语",
            "points": [
              "积累课文中的优美词语、精彩句段，以及在课外阅读和生活中获得的语言材料。",
              "尝试在习作中运用自己平时积累的语言材料，特别是有新鲜感的词句。"
            ],
            "domain": "词语积累",
            "prerequisites": [
              "chn-e-synonym-antonym"
            ],
            "extends": [
              "chn-e-context-word-meaning"
            ],
            "courses": [
              "chn-e-idiom-proverb"
            ]
          },
          {
            "id": "chn-e-sentence-expansion",
            "name": "扩句与缩句",
            "points": [
              "息，进行缩写;能根据文章的基本内容和自己的合理想象，进行扩 写; 能变换文章的文体或表达方式等，进行改写。尝试诗歌、小小说"
            ],
            "domain": "句子与标点",
            "prerequisites": [
              "chn-e-sentence-types"
            ],
            "extends": [
              "chn-e-complex-sentences"
            ],
            "courses": [
              "chn-e-sentence-expansion"
            ]
          },
          {
            "id": "chn-e-sentence-transformation",
            "name": "改写句子（把字句/被字句/转述句）",
            "points": [
              "能用普通话交谈，学会认真倾听，听人说话时能把握主要内容，并能简要转述。",
              "观察周围世界，能不拘形式地写下自己的见闻、感受和想象，注意把自己觉得新奇有趣或印象最深、最受感动的内容写清楚。"
            ],
            "domain": "句子与标点",
            "prerequisites": [
              "chn-e-sentence-types"
            ],
            "extends": [
              "chn-e-complex-sentences"
            ],
            "courses": [
              "chn-e-sentence-transformation"
            ]
          },
          {
            "id": "chn-e-paragraph-structure",
            "name": "自然段与意义段划分",
            "points": [
              "能初步把握文章的主要内容，体会文章表达的思想感情。学习圈点、批注等阅读方法。",
              "能复述叙事性作品的大意，初步感受作品中生动的形象和优美的语言，关心作品中人物的命运和喜怒哀乐。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "chn-e-complex-sentences"
            ],
            "extends": [
              "chn-e-main-idea-summary",
              "chn-e-text-structure"
            ],
            "courses": [
              "chn-e-paragraph-structure"
            ]
          },
          {
            "id": "chn-e-paragraph-analysis",
            "name": "段落分析",
            "points": [
              "能初步把握文章的主要内容，体会文章表达的思想感情。学习圈点、批注等阅读方法。",
              "能复述叙事性作品的大意，初步感受作品中生动的形象和优美的语言，关心作品中人物的命运和喜怒哀乐。"
            ],
            "domain": "阅读理解",
            "semester": "上",
            "prerequisites": [
              "chn-e-paragraph-structure"
            ],
            "courses": [
              "chn-e-paragraph-analysis"
            ]
          },
          {
            "id": "chn-e-rhetorical-devices",
            "name": "修辞手法",
            "points": [
              "能联系上下文，理解词句的意思，体会课文中关键词句表达情意的作用。",
              "能初步把握文章的主要内容，体会文章表达的思想感情。学习圈点、批注等阅读方法。"
            ],
            "domain": "阅读理解",
            "semester": "下",
            "prerequisites": [
              "chn-e-figurative-language"
            ],
            "courses": [
              "chn-e-rhetorical-devices"
            ]
          },
          {
            "id": "chn-e-whole-book-reading",
            "name": "整本书阅读",
            "points": [
              "第二学段（3~4年级）【阅读与鉴赏】5. 阅读整本书，初步理解主要内容，主动和同学分享自己的阅读感受。",
              "第三学段（5~6年级）【阅读与鉴赏】6. 阅读整本书，把握文本的主要内容，积极向同学推荐并说明理由。",
              "第四学段（7~9年级）【阅读与鉴赏】7. 每学年阅读两三部名著，探索个性化的阅读方法，分享阅读感受，开展专题探究，建构阅读整本书的经验。"
            ],
            "domain": "阅读理解",
            "semester": "全学段",
            "prerequisites": [
              "chn-e-non-fiction-reading"
            ],
            "courses": [
              "chn-e-whole-book-reading"
            ]
          },
          {
            "id": "chn-e-narrative-writing",
            "name": "记叙文（写人/记事/写景/状物）",
            "points": [
              "观察周围世界，能不拘形式地写下自己的见闻、感受和想象，注意把自己觉得新奇有趣或印象最深、最受感动的内容写清楚。",
              "能用便条、简短的书信等进行交流。尝试在习作中运用自己平时积累的语言材料，特别是有新鲜感的词句。",
              "学习修改习作中有了明显错误的词句。根据表达的需要，正确使用冒号、引号等标点符号。课内习作每学年16次左右。"
            ],
            "domain": "写作表达",
            "prerequisites": [
              "chn-e-paragraph-structure",
              "chn-e-diary-writing"
            ],
            "extends": [
              "chn-e-detail-description"
            ],
            "courses": [
              "chn-e-narrative-writing"
            ]
          },
          {
            "id": "chn-e-paragraph-writing",
            "name": "段落写作",
            "points": [
              "观察周围世界，能不拘形式地写下自己的见闻、感受和想象，注意把自己觉得新奇有趣或印象最深、最受感动的内容写清楚。",
              "能用便条、简短的书信等进行交流。尝试在习作中运用自己平时积累的语言材料，特别是有新鲜感的词句。",
              "学习修改习作中有了明显错误的词句。根据表达的需要，正确使用冒号、引号等标点符号。"
            ],
            "domain": "写作表达",
            "semester": "上",
            "prerequisites": [
              "chn-e-paragraph-structure"
            ],
            "courses": [
              "chn-e-paragraph-writing"
            ]
          },
          {
            "id": "chn-e-oral-presentation",
            "name": "口头表达与讲述",
            "points": [
              "能清楚明白地讲述见闻，说出自己的感受和想法。讲述故事力求具体生动。",
              "能主动参与日常生活中的文化活动，根据不同的场合，尝试运用合适的音量和语气与他人交流，有礼貌地请教、回应。",
              "乐于用口头、书面的方式与人交流沟通，愿意与他人分享，增强表达的自信心。"
            ],
            "domain": "口语交际",
            "prerequisites": [
              "chn-e-conversation-etiquette"
            ],
            "extends": [
              "chn-e-debate-discussion"
            ],
            "courses": [
              "chn-e-oral-presentation"
            ]
          },
          {
            "id": "chn-e-tang-poetry",
            "name": "唐诗宋词名篇背诵",
            "points": [
              "诵读优秀诗文，注意在诵读过程中体验情感，展开想象，领悟诗文大意。",
              "背诵优秀诗文50篇（段）。"
            ],
            "domain": "古诗文",
            "prerequisites": [
              "chn-e-nursery-rhyme",
              "chn-e-context-word-meaning"
            ],
            "extends": [
              "chn-e-poetry-appreciation"
            ],
            "courses": [
              "chn-e-tang-poetry"
            ]
          },
          {
            "id": "chn-e-poetry-rhythm",
            "name": "古诗词韵律",
            "points": [
              "诵读优秀诗文，注意在诵读过程中体验情感，展开想象，领悟诗文大意。",
              "背诵优秀诗文50篇（段）。"
            ],
            "domain": "古诗文",
            "semester": "上",
            "prerequisites": [
              "chn-e-tang-poetry"
            ],
            "courses": [
              "chn-e-poetry-rhythm",
              "chn-pingze-grade1"
            ]
          },
          {
            "id": "chn-e-poetry-recitation",
            "name": "古诗词背诵与默写",
            "points": [
              "诵读优秀诗文，注意在诵读过程中体验情感，展开想象，领悟诗文大意。",
              "背诵优秀诗文50篇（段）。"
            ],
            "domain": "古诗文",
            "semester": "上",
            "prerequisites": [
              "chn-e-nursery-rhyme"
            ],
            "courses": [
              "chn-e-poetry-recitation"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "小学数学",
        "nodes": [
          {
            "id": "math-e-multi-digit-addition-subtraction",
            "name": "万以内加减法",
            "points": [
              "能进行较复杂的整数四则运算和简单的小数、分数的加减运算，理解运算律；形成数感、运算能力和初步的推理意识。",
              "探索并掌握多位数的乘除法，感悟从未知到已知的转化。",
              "能进行整数四则混合运算（以两步为主，不超过三步），正确运用小括号和中括号。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-addition-subtraction-within-100",
              "math-e-numbers-within-10000"
            ],
            "courses": [
              "math-e-multi-digit-addition-subtraction"
            ]
          },
          {
            "id": "math-e-multi-digit-multiplication",
            "name": "多位数乘法",
            "points": [
              "探索并掌握多位数的乘除法，感悟从未知到已知的转化。",
              "能计算两位数乘除三位数。",
              "数的运算教学应利用整数的乘法运算，理解算理与算法之间的关系。"
            ],
            "domain": "数与代数",
            "semester": "三上-四上",
            "prerequisites": [
              "math-e-multiplication-table",
              "math-e-numbers-within-10000"
            ],
            "courses": [
              "math-elem-multi-digit-multiply"
            ]
          },
          {
            "id": "math-e-mixed-operations",
            "name": "四则混合运算",
            "points": [
              "在解决简单实际问题的过程中，理解四则运算的意义，能进行整数四则混合运算。",
              "能描述减法与加法的关系、除法与乘法的关系；能进行整数四则混合运算（以两步为主，不超过三步），正确运用小括号和中括号。",
              "能在简单的实际情境中，运用四则混合运算解决问题，能选择合适的单位通过估算解决实际问题，形成初步的应用意识。"
            ],
            "domain": "数与代数",
            "semester": "二下-四上",
            "prerequisites": [
              "math-e-multi-digit-multiplication",
              "math-e-multi-digit-division"
            ],
            "courses": [
              "math-e-mixed-operations"
            ]
          },
          {
            "id": "math-e-fractions-intro",
            "name": "分数的初步认识",
            "points": [
              "结合具体情境，初步认识小数和分数，感悟分数单位；会进行同分母分数的加减法和一位小数的加减法。",
              "能直观描述小数和分数，能比较简单的小数的大小和分数的大小；会进行同分母分数的加减运算和一位小数的加减运算。",
              "通过学生熟悉的具体情境，引导学生初步认识分数，进行简单的分数大小比较，感悟分数单位。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-division-concept"
            ],
            "courses": [
              "math-elem-fractions-intro"
            ]
          },
          {
            "id": "math-e-decimals-intro",
            "name": "小数的初步认识",
            "points": [
              "结合具体情境，初步认识小数和分数，感悟分数单位；会进行同分母分数的加减法和一位小数的加减法。",
              "能直观描述小数和分数，能比较简单的小数的大小和分数的大小；会进行同分母分数的加减运算和一位小数的加减运算。",
              "数的认识教学应为学生提供合理的情境，引导学生进一步经历整数的抽象过程...借助学生的生活经验，引导学生认识小数单位，进一步感悟十进制计数法。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-multi-digit-addition-subtraction"
            ],
            "courses": [
              "math-elem-decimals-intro"
            ]
          },
          {
            "id": "math-e-mass-units",
            "name": "质量单位（克/千克/吨）",
            "points": [
              "在主题活动中进一步认识时间单位和方向，认识质量单位，尝试应用数学和其他学科知识与方法解决问题，积累数学活动经验，形成量感、推理意识和应用意识。",
              "认识长度单位干米，知道分米、毫米；认识面积单位厘米`、BOR OR? s 能进行简单的单位换算，能恰当地选择单位估测一些物体的长度和面积，会进行测量。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-numbers-within-10000"
            ],
            "courses": [
              "math-elem-mass-units"
            ]
          },
          {
            "id": "math-e-area-units",
            "name": "面积单位与换算",
            "points": [
              "认识面积单位厘米²、分米²、米²，能进行简单的单位换算，能恰当地选择单位估测一些物体的长度和面积，会进行测量。",
              "能描述面积单位厘米²、分米²、米²，能进行面积单位之间的换算。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-length-units"
            ],
            "courses": [
              "math-elem-area-units"
            ]
          },
          {
            "id": "math-e-measurement-sense",
            "name": "量感培养（跨学段）",
            "points": [
              "体验物体长度的测量过程，认识常见的长度单位，形成初步的量感。",
              "经历平面图形的周长和面积的测量过程，探索长方形周长和面积的计算方法，形成量感。",
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，形成量感。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-length-units"
            ],
            "courses": [
              "math-e-measurement-sense"
            ]
          },
          {
            "id": "math-e-perimeter",
            "name": "周长（含长方形周长）",
            "points": [
              "结合实例认识周长和面积；探索并掌握长方形、正方形的周长和面积的计算公式。",
              "经历用直尺和圆规将三角形的三条边画到一条直线上的过程，直观感受三角形的周长，知道什么是图形的周长；会测量三角形、长方形和正方形的周长。",
              "在解决图形周长、面积的实际问题过程中，逐步积累操作的经验，形成量感和初步的几何直观。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-plane-shapes",
              "math-e-length-units"
            ],
            "courses": [
              "math-elem-perimeter"
            ]
          },
          {
            "id": "math-e-area-rectangle",
            "name": "面积（长方形、正方形）",
            "points": [
              "结合实例认识周长和面积；探索并掌握长方形、正方形的周长和面积的计算公式。",
              "会计算长方形、正方形的周长和面积。在解决图形周长、面积的实际问题过程中，逐步积累操作的经验，形成量感和初步的几何直观。"
            ],
            "domain": "图形与几何",
            "semester": "下",
            "prerequisites": [
              "math-e-perimeter",
              "math-e-multi-digit-multiplication",
              "math-e-area-units"
            ],
            "courses": [
              "math-e-area-rectangle"
            ]
          },
          {
            "id": "math-e-position-direction",
            "name": "位置与方向",
            "points": [
              "结合实例，感受平移、旋转、轴对称现象。",
              "能在实际情境中，辨认出生活中的平移、旋转和轴对称现象，直观感知平移、旋转和轴对称的特征。",
              "学生结合实际情境判断物体的位置，探索用数对表示平面上点的位置，增强空间观念和应用意识。"
            ],
            "domain": "图形与几何",
            "semester": "三下/六上",
            "prerequisites": [
              "math-e-plane-shapes"
            ],
            "courses": [
              "math-e-position-direction"
            ]
          },
          {
            "id": "math-e-symmetry-translation-rotation",
            "name": "轴对称、平移与旋转",
            "points": [
              "结合实例，感受平移、旋转、轴对称现象。",
              "能在实际情境中，辨认出生活中的平移、旋转和轴对称现象，直观感知平移、旋转和轴对称的特征。",
              "学生经历对现实生活中图形运动的抽象过程，认识平移、旋转、轴对称的特征，体会运动前后图形的变与不变。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-plane-shapes"
            ],
            "courses": [
              "math-e-symmetry-translation-rotation"
            ]
          },
          {
            "id": "math-e-word-problems-multiply",
            "name": "乘除法两步应用题",
            "points": [
              "在解决简单实际问题的过程中，理解四则运算的意义，能进行整数四则混合运算。",
              "在具体情境中，认识常见数量关系: 总量=分量+分量、总价=单价×数量、路程=速度×时间；能利用这些关系解决简单的实际问题。",
              "能在简单的实际情境中，运用四则混合运算解决问题，能选择合适的单位通过估算解决实际问题，形成初步的应用意识。"
            ],
            "domain": "综合与实践",
            "prerequisites": [
              "math-e-word-problems-basic",
              "math-e-multi-digit-multiplication"
            ],
            "courses": [
              "math-elem-word-problems-multiply"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "小学英语",
        "nodes": [
          {
            "id": "eng-e-alphabet",
            "name": "26个英文字母",
            "points": [
              "在起始年段的英语教学中，帮助学生制订简单的学习计划，通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "针对词汇教学，采用“音”“形”“义”和“用”相结合的方法，在语境中引导学生感知单词的发音；借助图片、实物等教具，以及表情、手势和动作等帮助学生认读并理解词汇含义。",
              "能正确书写字母、单词和句子。"
            ],
            "domain": "语音与自然拼读",
            "semester": "上",
            "courses": [
              "eng-e-alphabet"
            ]
          },
          {
            "id": "eng-e-consonant-sounds",
            "name": "辅音音素",
            "points": [
              "引导学生在感知、理解、模仿和运用中习得语言，学会表达。通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "针对词汇教学，采用“音”“形”“义”和“用”相结合的方法，在语境中引导学生感知单词的发音。",
              "通过丰富的语言实践活动，如听录音模仿，朗读语篇，为故事配音，演唱歌曲、韵文等，引导学生感知、体会英语的重音、意群、语调与节奏等，为准确、得体地表达与交流奠定基础。"
            ],
            "domain": "语音与自然拼读",
            "prerequisites": [
              "eng-e-alphabet"
            ],
            "courses": [
              "eng-e-consonant-sounds"
            ]
          },
          {
            "id": "eng-e-vowel-sounds",
            "name": "元音音素",
            "points": [
              "引导学生在感知、理解、模仿和运用中习得语言，学会表达。通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "针对词汇教学，采用“音”“形”“义”和“用”相结合的方法，在语境中引导学生感知单词的发音。",
              "能感知单词、短语及简单句的重音和升降调等，能有意识地通过模仿学习发音；能大声跟读音视频材料。"
            ],
            "domain": "语音与自然拼读",
            "prerequisites": [
              "eng-e-alphabet"
            ],
            "courses": [
              "eng-e-vowel-sounds"
            ]
          },
          {
            "id": "eng-e-phonics-consonants",
            "name": "辅音字母组合拼读",
            "points": [
              "在起始年段的英语教学中，帮助学生制订简单的学习计划，通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "针对词汇教学，采用“音”“形”“义”和“用”相结合的方法，在语境中引导学生感知单词的发音。",
              "基于有意义的学习素材，通过感知、体验、运用、实践等循序渐进的方式，发展学生的拼读能力和语音意识。"
            ],
            "domain": "语音与自然拼读",
            "prerequisites": [
              "eng-e-consonant-sounds"
            ],
            "courses": [
              "eng-e-phonics-consonants"
            ]
          },
          {
            "id": "eng-e-numbers-colors",
            "name": "数字与颜色",
            "points": [
              "针对词汇教学，采用“音”“形”“义”和“用”相结合的方法，在语境中引导学生感知单词的发音。",
              "借助图片、实物等教具，以及表情、手势和动作等帮助学生认读并理解词汇含义。",
              "在语境中反复再现词汇，帮助学生有意识地使用词汇表达意义，避免脱离语境的机械记忆与操练。"
            ],
            "domain": "词汇",
            "semester": "上",
            "prerequisites": [
              "eng-e-alphabet"
            ],
            "courses": [
              "eng-e-numbers-colors"
            ]
          },
          {
            "id": "eng-e-vocab-family-school",
            "name": "家庭与校园词汇",
            "points": [
              "针对词汇教学，采用“音”“形”“义”和“用”相结合的方法，在语境中引导学生感知单词的发音；借助图片、实物等教具，以及表情、手势和动作等帮助学生认读并理解词汇含义。",
              "在语境中反复再现词汇，帮助学生有意识地使用词汇表达意义，避免脱离语境的机械记忆与操练。",
              "能识别有关个人、家庭，以及熟悉事物的图片或实物、单词、短语；能根据简单指令作出反应。"
            ],
            "domain": "词汇",
            "prerequisites": [
              "eng-e-phonics-rules"
            ],
            "courses": [
              "eng-e-vocab-family-school"
            ]
          },
          {
            "id": "eng-e-nouns-articles",
            "name": "名词与冠词 a/an/the",
            "points": [
              "(一) 名词 1. 可数名词及其单、复数 2. 不可数名词 3. 专有名词 4. 名词所有格 (=) 动词 1. 动词的基本形式 2. 及物动词和不及物动词 3. 系动词 4. 助动词 5. 情态动词…"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-e-vocab-family-school"
            ],
            "courses": [
              "eng-e-nouns-articles"
            ]
          },
          {
            "id": "eng-e-pronouns-be-verbs",
            "name": "人称代词与 be 动词",
            "points": [
              "针对语法教学，应遵循形式、意义和使用统一的原则，让学生感知和体验形式与意义的联系，在语境中运用所学语法进行交流和表达。",
              "在语境中反复再现词汇，帮助学生有意识地使用词汇表达意义，避免脱离语境的机械记忆与操练。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-e-nouns-articles"
            ],
            "courses": [
              "eng-e-pronouns-be-verbs"
            ]
          },
          {
            "id": "eng-e-simple-sentences",
            "name": "简单句结构",
            "points": [
              "针对语法教学，应遵循形式、意义和使用统一的原则，让学生感知和体验形式与意义的联系，在语境中运用所学语法进行交流和表达。",
              "能感知单词、短语及简单句的重音和升降调等，能有意识地通过模仿学习发音；能积累表达个人喜好和个人基本信息的简单句式。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-e-pronouns-be-verbs"
            ],
            "courses": [
              "eng-e-simple-sentences"
            ]
          },
          {
            "id": "eng-e-greetings-classroom",
            "name": "课堂用语与问候语",
            "points": [
              "能理解基本的问候、感谢用语，并作出简单回应。",
              "能在教师指导下，学习和感知人际交往中英语独特的表达方式。",
              "有与人交流沟通的愿望；能大方地与人接触，主动问候。"
            ],
            "domain": "语篇与阅读",
            "prerequisites": [
              "eng-e-alphabet"
            ],
            "courses": [
              "eng-e-greetings-classroom"
            ]
          },
          {
            "id": "eng-e-greetings-intro",
            "name": "打招呼与自我介绍",
            "points": [
              "能理解基本的问候、感谢用语，并作出简单回应。",
              "有与人交流沟通的愿望；能大方地与人接触，主动问候。",
              "能在教师指导下，学习和感知人际交往中英语独特的表达方式。"
            ],
            "domain": "语篇与阅读",
            "prerequisites": [
              "eng-e-pronouns-be-verbs"
            ],
            "courses": [
              "eng-e-greetings-intro"
            ]
          },
          {
            "id": "eng-e-listening-speaking",
            "name": "听说训练综合",
            "points": [
              "设计多途径的听说活动，借助图片、视频、简笔画、手势等帮助学生理解所听、所看语言材料，引导学生在感知、理解、模仿和运用中习得语言，学会表达。",
              "通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "在交流中引导学生注意倾听、敢于开口、不怕出错、大胆表达自己的观点或转述他人的观点等。"
            ],
            "domain": "听说",
            "prerequisites": [
              "eng-e-greetings-intro"
            ],
            "courses": [
              "eng-e-listening-speaking"
            ]
          }
        ]
      },
      {
        "subject": "science",
        "name": "小学科学",
        "nodes": [
          {
            "id": "sci-e-solid-liquid-gas",
            "name": "物质的三态与变化",
            "points": [
              "初步认识常见物质的变化，知道物体变化时构成物体的物质可能改变也可能不改变。",
              "认识常见物体的某些特征和常见材料的某些性能。",
              "能利用多种感官或简单的工具，观察对象的外部形态特征及现象，并能对这些特征和现象进行简单的比较、分类等。"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-materials-in-life"
            ],
            "courses": [
              "sci-e-solid-liquid-gas"
            ]
          },
          {
            "id": "sci-e-water-cycle-matter",
            "name": "水的蒸发、凝结与循环",
            "points": [
              "理解水的蒸发、凝结现象",
              "能解释自然界水循环",
              "能设计简易蒸发-凝结实验"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-solid-liquid-gas"
            ],
            "courses": [
              "sci-e-water-cycle-matter"
            ]
          },
          {
            "id": "sci-e-light",
            "name": "光的传播与影子",
            "points": [
              "ORS AARNE 〈如太阳光、灯光) 或来自物体反射 的光〈如月光)。 描述光被阻挡时形成阻挡物影子的现象。 举例说明声音因物体的振动而产生。 思举例说明声音在不同物质中可以向各个方向传播。 知道声…"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-object-properties"
            ],
            "courses": [
              "sci-e-light"
            ]
          },
          {
            "id": "sci-e-plant-life-cycle",
            "name": "植物的一生（种子到果实）",
            "points": [
              "认识周边常见的植物和动物，能简单描述其外部主要特征和生长过程。",
              "能区分植物和动物的主要特征，并能对植物和动物进行简单分类；认识植物的某些结构、动物的某些结构与行为具有维持自身生存的功能，认识生物通过生殖、发育实现生命的延续。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-plant-parts"
            ],
            "courses": [
              "sci-e-plant-life-cycle"
            ]
          },
          {
            "id": "sci-e-animal-life-cycle",
            "name": "动物的生长与繁殖",
            "points": [
              "认识周边常见的植物和动物，能简单描述其外部主要特征和生长过程。",
              "认识植物的某些结构、动物的某些结构与行为具有维持自身生存的功能，认识生物通过生殖、发育实现生命的延续。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-animal-features"
            ],
            "courses": [
              "sci-e-animal-life-cycle"
            ]
          },
          {
            "id": "sci-e-water-earth",
            "name": "地球上的水资源",
            "points": [
              "知道空气、水、土壤都是地球系统的基本要素；知道人类生活离不开自然资源，能认识到节约自然资源和保护环境的重要性。",
              "能描述太阳升落、季节变化和月亮形状变化等自然现象，说出天气变化及其对人类生活的影响；知道地球是人类和动植物的共同家园。"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-weather-observation"
            ],
            "courses": [
              "sci-e-water-earth"
            ]
          },
          {
            "id": "sci-e-day-night",
            "name": "昼夜变化与地球自转",
            "points": [
              "9.2 地球绕| 观察并描述太阳光照射下物体影长从早到晚的变化 地轴自转 情况。 加知道月球是地球的天然卫星; WVBR A 片资料，了解月球表面的概况。 图知道每天观察到的月亮形状是变化的。 9.2…"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-weather-observation"
            ],
            "courses": [
              "sci-e-day-night"
            ]
          },
          {
            "id": "sci-e-design-process",
            "name": "设计与制作（工程设计初步）",
            "points": [
              "技术与工程实践能力体现在：了解技术与工程实践的一般过程和方法，针对实际需要明确问题，提出有创意的方案，并根据科学原理或限制条件进行筛选；实施计划，利用工具和材料进行加工制作；根据实际效果进行修改迭代；…",
              "知道简单工程存在一定约束条件及验收标准。",
              "能利用材料和工具，通过口述、绘画、画图等方式表达自己的想法。"
            ],
            "domain": "技术与工程",
            "prerequisites": [
              "sci-e-tools-use"
            ],
            "courses": [
              "sci-e-design-process"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "小学道德与法治",
        "nodes": [
          {
            "id": "pol-e-g3-u1",
            "name": "做学习的主人",
            "points": [
              "【课标】诚实守信，友善待人，尊重他人，有集体意识和责任感。",
              "【教材·做学习的主人】学习伴我成长；我学习我快乐；学习有方法"
            ],
            "domain": "道德修养",
            "semester": "上",
            "prerequisites": [
              "pol-e-g2-u4"
            ]
          },
          {
            "id": "pol-e-g3-u3",
            "name": "在集体中长大",
            "points": [
              "【课标】感受中华优秀传统文化魅力，增强文化自信。",
              "【教材·在集体中长大】走近我们的引路人；同学相伴；让我们的学校更美好"
            ],
            "domain": "生命安全与健康",
            "semester": "上",
            "prerequisites": [
              "pol-e-g3-u2"
            ]
          },
          {
            "id": "pol-e-g3-u4",
            "name": "公共生活靠大家",
            "points": [
              "【课标】遵守公共秩序，爱护公共设施，参与力所能及的公益活动。",
              "【教材·公共生活靠大家】公共场所，文明言行；我们都是热心人；生活离不开规则；安全记心上"
            ],
            "domain": "法治启蒙",
            "semester": "上",
            "prerequisites": [
              "pol-e-g3-u3"
            ]
          },
          {
            "id": "pol-e-g3-u2",
            "name": "学科学 爱科学",
            "points": [
              "【课标】掌握基本安全知识和技能，学会应对常见安全问题。",
              "【教材·学科学 爱科学】科技力量大；走近科学家；争做未来科学家"
            ],
            "domain": "中华优秀传统文化",
            "semester": "上",
            "prerequisites": [
              "pol-e-g3-u1"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "小学信息科技",
        "nodes": [
          {
            "id": "it-e-data-collection",
            "name": "数据收集与记录",
            "points": [
              "体验数据收集与记录，感知数据与信息的关系。"
            ],
            "domain": "数据与编码"
          },
          {
            "id": "it-e-algorithm-steps",
            "name": "算法步骤与流程图",
            "points": [
              "用自然语言和流程图描述解决问题的步骤。"
            ],
            "domain": "算法与程序"
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "小学心理健康教育",
        "nodes": [
          {
            "id": "psych-e-g3-social-role",
            "name": "角色意识与时间管理",
            "points": [
              "帮助学生建立正确的角色意识，培养学生对不同社会角色的适应。",
              "增强时间管理意识，帮助学生正确处理学习与兴趣、娱乐之间的矛盾。"
            ],
            "domain": "生活适应",
            "prerequisites": [
              "psych-e-g3-self-know"
            ]
          },
          {
            "id": "psych-e-g3-self-know",
            "name": "认识自我与学习兴趣",
            "points": [
              "帮助学生了解自我，认识自我。",
              "初步培养学生的学习能力，激发学习兴趣和探究精神，树立自信，乐于学习。"
            ],
            "domain": "认识自我",
            "prerequisites": [
              "psych-e-g2-emotion-basics"
            ]
          }
        ]
      }
    ],
    "4": [
      {
        "subject": "chinese",
        "name": "小学语文",
        "nodes": [
          {
            "id": "chn-e-context-word-meaning",
            "name": "联系上下文理解词义",
            "points": [
              "能联系上下文，理解词句的意思，体会课文中关键词句表达情意的作用。",
              "能借助字典、词典和生活积累，理解生词的意义。"
            ],
            "domain": "词语积累",
            "prerequisites": [
              "chn-e-idiom-proverb"
            ],
            "extends": [
              "chn-e-figurative-language"
            ],
            "courses": [
              "chn-e-context-word-meaning"
            ]
          },
          {
            "id": "chn-e-figurative-language",
            "name": "比喻、拟人、夸张等修辞",
            "points": [
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。",
              "能初步把握文章的主要内容，体会文章表达的思想感情。学习圈点、批注等阅读方法。",
              "能复述叙事性作品的大意，初步感受作品中生动的形象和优美的语言，关心作品中人物的命运和喜怒哀乐。"
            ],
            "domain": "词语积累",
            "prerequisites": [
              "chn-e-context-word-meaning"
            ],
            "extends": [
              "chn-e-rhetoric-in-writing"
            ],
            "courses": [
              "chn-e-figurative-language"
            ]
          },
          {
            "id": "chn-e-punctuation-advanced",
            "name": "引号、冒号、省略号、破折号",
            "points": [
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。",
              "根据表达的需要，正确使用冒号、引号等标点符号。"
            ],
            "domain": "句子与标点",
            "prerequisites": [
              "chn-e-punctuation-basic"
            ],
            "extends": [
              "chn-e-complex-sentences"
            ],
            "courses": [
              "chn-e-punctuation-advanced"
            ]
          },
          {
            "id": "chn-e-complex-sentences",
            "name": "关联词与复句（因果/转折/递进/条件）",
            "points": [
              "能联系上下文，理解词句的意思，体会课文中关键词句表达情意的作用。",
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。"
            ],
            "domain": "句子与标点",
            "prerequisites": [
              "chn-e-sentence-expansion",
              "chn-e-punctuation-advanced"
            ],
            "extends": [
              "chn-e-paragraph-structure"
            ],
            "courses": [
              "chn-e-complex-sentences"
            ]
          },
          {
            "id": "chn-e-parts-of-speech",
            "name": "词性与词类",
            "points": [
              "随文学习基本的词汇、语法知识，用以帮助理解课文中的语言难点。",
              "能联系上下文和自己的积累，推想课文中有关词句的意思，辨别词语的感情色彩，体会其表达效果。"
            ],
            "domain": "句子与标点",
            "semester": "四上-六下",
            "prerequisites": [
              "chn-e-word-formation"
            ],
            "courses": [
              "chn-e-parts-of-speech"
            ]
          },
          {
            "id": "chn-e-sentence-transformations-zh",
            "name": "常见句式与句式变换",
            "points": [
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。",
              "在理解课文的过程中体会顿号与逗号、分号与句号的不同用法。",
              "随文学习基本的词汇、语法知识，用以帮助理解课文中的语言难点；了解常用的修辞手法，体会它们在课文中的表达效果。"
            ],
            "domain": "句子与标点",
            "semester": "四上-九下",
            "prerequisites": [
              "chn-e-sentence-transformation"
            ],
            "courses": [
              "chn-e-sentence-transformations-zh"
            ]
          },
          {
            "id": "chn-e-main-idea-summary",
            "name": "概括段落大意与文章主旨",
            "points": [
              "能初步把握文章的主要内容，体会文章表达的思想感情。",
              "能复述叙事性作品的大意，初步感受作品中生动的形象和优美的语言，关心作品中人物的命运和喜怒哀乐。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "chn-e-paragraph-structure"
            ],
            "extends": [
              "chn-e-character-analysis"
            ],
            "courses": [
              "chn-e-main-idea-summary"
            ]
          },
          {
            "id": "chn-e-text-structure",
            "name": "文章结构（总分总/并列/递进）",
            "points": [
              "在阅读中了解文章的表达顺序，体会作者的思想感情，初步领悟文章的基本表达方法。",
              "能初步把握文章的主要内容，体会文章表达的思想感情。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "chn-e-paragraph-structure"
            ],
            "extends": [
              "chn-e-writing-methods"
            ],
            "courses": [
              "chn-e-text-structure"
            ]
          },
          {
            "id": "chn-e-character-analysis",
            "name": "人物描写与性格分析",
            "points": [
              "能初步把握文章的主要内容，体会文章表达的思想感情。学习圈点、批注等阅读方法。",
              "能复述叙事性作品的大意，初步感受作品中生动的形象和优美的语言，关心作品中人物的命运和喜怒哀乐，与他人交流自己的阅读感受。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "chn-e-main-idea-summary"
            ],
            "extends": [
              "chn-e-deep-reading"
            ],
            "courses": [
              "chn-e-character-analysis"
            ]
          },
          {
            "id": "chn-e-article-structure",
            "name": "文章结构分析",
            "points": [
              "能初步把握文章的主要内容，体会文章表达的思想感情。学习圈点、批注等阅读方法。",
              "能复述叙事性作品的大意，初步感受作品中生动的形象和优美的语言，关心作品中人物的命运和喜怒哀乐。"
            ],
            "domain": "阅读理解",
            "semester": "上",
            "prerequisites": [
              "chn-e-text-structure"
            ],
            "courses": [
              "chn-e-article-structure"
            ]
          },
          {
            "id": "chn-e-summarization",
            "name": "概括与归纳",
            "points": [
              "能初步把握文章的主要内容，体会文章表达的思想感情。",
              "乐于探索，勤于思考，初步掌握比较、分析、概括、推理等思维方法。"
            ],
            "domain": "阅读理解",
            "semester": "下",
            "prerequisites": [
              "chn-e-main-idea-summary"
            ],
            "courses": [
              "chn-e-summarization"
            ]
          },
          {
            "id": "chn-e-whole-book-reading",
            "name": "整本书阅读",
            "points": [
              "第二学段（3~4年级）【阅读与鉴赏】5. 阅读整本书，初步理解主要内容，主动和同学分享自己的阅读感受。",
              "第三学段（5~6年级）【阅读与鉴赏】6. 阅读整本书，把握文本的主要内容，积极向同学推荐并说明理由。",
              "第四学段（7~9年级）【阅读与鉴赏】7. 每学年阅读两三部名著，探索个性化的阅读方法，分享阅读感受，开展专题探究，建构阅读整本书的经验。"
            ],
            "domain": "阅读理解",
            "semester": "全学段",
            "prerequisites": [
              "chn-e-non-fiction-reading"
            ],
            "courses": [
              "chn-e-whole-book-reading"
            ]
          },
          {
            "id": "chn-e-detail-description",
            "name": "细节描写与五感法",
            "points": [
              "观察周围世界，能不拘形式地写下自己的见闻、感受和想象，注意把自己觉得新奇有趣或印象最深、最受感动的内容写清楚。",
              "尝试在习作中运用自己平时积累的语言材料，特别是有新鲜感的词句。",
              "积极观察、感知生活，发展联想和想象，激发创造潜能，丰富语言经验，培养语言直觉，提高语言表现力和创造力，提高形象思维能力。"
            ],
            "domain": "写作表达",
            "prerequisites": [
              "chn-e-narrative-writing"
            ],
            "extends": [
              "chn-e-rhetoric-in-writing"
            ],
            "courses": [
              "chn-e-detail-description"
            ]
          },
          {
            "id": "chn-e-rhetoric-in-writing",
            "name": "运用修辞手法写作",
            "points": [
              "观察周围世界，能不拘形式地写下自己的见闻、感受和想象，注意把自己觉得新奇有趣或印象最深、最受感动的内容写清楚。",
              "尝试在习作中运用自己平时积累的语言材料，特别是有新鲜感的词句。"
            ],
            "domain": "写作表达",
            "prerequisites": [
              "chn-e-detail-description",
              "chn-e-figurative-language"
            ],
            "extends": [
              "chn-e-essay-structure"
            ],
            "courses": [
              "chn-e-rhetoric-in-writing"
            ]
          },
          {
            "id": "chn-e-descriptive-writing",
            "name": "描写技巧",
            "points": [
              "观察周围世界，能不拘形式地写下自己的见闻、感受和想象，注意把自己觉得新奇有趣或印象最深、最受感动的内容写清楚。",
              "尝试在习作中运用自己平时积累的语言材料，特别是有新鲜感的词句。"
            ],
            "domain": "写作表达",
            "semester": "下",
            "prerequisites": [
              "chn-e-detail-description"
            ],
            "courses": [
              "chn-e-descriptive-writing"
            ]
          },
          {
            "id": "chn-e-poetry-appreciation",
            "name": "古诗词赏析（意境/情感/手法）",
            "points": [
              "诵读优秀诗文，注意在诵读过程中体验情感，展开想象，领悟诗文大意。",
              "能初步把握文章的主要内容，体会文章表达的思想感情。"
            ],
            "domain": "古诗文",
            "prerequisites": [
              "chn-e-tang-poetry"
            ],
            "extends": [
              "chn-e-classical-chinese-intro"
            ],
            "courses": [
              "chn-e-poetry-appreciation",
              "course-classical-poetry"
            ]
          },
          {
            "id": "chn-e-poetry-imagery",
            "name": "古诗词意象与意境",
            "points": [
              "诵读优秀诗文，注意在诵读过程中体验情感，展开想象，领悟诗文大意。",
              "阅读诗歌，大体把握诗意，想象诗歌描述的情境，体会作品的情感。"
            ],
            "domain": "古诗文",
            "semester": "上",
            "prerequisites": [
              "chn-e-poetry-appreciation"
            ],
            "courses": [
              "chn-e-poetry-imagery"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "小学数学",
        "nodes": [
          {
            "id": "math-e-large-numbers",
            "name": "大数的认识（亿以内）",
            "points": [
              "在具体情境中，认识万以上的数，了解十进制计数法；探索并掌握多位数的乘除法，感悟从未知到已知的转化。",
              "能结合具体实例解释万以上数的含义，能认、读、写万以上的数，会用万、亿为单位表示大数。",
              "数的认识教学应为学生提供合理的情境，引导学生进一步经历整数的抽象过程，知道大数的意义和四位一级的表示方法，建立数感。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-numbers-within-10000"
            ],
            "courses": [
              "math-elem-large-numbers"
            ]
          },
          {
            "id": "math-e-multi-digit-division",
            "name": "多位数除法",
            "points": [
              "探索并掌握多位数的乘除法，感悟从未知到已知的转化。",
              "能计算两位数乘除三位数。",
              "在进行除法计算的过程中，进一步理解除法是乘法的逆运算。"
            ],
            "domain": "数与代数",
            "semester": "三下-四上",
            "prerequisites": [
              "math-e-division-concept",
              "math-e-multi-digit-multiplication"
            ],
            "courses": [
              "math-elem-multi-digit-divide"
            ]
          },
          {
            "id": "math-e-four-operations-laws",
            "name": "四则运算及运算律",
            "points": [
              "能进行较复杂的整数四则运算和简单的小数、分数的加减运算，理解运算律；形成数感、运算能力和初步的推理意识。",
              "探索并理解运算律（加法交换律和结合律、乘法交换律和结合律、乘法对加法的分配律），能用字母表示运算律。",
              "能进行整数四则混合运算（以两步为主，不超过三步），正确运用小括号和中括号。能说出运算律的含义，并能用字母表示；能运用运算律进行简便运算。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-multi-digit-multiplication",
              "math-e-multi-digit-division"
            ],
            "courses": [
              "math-elem-four-operations-laws"
            ]
          },
          {
            "id": "math-e-operations-laws",
            "name": "运算律与简便运算",
            "points": [
              "探索并理解运算律（加法交换律和结合律、乘法交换律和结合律、乘法对加法的分配律），能用字母表示运算律。",
              "能说出运算律的含义，并能用字母表示；能运用运算律进行简便运算，解决相关的简单实际问题，形成运算能力。",
              "通过实际问题和具体计算，引导学生用归纳的方法探索运算律、用字母表示运算律，感知运算律是确定算理和算法的重要依据，形成初步的代数思维。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-four-operations-laws"
            ],
            "courses": [
              "math-e-operations-laws"
            ]
          },
          {
            "id": "math-e-decimals-meaning",
            "name": "小数的意义和性质",
            "points": [
              "结合具体情境，初步认识小数和分数，感悟分数单位；会进行同分母分数的加减法和一位小数的加减法。",
              "能直观描述小数和分数，能比较简单的小数的大小和分数的大小；会进行同分母分数的加减运算和一位小数的加减运算。",
              "数的认识教学应为学生提供合理的情境，引导学生进一步经历整数的抽象过程...借助学生的生活经验，引导学生认识小数单位，进一步感悟十进制计数法。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-decimals-intro"
            ],
            "courses": [
              "math-elem-decimals-meaning"
            ]
          },
          {
            "id": "math-e-triangle-properties",
            "name": "三角形的特性",
            "points": [
              "认识三角形和四边形，会根据图形特征对三角形和四边形进行分类。",
              "会根据角的特征对三角形分类，认识直角三角形、锐角三角形和钝角三角形；能根据边的相等关系，认识等腰三角形和等边三角形。"
            ],
            "domain": "图形与几何",
            "semester": "下",
            "prerequisites": [
              "math-e-plane-shapes",
              "math-e-angle-concept"
            ],
            "courses": [
              "math-e-triangle-properties"
            ]
          },
          {
            "id": "math-e-triangles-quadrilaterals",
            "name": "三角形与四边形分类",
            "points": [
              "认识三角形和四边形，会根据图形特征对三角形和四边形进行分类。",
              "会根据角的特征对三角形分类，认识直角三角形、锐角三角形和钝角三角形；能根据边的相等关系，认识等腰三角形和等边三角形。",
              "能说出长方形、正方形、平行四边形、梯形的特征；能说出图形之间的共性与区别。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-triangle-properties"
            ],
            "courses": [
              "math-elem-triangles-quadrilaterals"
            ]
          },
          {
            "id": "math-e-measurement-sense",
            "name": "量感培养（跨学段）",
            "points": [
              "体验物体长度的测量过程，认识常见的长度单位，形成初步的量感。",
              "经历平面图形的周长和面积的测量过程，探索长方形周长和面积的计算方法，形成量感。",
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，形成量感。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-length-units"
            ],
            "courses": [
              "math-e-measurement-sense"
            ]
          },
          {
            "id": "math-e-area-calculation",
            "name": "多种平面图形面积",
            "points": [
              "结合实例认识周长和面积；探索并掌握长方形、正方形的周长和面积的计算公式。",
              "会测量三角形、长方形和正方形的周长；会计算长方形、正方形的周长和面积。",
              "在解决图形周长、面积的实际问题过程中，逐步积累操作的经验，形成量感和初步的几何直观。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-area-rectangle"
            ],
            "courses": [
              "math-elem-area-calculation"
            ]
          },
          {
            "id": "math-e-line-graph",
            "name": "条形统计图与折线统计图",
            "points": [
              "经历收集、整理和表达数据的过程，会用条形统计图、折线统计图表达数据，并作出简单的判断。",
              "会用条形统计图、折线统计图表达数据，并作出简单的判断。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-e-pictograph",
              "math-e-multi-digit-multiplication"
            ],
            "courses": [
              "math-elem-line-graph"
            ]
          },
          {
            "id": "math-e-average-concept",
            "name": "平均数概念",
            "points": [
              "经历简单的数据收集过程，了解数据收集、整理和呈现的简单方法；理解平均数的意义，会用平均数解决问题；形成初步的数据意识。",
              "理解平均数的意义，会用平均数解决问题；形成初步的数据意识。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-e-four-operations-laws"
            ],
            "courses": [
              "math-e-average-concept"
            ]
          },
          {
            "id": "math-e-possibility-concept",
            "name": "随机现象初步（可能性）",
            "points": [
              "理解百分数的意义，了解随机现象发生的可能性；形成数据意识和初步的应用意识。",
              "经历收集、整理和表达数据的过程，会用条形统计图、折线统计图表达数据，并作出简单的判断；理解百分数的意义，了解随机现象发生的可能性。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-e-fractions-intro"
            ],
            "courses": [
              "math-e-possibility-concept"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "小学英语",
        "nodes": [
          {
            "id": "eng-e-phonics-vowels",
            "name": "元音字母组合拼读",
            "points": [
              "通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "在开展拼读教学时，要为学生提供有意义的学习素材，如语言简单、图文并茂、情节生动有趣、渗透拼读规则并配有录音的阅读材料。",
              "学生在阅读、理解语篇内容的基础上，通过反复倾听、认真观察，发现单词的拼读规则，继而进行巩固与内化。"
            ],
            "domain": "语音与自然拼读",
            "prerequisites": [
              "eng-e-vowel-sounds"
            ],
            "courses": [
              "eng-e-phonics-vowels"
            ]
          },
          {
            "id": "eng-e-phonics-rules",
            "name": "自然拼读基本规律",
            "points": [
              "基于有意义的学习素材，通过感知、体验、运用、实践等循序渐进的方式，发展学生的拼读能力和语音意识。",
              "在开展拼读教学时，要为学生提供有意义的学习素材，如语言简单、图文并茂、情节生动有趣、渗透拼读规则并配有录音的阅读材料。",
              "要给学生充分的观察、发现和总结拼读规则的时间，不宜用机械跟读和记忆代替学生的思考和实践。"
            ],
            "domain": "语音与自然拼读",
            "prerequisites": [
              "eng-e-phonics-consonants",
              "eng-e-phonics-vowels"
            ],
            "courses": [
              "eng-e-phonics-rules"
            ]
          },
          {
            "id": "eng-e-phonics-blends",
            "name": "辅元混合拼读",
            "points": [
              "通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "在开展拼读教学时，要为学生提供有意义的学习素材，如语言简单、图文并茂、情节生动有趣、渗透拼读规则并配有录音的阅读材料。",
              "通过丰富的语言实践活动，如听录音模仿，朗读语篇，为故事配音，演唱歌曲、韵文等，引导学生感知、体会英语的重音、意群、语调与节奏等。"
            ],
            "domain": "语音与自然拼读",
            "prerequisites": [
              "eng-e-phonics-rules"
            ],
            "courses": [
              "eng-e-phonics-blends"
            ]
          },
          {
            "id": "eng-e-vocab-daily-life",
            "name": "日常生活词汇",
            "points": [
              "针对词汇教学，采用“音”“形”“义”和“用”相结合的方法，在语境中引导学生感知单词的发音；借助图片、实物等教具，以及表情、手势和动作等帮助学生认读并理解词汇含义。",
              "在语境中反复再现词汇，帮助学生有意识地使用词汇表达意义，避免脱离语境的机械记忆与操练。",
              "能借助图片、实物等教具，以及表情、手势和动作等帮助学生认读并理解词汇含义。"
            ],
            "domain": "词汇",
            "prerequisites": [
              "eng-e-vocab-family-school"
            ],
            "courses": [
              "eng-e-vocab-daily-life"
            ]
          },
          {
            "id": "eng-e-prepositions",
            "name": "方位介词",
            "points": [
              "针对语法教学，应遵循形式、意义和使用统一的原则，让学生感知和体验形式与意义的联系，在语境中运用所学语法进行交流和表达。",
              "创设丰富的语境，在理解和表达活动中帮助学生习得词汇和语法知识。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-e-nouns-articles"
            ],
            "courses": [
              "eng-e-prepositions"
            ]
          },
          {
            "id": "eng-e-there-be",
            "name": "There be 句型",
            "points": [
              "针对语法教学，应遵循形式、意义和使用统一的原则，让学生感知和体验形式与意义的联系，在语境中运用所学语法进行交流和表达。",
              "在书面表达中，能根据图片或语境，仿写简单的句子。",
              "能围绕相关主题，运用所学语言，进行简单的交流，介绍自己和身边熟悉的人或事物，表达情感和喜好等，语言达意。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-e-pronouns-be-verbs",
              "eng-e-prepositions"
            ],
            "courses": [
              "eng-there-be"
            ]
          },
          {
            "id": "eng-e-present-simple",
            "name": "一般现在时",
            "points": [
              "针对语法教学，应遵循形式、意义和使用统一的原则，让学生感知和体验形式与意义的联系，在语境中运用所学语法进行交流和表达。",
              "在理解和表达活动中帮助学生习得词汇和语法知识。让学生感知和体验形式与意义的联系，在语境中运用所学语法进行交流和表达。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-e-pronouns-be-verbs"
            ],
            "courses": [
              "eng-e-present-simple"
            ]
          },
          {
            "id": "eng-e-daily-topics-basic",
            "name": "日常话题简单对话",
            "points": [
              "针对词汇教学，采用‘音’‘形’‘义’和‘用’相结合的方法，在语境中引导学生感知单词的发音；借助图片、实物等教具，以及表情、手势和动作等帮助学生认读并理解词汇含义。",
              "在语境中反复再现词汇，帮助学生有意识地使用词汇表达意义，避免脱离语境的机械记忆与操练。",
              "能借助图片、实物等教具，以及表情、手势和动作等帮助学生认读并理解词汇含义。"
            ],
            "domain": "语篇与阅读",
            "prerequisites": [
              "eng-e-greetings-intro"
            ],
            "courses": [
              "eng-e-daily-topics-basic"
            ]
          },
          {
            "id": "eng-e-asking-directions",
            "name": "问路与指路",
            "points": [
              "能听懂日常学习和生活中简单的指令、对话、独白和小故事等；能理解日常生活中用所学语言直接传递的交际意图。",
              "能围绕相关主题，运用所学语言，进行简单的交流，介绍自己和身边熟悉的人或事物，表达情感和喜好等，语言达意。",
              "创设丰富的语境，在理解和表达活动中帮助学生习得词汇和语法知识。在语境中运用所学语法进行交流和表达。"
            ],
            "domain": "语篇与阅读",
            "prerequisites": [
              "eng-e-prepositions",
              "eng-e-daily-topics-basic"
            ],
            "courses": [
              "eng-e-asking-directions"
            ]
          },
          {
            "id": "eng-e-short-passage",
            "name": "简单语篇阅读",
            "points": [
              "能借助图片读懂语言简单的小故事，理解基本信息。",
              "能读懂语言简单、主题相关的简短语篇，获取具体信息，理解主要内容。",
              "围绕语篇主题意义设计逻辑关联的语言实践活动，帮助学生建构基于主题的结构化知识。"
            ],
            "domain": "语篇与阅读",
            "prerequisites": [
              "eng-e-vocab-daily-life",
              "eng-e-present-simple"
            ],
            "courses": [
              "eng-e-short-passage"
            ]
          },
          {
            "id": "eng-e-listening-speaking",
            "name": "听说训练综合",
            "points": [
              "设计多途径的听说活动，借助图片、视频、简笔画、手势等帮助学生理解所听、所看语言材料，引导学生在感知、理解、模仿和运用中习得语言，学会表达。",
              "通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "在交流中引导学生注意倾听、敢于开口、不怕出错、大胆表达自己的观点或转述他人的观点等。"
            ],
            "domain": "听说",
            "prerequisites": [
              "eng-e-greetings-intro"
            ],
            "courses": [
              "eng-e-listening-speaking"
            ]
          }
        ]
      },
      {
        "subject": "science",
        "name": "小学科学",
        "nodes": [
          {
            "id": "sci-e-dissolving",
            "name": "溶解现象",
            "points": [
              "知道有些物质能溶解在水中，如食盐和白糖等，有些物 质很难溶解在水中，如沙和食用油等。 知道固体有确定的形状、体积和质量;液体有确定的体 积和质量，液体静止时其表面一般会保持水平; 气体有确 定的质量，…"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-solid-liquid-gas"
            ],
            "courses": [
              "sci-e-dissolving"
            ]
          },
          {
            "id": "sci-e-motion-speed",
            "name": "运动与速度",
            "points": [
              "认识物体有多种运动形式，力可以改变物体的运动状态，运动的物体具有能量，了解日常生活中能存在的不同形式。",
              "认识常见的几种运动形式，能解决匀速运动的基本问题；运用简单模型描述和解释物体间的相互作用。"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-push-pull-force"
            ],
            "courses": [
              "sci-e-motion-speed",
              "sci-motion-speed"
            ]
          },
          {
            "id": "sci-e-sound",
            "name": "声音的产生与传播",
            "points": [
              "认识物体有多种运动形式，力可以改变物体的运动状态，运动的物体具有能量，了解日常生活中能存在的不同形式。",
              "能运用感官和选择恰当的工具、仪器，观察并描述对象的外部形态特征及现象，用较准确的科学词汇、统计图表等记录和整理信息。",
              "倡导以探究和实践为主的多样化学习方式，让学生主动参与、动手动脑、积极体验，经历科学探究以及技术与工程实践的过程。"
            ],
            "domain": "物质科学",
            "semester": "上",
            "prerequisites": [
              "sci-e-light"
            ],
            "courses": [
              "sci-e-sound"
            ]
          },
          {
            "id": "sci-e-electricity-basic",
            "name": "简单电路",
            "points": [
              "能搭建简单闭合电路",
              "认识电池、开关、导线、灯泡的作用",
              "了解串联与并联初步区别"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-magnetism"
            ],
            "courses": [
              "sci-e-electricity-basic",
              "sci-e-simple-circuit"
            ]
          },
          {
            "id": "sci-e-conductors-insulators",
            "name": "导体与绝缘体",
            "points": [
              "认识常见物体的基本外部特征，认识生活中常见的材料；知道生活中常见的力，认识力可以改变物体的形状。",
              "认识常见物体的某些特征和常见材料的某些性能；认识物体有多种运动形式，力可以改变物体的运动状态，运动的物体具有能量，了解日常生活中能存在的不同形式。"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-electricity-basic"
            ],
            "courses": [
              "sci-e-conductors-insulators"
            ]
          },
          {
            "id": "sci-e-classification",
            "name": "生物的分类",
            "points": [
              "能区分植物和动物的主要特征，并能对植物和动物进行简单分类；",
              "根据事物的外在特征，对常见事物进行分类；",
              "比较事物的某些本质特征，根据不同的目的进行分类，基于事物之间的功能相似性进行推理；"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-plant-parts",
              "sci-e-animal-features"
            ],
            "courses": [
              "sci-e-classification"
            ]
          },
          {
            "id": "sci-e-human-body-systems",
            "name": "人体主要器官系统",
            "points": [
              "认识常见物体的基本外部特征，认识生活中常见的材料；知道生活中常见的力，认识力可以改变物体的形状。",
              "能区分植物和动物的主要特征，并能对植物和动物进行简单分类；认识植物的某些结构、动物的某些结构与行为具有维持自身生存的功能。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-animal-features"
            ],
            "courses": [
              "sci-e-human-body-systems"
            ]
          },
          {
            "id": "sci-e-rocks-soil",
            "name": "岩石与土壤",
            "points": [
              "知道岩石、土壤都是地球系统的基本要素；知道人类生活离不开自然资源，能认识到节约自然资源和保护环境的重要性。",
              "能运用感官和选择恰当的工具、仪器，观察并描述对象的外部形态特征及现象，用较准确的科学词汇、统计图表等记录和整理信息。",
              "倡导以探究和实践为主的多样化学习方式，让学生主动参与、动手动脑、积极体验，经历科学探究以及技术与工程实践的过程。"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-object-properties"
            ],
            "courses": [
              "sci-e-rocks-soil"
            ]
          },
          {
            "id": "sci-e-moon-phases",
            "name": "月相变化",
            "points": [
              "能描述太阳升落、季节变化和月亮形状变化等自然现象，说出天气变化及其对人类生活的影响。",
              "知道太阳、地球和月球的周期性运动以及相关的自然现象，能认识到太空探索拓宽了人类的视野。"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-day-night"
            ],
            "courses": [
              "sci-e-moon-phases"
            ]
          },
          {
            "id": "sci-e-bridge-structure",
            "name": "结构与稳定性（搭建桥梁）",
            "points": [
              "知道常见简单科技产品的结构决定了其功能，知道简单的制作问题需要定义和界定。",
              "能利用材料和工具，通过口述、绘画、画图等方式表达自己的想法。",
              "知道简单工具的功能和使用方法，能利用身边的材料和简单工具动手完成简单的任务，能发现作品中存在的问题并尝试提出解决方案。"
            ],
            "domain": "技术与工程",
            "prerequisites": [
              "sci-e-design-process"
            ],
            "courses": [
              "sci-e-bridge-structure"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "小学道德与法治",
        "nodes": [
          {
            "id": "pol-e-g4-u1",
            "name": "与班级共成长",
            "points": [
              "【课标】诚实守信，友善待人，尊重他人，有集体意识和责任感。",
              "【教材·与班级共成长】我们班四岁了；我们的班规我们订；我们班 他们班"
            ],
            "domain": "道德修养",
            "semester": "上",
            "prerequisites": [
              "pol-e-g3-u4"
            ]
          },
          {
            "id": "pol-e-g4-u3",
            "name": "信息万花筒",
            "points": [
              "【课标】感受中华优秀传统文化魅力，增强文化自信。",
              "【教材·信息万花筒】健康看电视；网络新世界；正确认识广告"
            ],
            "domain": "生命安全与健康",
            "semester": "上",
            "prerequisites": [
              "pol-e-g4-u2"
            ]
          },
          {
            "id": "pol-e-g4-u4",
            "name": "让生活多一些绿色",
            "points": [
              "【课标】遵守公共秩序，爱护公共设施，参与力所能及的公益活动。",
              "【教材·让生活多一些绿色】我们所了解的环境污染；变废为宝有妙招；低碳生活每一天"
            ],
            "domain": "法治启蒙",
            "semester": "上",
            "prerequisites": [
              "pol-e-g4-u3"
            ]
          },
          {
            "id": "pol-e-g4-u2",
            "name": "为父母分担",
            "points": [
              "【课标】掌握基本安全知识和技能，学会应对常见安全问题。",
              "【教材·为父母分担】少让父母为我操心；这些事我来做；我的家庭贡献与责任"
            ],
            "domain": "中华优秀传统文化",
            "semester": "上",
            "prerequisites": [
              "pol-e-g4-u1"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "小学信息科技",
        "nodes": [
          {
            "id": "it-e-encoding-basics",
            "name": "编码初识（二进制/字符）",
            "points": [
              "知道数据编码的基本方式，理解编码在信息传递中的作用。"
            ],
            "domain": "数据与编码",
            "prerequisites": [
              "it-e-data-collection"
            ]
          },
          {
            "id": "it-e-data-visualization",
            "name": "数据可视化表达",
            "points": [
              "用图表等方式呈现数据，辅助说明问题。"
            ],
            "domain": "数据与编码",
            "prerequisites": [
              "it-e-data-collection"
            ]
          },
          {
            "id": "it-e-block-programming",
            "name": "积木式程序设计",
            "points": [
              "使用图形化编程工具实现简单算法。"
            ],
            "domain": "算法与程序",
            "prerequisites": [
              "it-e-algorithm-steps"
            ]
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "小学心理健康教育",
        "nodes": [
          {
            "id": "psych-e-g4-study-motivation",
            "name": "学习自信与情绪表达",
            "points": [
              "初步培养学生的学习能力，激发学习兴趣和探究精神，树立自信，乐于学习。",
              "学会体验情绪并表达自己的情绪。"
            ],
            "domain": "学习辅导",
            "prerequisites": [
              "psych-e-g4-peer-relation"
            ]
          },
          {
            "id": "psych-e-g4-peer-relation",
            "name": "同伴交往与解决困难",
            "points": [
              "树立集体意识，善于与同学、老师交往，培养开朗、合群、自立的健康人格。",
              "引导学生在学习生活中感受解决困难的快乐，学会体验情绪并表达自己的情绪。"
            ],
            "domain": "人际交往",
            "prerequisites": [
              "psych-e-g3-social-role"
            ]
          }
        ]
      }
    ],
    "5": [
      {
        "subject": "chinese",
        "name": "小学语文",
        "nodes": [
          {
            "id": "chn-e-pathological-sentence",
            "name": "修改病句",
            "points": [
              "修改自己的习作，并主动与他人交换修改，做到语句通顺，行款正确，书写规范、整洁。",
              "学习修改习作中有了明显错误的词句。"
            ],
            "domain": "句子与标点",
            "prerequisites": [
              "chn-e-complex-sentences"
            ],
            "courses": [
              "chn-e-pathological-sentence"
            ]
          },
          {
            "id": "chn-e-parts-of-speech",
            "name": "词性与词类",
            "points": [
              "随文学习基本的词汇、语法知识，用以帮助理解课文中的语言难点。",
              "能联系上下文和自己的积累，推想课文中有关词句的意思，辨别词语的感情色彩，体会其表达效果。"
            ],
            "domain": "句子与标点",
            "semester": "四上-六下",
            "prerequisites": [
              "chn-e-word-formation"
            ],
            "courses": [
              "chn-e-parts-of-speech"
            ]
          },
          {
            "id": "chn-e-sentence-transformations-zh",
            "name": "常见句式与句式变换",
            "points": [
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。",
              "在理解课文的过程中体会顿号与逗号、分号与句号的不同用法。",
              "随文学习基本的词汇、语法知识，用以帮助理解课文中的语言难点；了解常用的修辞手法，体会它们在课文中的表达效果。"
            ],
            "domain": "句子与标点",
            "semester": "四上-九下",
            "prerequisites": [
              "chn-e-sentence-transformation"
            ],
            "courses": [
              "chn-e-sentence-transformations-zh"
            ]
          },
          {
            "id": "chn-e-writing-methods",
            "name": "表达方法（叙述/描写/说明/议论/抒情）",
            "points": [
              "在阅读中了解文章的表达顺序，体会作者的思想感情，初步领悟文章的基本表达方法。",
              "在阅读中了解叙述、描写、说明、议论、抒情等表达方式。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "chn-e-text-structure"
            ],
            "extends": [
              "chn-e-deep-reading"
            ],
            "courses": [
              "chn-e-writing-methods"
            ]
          },
          {
            "id": "chn-e-deep-reading",
            "name": "体会含义深刻的句子",
            "points": [
              "能联系上下文和自己的积累，推想课文中有关词句的意思，辨别词语的感情色彩，体会其表达效果。",
              "在阅读中了解文章的表达顺序，体会作者的思想感情，初步领悟文章的基本表达方法。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "chn-e-writing-methods",
              "chn-e-character-analysis"
            ],
            "extends": [
              "chn-e-non-fiction-reading"
            ],
            "courses": [
              "chn-e-deep-reading"
            ]
          },
          {
            "id": "chn-e-article-appreciation",
            "name": "文学鉴赏",
            "points": [
              "阅读叙事性作品，了解事件梗概，能简单描述印象最深的场景、人物、细节，说出自己的喜爱、憎恶、崇敬、向往、同情等感受。",
              "阅读诗歌，大体把握诗意，想象诗歌描述的情境，体会作品的情感。受到优秀作品的感染和激励，向往和追求美好的理想。",
              "在阅读中了解文章的表达顺序，体会作者的思想感情，初步领悟文章的基本表达方法。在交流和讨论中，敢于提出看法，作出自己的判断。"
            ],
            "domain": "阅读理解",
            "semester": "上",
            "prerequisites": [
              "chn-e-deep-reading"
            ],
            "courses": [
              "chn-e-article-appreciation"
            ]
          },
          {
            "id": "chn-e-whole-book-reading",
            "name": "整本书阅读",
            "points": [
              "第二学段（3~4年级）【阅读与鉴赏】5. 阅读整本书，初步理解主要内容，主动和同学分享自己的阅读感受。",
              "第三学段（5~6年级）【阅读与鉴赏】6. 阅读整本书，把握文本的主要内容，积极向同学推荐并说明理由。",
              "第四学段（7~9年级）【阅读与鉴赏】7. 每学年阅读两三部名著，探索个性化的阅读方法，分享阅读感受，开展专题探究，建构阅读整本书的经验。"
            ],
            "domain": "阅读理解",
            "semester": "全学段",
            "prerequisites": [
              "chn-e-non-fiction-reading"
            ],
            "courses": [
              "chn-e-whole-book-reading"
            ]
          },
          {
            "id": "chn-e-essay-structure",
            "name": "作文审题、立意与提纲",
            "points": [
              "懂得写作是为了自我表达和与人交流。养成留心观察周围事物的习惯，有意识地丰富自己的见闻，珍视个人的独特感受，积累习作素材。",
              "能写简单的记实作文和想象作文，内容具体，感情真实。能根据内容表达的需要，分段表述。",
              "修改自己的习作，并主动与他人交换修改，做到语句通顺，行款正确，书写规范、整洁。根据表达需要，正确使用常用的标点符号。"
            ],
            "domain": "写作表达",
            "prerequisites": [
              "chn-e-text-structure",
              "chn-e-rhetoric-in-writing"
            ],
            "extends": [
              "chn-e-argumentative-intro"
            ],
            "courses": [
              "chn-e-essay-structure"
            ]
          },
          {
            "id": "chn-e-application-writing",
            "name": "应用文（书信/通知/倡议书）",
            "points": [
              "能写简单的记实作文和想象作文，内容具体，感情真实。能根据内容表达的需要，分段表述。学写读书笔记，学写常见应用文。",
              "懂得写作是为了自我表达和与人交流。养成留心观察周围事物的习惯，有意识地丰富自己的见闻，珍视个人的独特感受，积累习作素材。"
            ],
            "domain": "写作表达",
            "prerequisites": [
              "chn-e-narrative-writing"
            ],
            "courses": [
              "chn-e-application-writing"
            ]
          },
          {
            "id": "chn-e-debate-discussion",
            "name": "讨论、辩论与即兴演讲",
            "points": [
              "参与讨论，敢于发表自己的意见，说清自己的观点。能根据对象和场合，稍作准备，作简单的发言。",
              "对自己身边的、大家共同关注的问题，或影视作品中的故事和形象，通过调查访问、讨论演讲等方式，开展专题探究活动。"
            ],
            "domain": "口语交际",
            "prerequisites": [
              "chn-e-oral-presentation",
              "chn-e-complex-sentences"
            ],
            "courses": [
              "chn-e-debate-discussion"
            ]
          },
          {
            "id": "chn-e-classical-chinese-intro",
            "name": "小古文入门（之/乎/者/也）",
            "points": [
              "诵读古代诗词，阅读浅易文言文，能借助注释和工具书理解基本内容。",
              "在阅读中了解文章的表达顺序，体会作者的思想感情，初步领悟文章的基本表达方法。"
            ],
            "domain": "古诗文",
            "prerequisites": [
              "chn-e-poetry-appreciation"
            ],
            "extends": [
              "chn-e-classical-reading"
            ],
            "courses": [
              "chn-classical-chinese-intro"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "小学数学",
        "nodes": [
          {
            "id": "math-e-fractions-meaning",
            "name": "分数的意义和性质",
            "points": [
              "结合具体情境探索并理解小数和分数的意义，感悟计数单位；会进行小数、分数的转化，进一步发展数感和符号意识。",
              "能用直观的方式表示分数和小数，能比较两个分数的大小和两个小数的大小；会进行小数和分数的转化。",
              "在初步认识小数和分数的基础上，引导学生在具体情境中，理解小数和分数的意义，感悟计数单位。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-fractions-intro"
            ],
            "courses": [
              "math-elem-fractions-meaning"
            ]
          },
          {
            "id": "math-e-decimal-operations",
            "name": "小数四则运算",
            "points": [
              "能进行简单的小数、分数四则运算和混合运算，感悟运算的一致性，发展运算能力和推理意识。",
              "能进行简单小数和分数的四则运算和混合运算（不超过三步），并说明运算过程。",
              "数的运算教学应注重对整数、小数和分数四则运算的统筹，让学生进一步感悟运算的一致性。"
            ],
            "domain": "数与代数",
            "semester": "四下-五上",
            "prerequisites": [
              "math-e-decimals-meaning",
              "math-e-four-operations-laws"
            ],
            "courses": [
              "math-elem-decimal-operations"
            ]
          },
          {
            "id": "math-e-fraction-operations",
            "name": "分数四则运算",
            "points": [
              "能进行简单的小数、分数四则运算和混合运算，感悟运算的一致性，发展运算能力和推理意识。",
              "能进行简单小数和分数的四则运算和混合运算（不超过三步），并说明运算过程。",
              "数的运算教学应注重对整数、小数和分数四则运算的统筹，让学生进一步感悟运算的一致性。"
            ],
            "domain": "数与代数",
            "semester": "五下-六上",
            "prerequisites": [
              "math-e-fractions-meaning",
              "math-e-four-operations-laws"
            ],
            "courses": [
              "math-elem-fraction-operations"
            ]
          },
          {
            "id": "math-e-letter-representation",
            "name": "用字母表示数",
            "points": [
              "经历用字母表示数的过程，认识自然数的一些特征，理解小数和分数的意义；能进行小数和分数的四则和运算，探索数运算的一致性；形成符号意识、运算能力、推理意识。",
              "在具体情境中，探索用字母表示事物的关系、性质和规律的方法，感悟用字母表示的一般性。",
              "能在具体情境中，用字母或含有字母的式子表示数量之间的关系、性质和规律，感悟用字母表示具有一般性。"
            ],
            "domain": "数与代数",
            "semester": "四下-五上",
            "prerequisites": [
              "math-e-four-operations-laws"
            ],
            "courses": [
              "math-elem-equation-intro"
            ]
          },
          {
            "id": "math-e-simple-equation",
            "name": "简易方程",
            "points": [
              "在具体情境中，探索用字母表示事物的关系、性质和规律的方法，感悟用字母表示的一般性。",
              "能在具体情境中，用字母或含有字母的式子表示数量之间的关系、性质和规律，感悟用字母表示具有一般性。",
              "用字母表示的教学要设计合理的实际情境，引导学生会用字母或含有字母的式子表达实际情境中的数量关系、性质和规律。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-letter-representation"
            ],
            "courses": [
              "math-elem-simple-equation"
            ]
          },
          {
            "id": "math-e-volume-units",
            "name": "体积与容积单位",
            "points": [
              "探索几何图形面积和体积的计算方法，会计算常见立体图形的体积和表面积；形成量感、空间观念和几何直观。",
              "图形的测量重点是确定图形的大小。学生经历统一度量单位的过程，感受统一度量单位的意义，基于度量单位理解图形长度、角度、周长、面积、体积。",
              "在图形认识与测量的过程中，增强空间观念和量感。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-area-units"
            ],
            "courses": [
              "math-elem-volume-units"
            ]
          },
          {
            "id": "math-e-measurement-sense",
            "name": "量感培养（跨学段）",
            "points": [
              "体验物体长度的测量过程，认识常见的长度单位，形成初步的量感。",
              "经历平面图形的周长和面积的测量过程，探索长方形周长和面积的计算方法，形成量感。",
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，形成量感。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-length-units"
            ],
            "courses": [
              "math-e-measurement-sense"
            ]
          },
          {
            "id": "math-e-volume-calculation",
            "name": "体积计算",
            "points": [
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，会计算常见立体图形的体积和表面积。",
              "图形的认识与测量包括立体图形和平面图形的认识，线段长度的测量，以及图形的周长、面积和体积的计算。",
              "在推导一些常见图形周长、面积、体积计算方法的过程中，感悟数学度量方法，逐步形成量感和推理意识。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-volume-units",
              "math-e-solid-shapes"
            ],
            "courses": [
              "math-elem-volume-calculation"
            ]
          },
          {
            "id": "math-e-solid-surface-area",
            "name": "长方体和正方体的表面积",
            "points": [
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，会计算常见立体图形的体积和表面积。",
              "图形的认识与测量包括立体图形和平面图形的认识，线段长度的测量，以及图形的周长、面积和体积的计算。",
              "在推导一些常见图形周长、面积、体积计算方法的过程中，感悟数学度量方法，逐步形成量感和推理意识。"
            ],
            "domain": "图形与几何",
            "semester": "下",
            "prerequisites": [
              "math-e-volume-calculation",
              "math-e-area-calculation"
            ],
            "courses": [
              "math-e-solid-surface-area"
            ]
          },
          {
            "id": "math-e-average-median",
            "name": "平均数与中位数",
            "points": [
              "经历简单的数据收集过程，了解数据收集、整理和呈现的简单方法；理解平均数的意义，会用平均数解决问题；形成初步的数据意识。",
              "理解平均数的意义，会用平均数解决问题；形成初步的数据意识。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-e-average-concept"
            ],
            "courses": [
              "math-elem-average-median"
            ]
          },
          {
            "id": "math-e-median-mode",
            "name": "中位数与众数",
            "points": [
              "(4) 理解平均数、中位数、众数的意义，能计算中位数、众数、 加权平均数，知道它们是对数据集中趋势的描述 〈例 84) 。"
            ],
            "domain": "统计与概率",
            "semester": "五下/六上",
            "prerequisites": [
              "math-e-average-median"
            ],
            "courses": [
              "math-e-median-mode"
            ]
          },
          {
            "id": "math-e-possibility",
            "name": "用分数表示可能性大小",
            "points": [
              "理解百分数的意义，了解随机现象发生的可能性；形成数据意识和初步的应用意识。",
              "经历收集、整理和表达数据的过程，会用条形统计图、折线统计图表达数据，并作出简单的判断；理解百分数的意义，了解随机现象发生的可能性。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-e-possibility-concept",
              "math-e-fractions-meaning"
            ],
            "courses": [
              "math-elem-possibility"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "小学英语",
        "nodes": [
          {
            "id": "eng-e-word-reading",
            "name": "单词见字读音",
            "points": [
              "通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "针对词汇教学，采用“音”“形”“义”和“用”相结合的方法，在语境中引导学生感知单词的发音。",
              "在开展拼读教学时，要为学生提供有意义的学习素材...学生在阅读、理解语篇内容的基础上，通过反复倾听、认真观察，发现单词的拼读规则。"
            ],
            "domain": "语音与自然拼读",
            "prerequisites": [
              "eng-e-phonics-blends"
            ],
            "courses": [
              "eng-e-word-reading"
            ]
          },
          {
            "id": "eng-e-vocab-nature-society",
            "name": "自然与社会词汇",
            "points": [
              "针对词汇教学，采用“音”“形”“义”和“用”相结合的方法，在语境中引导学生感知单词的发音；借助图片、实物等教具，以及表情、手势和动作等帮助学生认读并理解词汇含义。",
              "在语境中反复再现词汇，帮助学生有意识地使用词汇表达意义，避免脱离语境的机械记忆与操练。",
              "围绕语篇主题意义设计逻辑关联的语言实践活动，帮助学生建构基于主题的结构化知识。"
            ],
            "domain": "词汇",
            "prerequisites": [
              "eng-e-vocab-daily-life"
            ],
            "courses": [
              "eng-e-vocab-nature-society"
            ]
          },
          {
            "id": "eng-e-present-continuous",
            "name": "现在进行时",
            "points": [
              "针对语法教学，应遵循形式、意义和使用统一的原则，让学生感知和体验形式与意义的联系，在语境中运用所学语法进行交流和表达。",
              "在书面表达中，能选用不同句式结构和时态，描述和介绍身边的人、事物或事件，表达情感、态度、观点和意图等。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-e-present-simple"
            ],
            "courses": [
              "eng-e-present-continuous"
            ]
          },
          {
            "id": "eng-e-past-simple",
            "name": "一般过去时",
            "points": [
              "针对语法教学，应遵循形式、意义和使用统一的原则，让学生感知和体验形式与意义的联系，在语境中运用所学语法进行交流和表达。",
              "能理解基本句式和常用时态表达的意义；能在书面表达中，选用不同句式结构和时态，描述和介绍身边的人、事物或事件。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-e-present-simple"
            ],
            "courses": [
              "eng-e-past-simple"
            ]
          },
          {
            "id": "eng-e-topic-conversation",
            "name": "话题式对话",
            "points": [
              "能围绕相关主题，运用所学语言，进行简单的交流，介绍自己和身边熟悉的人或事物，表达情感和喜好等，语言达意。",
              "引导学生做到“想表达”“能表达”和“会表达”，体验英语学习的乐趣与意义，获得成就感和自信心。",
              "设计不同难易程度的学习任务，布置体现差异化的作业，组织开展生动多样的活动，如对话交流、短剧展示等。"
            ],
            "domain": "语篇与阅读",
            "prerequisites": [
              "eng-e-asking-directions"
            ],
            "courses": [
              "eng-e-topic-conversation"
            ]
          },
          {
            "id": "eng-e-passage-questions",
            "name": "语篇理解答题",
            "points": [
              "能读懂语言简单、主题相关的简短语篇，获取具体信息，理解主要内容。",
              "能根据图片或关键词，归纳语篇的重要信息；能就语篇信息或观点初步形成自己的想法和意见。",
              "围绕语篇主题意义设计逻辑关联的语言实践活动，帮助学生建构基于主题的结构化知识。"
            ],
            "domain": "语篇与阅读",
            "prerequisites": [
              "eng-e-short-passage"
            ],
            "courses": [
              "eng-e-passage-questions"
            ]
          },
          {
            "id": "eng-e-reading-skills-primary",
            "name": "小学阅读技能",
            "points": [
              "能读懂语言简单、主题相关的简短语篇，获取具体信息，理解主要内容。",
              "能根据图片或关键词，归纳语篇的重要信息；能就语篇信息或观点初步形成自己的想法和意见。",
              "围绕语篇主题意义设计逻辑关联的语言实践活动，帮助学生建构基于主题的结构化知识。"
            ],
            "domain": "语篇与阅读",
            "prerequisites": [
              "eng-e-passage-questions"
            ],
            "courses": [
              "eng-e-reading-skills-primary"
            ]
          },
          {
            "id": "eng-e-listening-speaking",
            "name": "听说训练综合",
            "points": [
              "设计多途径的听说活动，借助图片、视频、简笔画、手势等帮助学生理解所听、所看语言材料，引导学生在感知、理解、模仿和运用中习得语言，学会表达。",
              "通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "在交流中引导学生注意倾听、敢于开口、不怕出错、大胆表达自己的观点或转述他人的观点等。"
            ],
            "domain": "听说",
            "prerequisites": [
              "eng-e-greetings-intro"
            ],
            "courses": [
              "eng-e-listening-speaking"
            ]
          }
        ]
      },
      {
        "subject": "science",
        "name": "小学科学",
        "nodes": [
          {
            "id": "sci-e-gravity",
            "name": "地球引力与重力",
            "points": [
              "图知道地球上一切物体都受到地球的吸引力，地球不需要 接触物体就可以对其施加引力。 图知道来自光源的光或来自物体的反射光进入眼睛，能使 人们看到光源或该物体。 知道光在空气中沿直线传播。 知道光遇到物体…"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-push-pull-force"
            ],
            "courses": [
              "sci-e-gravity"
            ]
          },
          {
            "id": "sci-e-friction",
            "name": "摩擦力",
            "points": [
              "认识物体有多种运动形式，力可以改变物体的运动状态，运动的物体具有能量，了解日常生活中能存在的不同形式。",
              "运用简单模型描述和解释物体间的相互作用；基于证据论证能的转化与能量守恒，理解其在社会生活中的意义。"
            ],
            "domain": "物质科学",
            "semester": "下",
            "prerequisites": [
              "sci-e-push-pull-force"
            ],
            "courses": [
              "sci-e-friction"
            ]
          },
          {
            "id": "sci-e-heat-transfer",
            "name": "热的传递",
            "points": [
              "初步了解热能及其传递方式。",
              "知道自然界存在多种形式的能，不同形式的能可以相互转化。"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-solid-liquid-gas"
            ],
            "courses": [
              "sci-e-heat-transfer"
            ]
          },
          {
            "id": "sci-e-photosynthesis-intro",
            "name": "植物的光合作用与呼吸（入门）",
            "points": [
              "认识植物的某些结构、动物的某些结构与行为具有维持自身生存的功能，认识生物通过生殖、发育实现生命的延续。",
              "能区分植物和动物的主要特征，并能对植物和动物进行简单分类。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-plant-life-cycle"
            ],
            "courses": [
              "sci-e-photosynthesis-demo",
              "sci-e-photosynthesis-intro"
            ]
          },
          {
            "id": "sci-e-ecosystem",
            "name": "生物与环境（食物链、食物网）",
            "points": [
              "简单描述生物与生物、生物与环境之间相互依存的关系，以及生物的多样性和进化现象。",
              "认识人与环境之间的相互关系；说明生物多样性和适应性是进化的结果。初步形成生物体的结构与功能、物质与能量、稳定与变化、进化与适应的观念。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-classification"
            ],
            "courses": [
              "sci-e-ecosystem"
            ]
          },
          {
            "id": "sci-e-nutrition-health",
            "name": "饮食、营养与健康",
            "points": [
              "5~6 | 7.3 人的生活习惯 | 列举睡眠、饮食、运动等影响健康的因素，养成 年级 | 影响机体健康 良好的生活习惯。 7.4 人体生命安全 | 举例说出重大传染病和突发公共卫生事件对人类 与生存…"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-human-body-systems"
            ],
            "courses": [
              "sci-e-nutrition-health"
            ]
          },
          {
            "id": "sci-e-earth-surface-change",
            "name": "地表的变化（侵蚀、沉积、火山、地震）",
            "points": [
              "10.2 水循环 | 知道水在改变地表形态的过程中发挥着重要作用。 图知道地球表面覆盖着岩石，崖石是由矿物组成的; 学会 通过观察和使用简单工具，比较不同崖石的颜色、坚硬程 度、颗粒粗细等特征。 10…"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-rocks-soil"
            ],
            "courses": [
              "sci-e-earth-surface-change"
            ]
          },
          {
            "id": "sci-e-simple-robot",
            "name": "简易机械玩具与机器人入门",
            "points": [
              "技术与工程实践能力体现在：了解技术与工程实践的一般过程和方法，针对实际需要明确问题，提出有创意的方案，并根据科学原理或限制条件进行筛选；实施计划，利用工具和材料进行加工制作；根据实际效果进行修改迭代；…",
              "掌握常见工具的使用方法；能拆开简单产品并复原，制作某种产品的简化实物模型并反映其中的科学原理；能发现作品的不足并进行改进。",
              "知道简单工程存在一定约束条件及验收标准。"
            ],
            "domain": "技术与工程",
            "prerequisites": [
              "sci-e-design-process",
              "sci-e-simple-machines"
            ],
            "courses": [
              "sci-e-simple-robot"
            ]
          },
          {
            "id": "sci-e-information-tech",
            "name": "信息技术与生活",
            "points": [
              "举例说出一些典型的技术〈如交通技术、电力技 术等) 和工程 〈如高速铁路、发电站等) 对人们生 活的影响;尝试设计和制作某种产品的简化实物模 型，并反映其中的部分科学原理。 12.3 科学、技术、 工…"
            ],
            "domain": "技术与工程",
            "prerequisites": [
              "sci-e-tools-use"
            ],
            "courses": [
              "sci-e-information-tech"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "小学道德与法治",
        "nodes": [
          {
            "id": "pol-e-g5-u1",
            "name": "面对成长中的新问题",
            "points": [
              "【课标】自律自强，孝敬长辈，友善待人，有正确的价值取向。",
              "【教材·面对成长中的新问题】自主选择课余生活；学会沟通交流；主动拒绝烟酒与毒品"
            ],
            "domain": "道德修养",
            "semester": "上",
            "prerequisites": [
              "pol-e-g4-u4"
            ]
          },
          {
            "id": "pol-e-g5-u2",
            "name": "我们是班级的主人",
            "points": [
              "【课标】增强自我保护意识，拒绝不良诱惑，珍爱生命。",
              "【教材·我们是班级的主人】选举产生班委会；协商决定班级事务"
            ],
            "domain": "中华优秀传统文化",
            "semester": "上",
            "prerequisites": [
              "pol-e-g5-u1"
            ]
          },
          {
            "id": "pol-e-g5-u4",
            "name": "骄人祖先 灿烂文化",
            "points": [
              "【课标】了解基本国情，热爱祖国，增强民族自豪感，树立国家认同。",
              "【教材·骄人祖先 灿烂文化】美丽文字 民族瑰宝；古代科技 耀我中华；传统美德 源远流长"
            ],
            "domain": "中华优秀传统文化",
            "semester": "上",
            "prerequisites": [
              "pol-e-g5-u3"
            ]
          },
          {
            "id": "pol-e-g5-u3",
            "name": "我们的国土 我们的家园",
            "points": [
              "【课标】了解宪法是国家的根本法，知道公民的基本权利和义务，树立法治观念。",
              "【教材·我们的国土 我们的家园】我们神圣的国土；中华民族一家亲"
            ],
            "domain": "国情与公民意识",
            "semester": "上",
            "prerequisites": [
              "pol-e-g5-u2"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "小学信息科技",
        "nodes": [
          {
            "id": "it-e-branch-loop",
            "name": "分支与循环结构",
            "points": [
              "在程序中运用顺序、分支、循环结构解决简单问题。"
            ],
            "domain": "算法与程序",
            "prerequisites": [
              "it-e-block-programming"
            ]
          },
          {
            "id": "it-e-debugging",
            "name": "程序调试与迭代",
            "points": [
              "能发现程序错误并尝试修改，体验迭代优化。"
            ],
            "domain": "算法与程序",
            "prerequisites": [
              "it-e-branch-loop"
            ]
          },
          {
            "id": "it-e-input-output",
            "name": "输入-计算-输出模型",
            "points": [
              "理解控制系统中输入、计算、输出的基本模型。"
            ],
            "domain": "过程与控制"
          },
          {
            "id": "it-e-internet-services",
            "name": "互联网服务与应用",
            "points": [
              "了解常见互联网服务，安全、负责任地使用网络。"
            ],
            "domain": "互联网与人工智能"
          },
          {
            "id": "it-e-network-security-basic",
            "name": "网络安全与信息保护",
            "points": [
              "知道个人信息保护要求，识别常见网络安全风险。"
            ],
            "domain": "互联网与人工智能",
            "prerequisites": [
              "it-e-internet-services"
            ]
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "小学心理健康教育",
        "nodes": [
          {
            "id": "psych-e-g5-self-accept",
            "name": "悦纳自我与学习动机",
            "points": [
              "帮助学生正确认识自己的优缺点和兴趣爱好，在各种活动中悦纳自己。",
              "着力培养学生的学习兴趣和学习能力，端正学习动机，调整学习心态，正确对待成绩，体验学习成功的乐趣。"
            ],
            "domain": "认识自我",
            "prerequisites": [
              "psych-e-g4-study-motivation"
            ]
          },
          {
            "id": "psych-e-g5-negative-emotion",
            "name": "面对挫折与情绪调节",
            "points": [
              "帮助学生克服学习困难，正确面对厌学等负面情绪，学会恰当地、正确地体验情绪和表达情绪。",
              "开展初步的青春期教育，引导学生进行恰当的异性交往，建立和维持良好的异性同伴关系。"
            ],
            "domain": "情绪调适",
            "prerequisites": [
              "psych-e-g5-self-accept"
            ]
          }
        ]
      }
    ],
    "6": [
      {
        "subject": "chinese",
        "name": "小学语文",
        "nodes": [
          {
            "id": "chn-e-parts-of-speech",
            "name": "词性与词类",
            "points": [
              "随文学习基本的词汇、语法知识，用以帮助理解课文中的语言难点。",
              "能联系上下文和自己的积累，推想课文中有关词句的意思，辨别词语的感情色彩，体会其表达效果。"
            ],
            "domain": "句子与标点",
            "semester": "四上-六下",
            "prerequisites": [
              "chn-e-word-formation"
            ],
            "courses": [
              "chn-e-parts-of-speech"
            ]
          },
          {
            "id": "chn-e-sentence-transformations-zh",
            "name": "常见句式与句式变换",
            "points": [
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。",
              "在理解课文的过程中体会顿号与逗号、分号与句号的不同用法。",
              "随文学习基本的词汇、语法知识，用以帮助理解课文中的语言难点；了解常用的修辞手法，体会它们在课文中的表达效果。"
            ],
            "domain": "句子与标点",
            "semester": "四上-九下",
            "prerequisites": [
              "chn-e-sentence-transformation"
            ],
            "courses": [
              "chn-e-sentence-transformations-zh"
            ]
          },
          {
            "id": "chn-e-non-fiction-reading",
            "name": "说明文与非连续性文本阅读",
            "points": [
              "阅读说明性文章，能抓住要点，了解文章的基本说明方法。",
              "阅读简单的非连续性文本，能从图文等组合材料中找出有价值的信息。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "chn-e-deep-reading"
            ],
            "courses": [
              "chn-e-non-fiction-reading"
            ]
          },
          {
            "id": "chn-e-reading-comprehension-exam",
            "name": "阅读理解答题方法",
            "points": [
              "在阅读中了解文章的表达顺序，体会作者的思想感情，初步领悟文章的基本表达方法。在交流和讨论中，敢于提出看法，作出自己的判断。",
              "阅读叙事性作品，了解事件梗概，能简单描述印象最深的场景、人物、细节，说出自己的喜爱、憎恶、崇敬、向往、同情等感受。",
              "阅读说明性文章，能抓住要点，了解文章的基本说明方法。阅读简单的非连续性文本，能从图文等组合材料中找出有价值的信息。"
            ],
            "domain": "阅读理解",
            "semester": "上",
            "prerequisites": [
              "chn-e-deep-reading"
            ],
            "courses": [
              "chn-e-reading-comprehension-exam"
            ]
          },
          {
            "id": "chn-e-whole-book-reading",
            "name": "整本书阅读",
            "points": [
              "第二学段（3~4年级）【阅读与鉴赏】5. 阅读整本书，初步理解主要内容，主动和同学分享自己的阅读感受。",
              "第三学段（5~6年级）【阅读与鉴赏】6. 阅读整本书，把握文本的主要内容，积极向同学推荐并说明理由。",
              "第四学段（7~9年级）【阅读与鉴赏】7. 每学年阅读两三部名著，探索个性化的阅读方法，分享阅读感受，开展专题探究，建构阅读整本书的经验。"
            ],
            "domain": "阅读理解",
            "semester": "全学段",
            "prerequisites": [
              "chn-e-non-fiction-reading"
            ],
            "courses": [
              "chn-e-whole-book-reading"
            ]
          },
          {
            "id": "chn-e-argumentative-intro",
            "name": "读后感与简单议论",
            "points": [
              "能写简单的记实作文和想象作文，内容具体，感情真实。能根据内容表达的需要，分段表述。学写读书笔记，学写常见应用文。",
              "在阅读中了解文章的表达顺序，体会作者的思想感情，初步领悟文章的基本表达方法。在交流和讨论中，敢于提出看法，作出自己的判断。"
            ],
            "domain": "写作表达",
            "prerequisites": [
              "chn-e-essay-structure",
              "chn-e-deep-reading"
            ],
            "courses": [
              "chn-e-argumentative-intro"
            ]
          },
          {
            "id": "chn-e-classical-reading",
            "name": "文言文阅读理解",
            "points": [
              "诵读古代诗词，阅读浅易文言文，能借助注释和工具书理解基本内容。注重积累、感悟和运用，提高自己的欣赏品位。",
              "能借助工具书阅读浅易文言文。"
            ],
            "domain": "古诗文",
            "prerequisites": [
              "chn-e-deep-reading",
              "chn-e-classical-chinese-intro"
            ],
            "courses": [
              "chn-e-classical-reading"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "小学数学",
        "nodes": [
          {
            "id": "math-e-fraction-decimal-percent",
            "name": "分数、小数、百分数互化",
            "points": [
              "结合具体情境探索并理解小数和分数的意义，感悟计数单位；会进行小数、分数的转化，进一步发展数感和符号意识。",
              "能用直观的方式表示分数和小数，能比较两个分数的大小和两个小数的大小；会进行小数和分数的转化（不包括将循环小数转化成分数）。",
              "数的运算教学应注重对整数、小数和分数四则运算的统筹，让学生进一步感悟运算的一致性。例如，在分数加减运算的过程中，引导学生理解通分的目的是得到同样计数单位，进一步理解计数单位对分数表达的重要性，理解整数…"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-fractions-meaning",
              "math-e-decimals-meaning"
            ],
            "courses": [
              "math-elem-fraction-decimal-percent"
            ]
          },
          {
            "id": "math-e-percentage",
            "name": "百分数",
            "points": [
              "理解百分数的意义，了解随机现象发生的可能性；形成数据意识和初步的应用意识。",
              "结合具体情境理解整数除法与分数的关系。",
              "结合具体情境探索并理解小数和分数的意义，感悟计数单位；会进行小数、分数的转化，进一步发展数感和符号意识。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "prerequisites": [
              "math-e-fraction-decimal-percent"
            ],
            "courses": [
              "math-e-percentage"
            ]
          },
          {
            "id": "math-e-negative-numbers",
            "name": "负数的认识",
            "points": [
              "在主题活动和项目学习中了解负数，应用数学和其他学科知识与方法解决问题，积累数学活动经验，形成数感、量感、模型意识、应用意识和创新意识。",
              "尝试在真实的情境中发现和提出问题，探索运用基本的数量关系，以及几何直观、逻辑推理和其他学科的知识、方法分析与解决问题，形成模型意识和初步的应用意识、创新意识。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-e-decimals-meaning"
            ],
            "courses": [
              "math-elem-negative-numbers"
            ]
          },
          {
            "id": "math-e-ratio-proportion",
            "name": "比和比例",
            "points": [
              "在实际情境中理解比和比例以及按比例分配的含义，能解决简单的问题。",
              "能在具体情境中判断两个量的比，会计算比值，理解比值相同的量，能解决按比例分配的简单问题。",
              "比和比例教学要合理利用实际生活中的情境，引导学生发现并用字母表达两个数量之间的倍数关系。"
            ],
            "domain": "数与代数",
            "semester": "下",
            "prerequisites": [
              "math-e-simple-equation",
              "math-e-fraction-decimal-percent"
            ],
            "courses": [
              "math-elem-ratio-proportion"
            ]
          },
          {
            "id": "math-e-measurement-sense",
            "name": "量感培养（跨学段）",
            "points": [
              "体验物体长度的测量过程，认识常见的长度单位，形成初步的量感。",
              "经历平面图形的周长和面积的测量过程，探索长方形周长和面积的计算方法，形成量感。",
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，形成量感。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-length-units"
            ],
            "courses": [
              "math-e-measurement-sense"
            ]
          },
          {
            "id": "math-e-circle-perimeter-area",
            "name": "圆的周长和面积",
            "points": [
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积。",
              "图形的认识与测量包括立体图形和平面图形的认识，线段长度的测量，以及图形的周长、面积和体积的计算。",
              "在推导一些常见图形周长、面积、体积计算方法的过程中，感司数学度量方法，逐步形成量感和推理意识。"
            ],
            "domain": "图形与几何",
            "semester": "上",
            "prerequisites": [
              "math-e-area-calculation"
            ],
            "courses": [
              "math-e-circle-perimeter-area"
            ]
          },
          {
            "id": "math-e-circle-area",
            "name": "圆的认识与面积",
            "points": [
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积。",
              "图形的认识与测量包括立体图形和平面图形的认识，线段长度的测量，以及图形的周长、面积和体积的计算。",
              "在推导一些常见图形周长、面积、体积计算方法的过程中，感悟数学度量方法，逐步形成量感和推理意识。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-circle-perimeter-area"
            ],
            "courses": [
              "math-elem-circle-area"
            ]
          },
          {
            "id": "math-e-cylinder-cone",
            "name": "圆柱与圆锥",
            "points": [
              "探索几何图形面积和体积的计算方法，会计算常见平面图形的周长和面积，会计算常见立体图形的体积和表面积。",
              "图形的认识与测量包括立体图形和平面图形的认识，线段长度的测量，以及图形的周长、面积和体积的计算。",
              "图形的认识主要是对图形的抽象。学生经历从实际物体抽象出几何图形的过程，认识图形的特征，感悟点、线、面、体的关系。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-e-volume-calculation",
              "math-e-circle-area"
            ],
            "courses": [
              "math-elem-cylinder-cone"
            ]
          },
          {
            "id": "math-e-pie-chart",
            "name": "扇形统计图",
            "points": [
              "经历收集、整理和表达数据的过程，会用条形统计图、折线统计图表达数据，并作出简单的判断。",
              "会用条形统计图、折线统计图表达数据，并作出简单的判断。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-e-line-graph",
              "math-e-fraction-decimal-percent"
            ],
            "courses": [
              "math-elem-pie-chart"
            ]
          },
          {
            "id": "math-e-percentage-statistics",
            "name": "百分数在统计中的应用",
            "points": [
              "经历收集、整理和表达数据的过程，会用条形统计图、折线统计图表达数据，并作出简单的判断；理解百分数的意义，了解随机现象发生的可能性；形成数据意识和初步的应用意识。",
              "理解百分数的意义，了解随机现象发生的可能性；形成数据意识和初步的应用意识。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-e-percentage",
              "math-e-pie-chart"
            ],
            "courses": [
              "math-e-percentage-statistics"
            ]
          },
          {
            "id": "math-e-complex-word-problems",
            "name": "综合复合应用问题",
            "points": [
              "在具体情境中，认识常见数量关系: 总量=分量+分量、总价=单价×数量、路程=速度×时间；能利用这些关系解决简单的实际问题。",
              "能运用常见的数量关系解决实际问题，能合理解释结果的实际意义，逐步形成模型意识和几何直观，提高解决问题的能力。",
              "能在真实情境中，发现常见数量关系，感悟利用常见数量关系解决问题；能借助计算器进行计算，并解释计算结果的实际意义；形成初步的模型意识、几何直观和应用意识。"
            ],
            "domain": "综合与实践",
            "prerequisites": [
              "math-e-word-problems-multiply",
              "math-e-fraction-operations",
              "math-e-ratio-proportion"
            ],
            "courses": [
              "math-elem-complex-word-problems"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "小学英语",
        "nodes": [
          {
            "id": "eng-e-vocab-600-words",
            "name": "小学 600 词累积",
            "points": [
              ". 能初步运用 500 个左右单词〈见附录 3)，就规定的主题进行交流与 表达，另外可以根据实际情况接触并学习三级词汇和相关主题范围 内 100~300 个单词，以及一定数量的习惯用语或固定搭配。"
            ],
            "domain": "词汇",
            "prerequisites": [
              "eng-e-vocab-nature-society"
            ],
            "courses": [
              "eng-e-vocab-600-words"
            ]
          },
          {
            "id": "eng-e-future-simple",
            "name": "一般将来时",
            "points": [
              "2. 在语境中理解一般过去时和一般将来时的形式、意义、用法;"
            ],
            "domain": "语法",
            "semester": "上",
            "prerequisites": [
              "eng-e-present-continuous",
              "eng-e-past-simple"
            ],
            "courses": [
              "eng-e-future-simple"
            ]
          },
          {
            "id": "eng-e-tenses-primary",
            "name": "小学阶段时态综合",
            "points": [
              "针对语法教学，应遵循形式、意义和使用统一的原则，让学生感知和体验形式与意义的联系，在语境中运用所学语法进行交流和表达。",
              "能领悟基本语调表达的意义；能理解常见词语的意思，理解基本句式和常用时态表达的意义。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-e-future-simple"
            ],
            "courses": [
              "eng-e-tenses-primary"
            ]
          },
          {
            "id": "eng-e-story-retelling",
            "name": "故事复述",
            "points": [
              "能根据图片，口头描述其中的人或事物；能关注生活中或媒体上的语言使用。",
              "能围绕相关主题，运用所学语言，与他人进行简单的交流，表演小故事或短剧，语音、语调基本正确。",
              "引导学生做到“想表达”“能表达”和“会表达”，体验英语学习的乐趣与意义，获得成就感和自信心。"
            ],
            "domain": "语篇与阅读",
            "prerequisites": [
              "eng-e-topic-conversation",
              "eng-e-reading-skills-primary"
            ],
            "courses": [
              "eng-e-story-retelling"
            ]
          },
          {
            "id": "eng-e-simple-writing",
            "name": "看图写话与简单作文",
            "points": [
              "在书面表达中，能围绕图片内容或模仿范文，写出几句意思连贯的话。",
              "能围绕相关主题，运用所学语言，进行简单的交流，介绍自己和身边熟悉的人或事物，表达情感和喜好等，语言达意。"
            ],
            "domain": "写作",
            "prerequisites": [
              "eng-e-passage-questions",
              "eng-e-future-simple"
            ],
            "courses": [
              "eng-e-simple-writing"
            ]
          },
          {
            "id": "eng-e-writing-skills-primary",
            "name": "小学写作技能",
            "points": [
              "在书面表达中，能围绕图片内容或模仿范文，写出几句意思连贯的话。",
              "引导学生做到‘想表达’‘能表达’和‘会表达’，体验英语学习的乐趣与意义，获得成就感和自信心。",
              "通过小组讨论、制作展板或海报、创编故事，以及表演等活动，用英语交流和表达新的认知。"
            ],
            "domain": "写作",
            "prerequisites": [
              "eng-e-simple-writing"
            ],
            "courses": [
              "eng-e-writing-skills-primary"
            ]
          },
          {
            "id": "eng-e-listening-speaking",
            "name": "听说训练综合",
            "points": [
              "设计多途径的听说活动，借助图片、视频、简笔画、手势等帮助学生理解所听、所看语言材料，引导学生在感知、理解、模仿和运用中习得语言，学会表达。",
              "通过让学生听说韵文、韵句，听唱歌曲，听读课文录音等，模仿语音、语调和情绪表达，初步形成语感，奠定良好的语音基础。",
              "在交流中引导学生注意倾听、敢于开口、不怕出错、大胆表达自己的观点或转述他人的观点等。"
            ],
            "domain": "听说",
            "prerequisites": [
              "eng-e-greetings-intro"
            ],
            "courses": [
              "eng-e-listening-speaking"
            ]
          }
        ]
      },
      {
        "subject": "science",
        "name": "小学科学",
        "nodes": [
          {
            "id": "sci-e-simple-machines",
            "name": "简单机械（杠杆、滑轮、斜面）",
            "points": [
              "知道生活中常见的力，认识力可以改变物体的形状。",
              "认识物体有多种运动形式，力可以改变物体的运动状态，运动的物体具有能量，了解日常生活中能存在的不同形式。",
              "知道常见简单科技产品的结构决定了其功能，知道简单的制作问题需要定义和界定。"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-friction"
            ],
            "courses": [
              "sci-e-simple-machines"
            ]
          },
          {
            "id": "sci-e-energy-forms",
            "name": "能量的多种形式",
            "points": [
              "认识物体有多种运动形式，力可以改变物体的运动状态，运动的物体具有能量，了解日常生活中能存在的不同形式。",
              "知道自然界存在多种形式的能，不同形式的能可以相互转化；初步了解热能及其传递方式。"
            ],
            "domain": "物质科学",
            "prerequisites": [
              "sci-e-heat-transfer",
              "sci-e-electricity-basic"
            ],
            "courses": [
              "sci-e-energy-forms"
            ]
          },
          {
            "id": "sci-e-environment-protection",
            "name": "环境保护与生态平衡",
            "points": [
              "认识生物与环境的相互关系，简单描述生物与生物、生物与环境之间相互依存的关系，以及生物的多样性和进化现象。",
              "热爱自然，具有节约资源、保护环境、推动生态文明建设和可持续发展的责任感。",
              "知道人类生活离不开自然资源，能认识到节约自然资源和保护环境的重要性。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-ecosystem"
            ],
            "courses": [
              "sci-e-environment-protection"
            ]
          },
          {
            "id": "sci-e-heredity-intro",
            "name": "遗传与变异现象（入门）",
            "points": [
              "认识细胞是生物体结构的基本单位；初步认识生物体的结构层次，以及形态结构与功能的关系；简单描述生物与生物、生物与环境之间相互依存的关系，以及生物的多样性和进化现象。",
              "说明生物多样性和适应性是进化的结果。初步形成生物体的结构与功能、物质与能量、稳定与变化、进化与适应的观念。"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-plant-life-cycle",
              "sci-e-animal-life-cycle"
            ],
            "courses": [
              "sci-e-heredity-intro",
              "science-genetics-variation-intro"
            ]
          },
          {
            "id": "sci-e-disease-prevention",
            "name": "疾病预防与卫生习惯",
            "points": [
              "7.4 人体生命安全 | 举例说出重大传染病和突发公共卫生事件对人类 与生存环境密切相关 | 安全的威胁。 7.1 生物能适应其 | 描述植物的感应性现象。 生存环境 列举动物行为的基本类型。 7~9…"
            ],
            "domain": "生命科学",
            "prerequisites": [
              "sci-e-nutrition-health"
            ],
            "courses": [
              "sci-e-disease-prevention"
            ]
          },
          {
            "id": "sci-e-climate",
            "name": "气候与气候变化",
            "points": [
              "知道地球表面被大气包围 着，大气是运动的;学会使用 气温计测量气温，并描述一天中气温的变化。 学会使用仪器测量和记录气温、风力、风向、降水量等 气象数据，并运用测量结果描述天气状况; 识别常用的天 气…"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-seasons",
              "sci-e-water-earth"
            ],
            "courses": [
              "sci-e-climate"
            ]
          },
          {
            "id": "sci-e-solar-system",
            "name": "太阳系",
            "points": [
              "知道太阳、地球和月球，知道它们之间的空间关系；知道地球系统由大气圈、水圈、土壤圈、岩石圈和生物圈等构成。",
              "知道太阳、地球和月球的周期性运动以及相关的自然现象，能认识到太空探索拓宽了人类的视野。",
              "知道不同层次的天体系统，认识地球所处的宇宙环境，能运用太阳、地球和月球的相对运动解释相关的自然现象。"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-moon-phases"
            ],
            "courses": [
              "sci-e-solar-system"
            ]
          },
          {
            "id": "sci-e-space-exploration",
            "name": "人类的航天探索",
            "points": [
              "知道太阳、地球和月球的周期性运动以及相关的自然现象，能认识到太空探索拓宽了人类的视野。",
              "知道不同层次的天体系统，认识地球所处的宇宙环境，能运用太阳、地球和月球的相对运动解释相关的自然现象，关注天文和航天事业的进展。"
            ],
            "domain": "地球与宇宙科学",
            "prerequisites": [
              "sci-e-solar-system"
            ],
            "courses": [
              "sci-e-space-exploration"
            ]
          },
          {
            "id": "sci-e-sustainable-engineering",
            "name": "绿色工程与可持续发展",
            "points": [
              "热爱自然，具有节约资源、保护环境、推动生态文明建设和可持续发展的责任感。",
              "知道人类生活离不开自然资源，能认识到节约自然资源和保护环境的重要性。",
              "知道资源短缺、环境污染和生态破坏等问题及其原因，了解解决这些问题的措施，初步形成人地协调的观念。"
            ],
            "domain": "技术与工程",
            "prerequisites": [
              "sci-e-bridge-structure",
              "sci-e-environment-protection"
            ],
            "courses": [
              {
                "id": "sci-e-sustainable-engineering",
                "title": "绿色工程与可持续发展",
                "path": "community/sci-e-sustainable-engineering",
                "type": "interactive",
                "version": "1.0.0"
              }
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "小学道德与法治",
        "nodes": [
          {
            "id": "pol-e-g6-u1",
            "name": "我们的守护者",
            "points": [
              "【课标】自律自强，孝敬长辈，友善待人，有正确的价值取向。",
              "【教材·我们的守护者】感受生活中的法律；宪法是根本法"
            ],
            "domain": "道德修养",
            "semester": "上",
            "prerequisites": [
              "pol-e-g5-u4"
            ]
          },
          {
            "id": "pol-e-g6-u2",
            "name": "我们是公民",
            "points": [
              "【课标】增强自我保护意识，拒绝不良诱惑，珍爱生命。",
              "【教材·我们是公民】公民意味着什么；公民的基本权利和义务"
            ],
            "domain": "中华优秀传统文化",
            "semester": "上",
            "prerequisites": [
              "pol-e-g6-u1"
            ]
          },
          {
            "id": "pol-e-g6-u4",
            "name": "法律保护我们健康成长",
            "points": [
              "【课标】传承中华传统美德，了解革命传统，增强文化自信。",
              "【教材·法律保护我们健康成长】我们受特殊保护；知法守法，依法维权"
            ],
            "domain": "中华优秀传统文化",
            "semester": "上",
            "prerequisites": [
              "pol-e-g6-u3"
            ]
          },
          {
            "id": "pol-e-g6-u3",
            "name": "我们的国家机构",
            "points": [
              "【课标】了解宪法是国家的根本法，知道公民的基本权利和义务，树立法治观念。",
              "【教材·我们的国家机构】国家机构有哪些；人大代表为人民；权力受到制约和监督"
            ],
            "domain": "国情与公民意识",
            "semester": "上",
            "prerequisites": [
              "pol-e-g6-u2"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "小学信息科技",
        "nodes": [
          {
            "id": "it-e-sensors-actuators",
            "name": "传感与执行（初识）",
            "points": [
              "认识常见传感器与执行器，体验简单控制项目。"
            ],
            "domain": "过程与控制",
            "prerequisites": [
              "it-e-input-output"
            ]
          },
          {
            "id": "it-e-feedback-control",
            "name": "反馈控制原理",
            "points": [
              "理解反馈在自动控制中的作用，设计简单控制方案。"
            ],
            "domain": "过程与控制",
            "prerequisites": [
              "it-e-sensors-actuators"
            ]
          },
          {
            "id": "it-e-ai-awareness",
            "name": "人工智能初识",
            "points": [
              "了解人工智能的典型应用，辩证看待其影响。"
            ],
            "domain": "互联网与人工智能"
          },
          {
            "id": "it-e-ai-ethics",
            "name": "人工智能伦理与责任",
            "points": [
              "讨论人工智能应用中的伦理问题，增强信息社会责任。"
            ],
            "domain": "互联网与人工智能",
            "prerequisites": [
              "it-e-ai-awareness"
            ]
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "小学心理健康教育",
        "nodes": [
          {
            "id": "psych-e-g6-social-citizen",
            "name": "亲社会行为与问题解决",
            "points": [
              "积极促进学生的亲社会行为，逐步认识自己与社会、国家和世界的关系。",
              "培养学生分析问题和解决问题的能力，为初中阶段学习生活做好准备。"
            ],
            "domain": "生活适应",
            "prerequisites": [
              "psych-e-g6-puberty"
            ]
          },
          {
            "id": "psych-e-g6-puberty",
            "name": "青春期教育与异性交往",
            "points": [
              "开展初步的青春期教育，引导学生进行恰当的异性交往，建立和维持良好的异性同伴关系，扩大人际交往的范围。",
              "帮助学生正确认识自己的优缺点和兴趣爱好，在各种活动中悦纳自己。"
            ],
            "domain": "青春期与成长",
            "prerequisites": [
              "psych-e-g5-negative-emotion"
            ]
          }
        ]
      }
    ],
    "7": [
      {
        "subject": "chinese",
        "name": "小学语文",
        "nodes": [
          {
            "id": "chn-e-sentence-transformations-zh",
            "name": "常见句式与句式变换",
            "points": [
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。",
              "在理解课文的过程中体会顿号与逗号、分号与句号的不同用法。",
              "随文学习基本的词汇、语法知识，用以帮助理解课文中的语言难点；了解常用的修辞手法，体会它们在课文中的表达效果。"
            ],
            "domain": "句子与标点",
            "semester": "四上-九下",
            "prerequisites": [
              "chn-e-sentence-transformation"
            ],
            "courses": [
              "chn-e-sentence-transformations-zh"
            ]
          },
          {
            "id": "chn-e-whole-book-reading",
            "name": "整本书阅读",
            "points": [
              "第二学段（3~4年级）【阅读与鉴赏】5. 阅读整本书，初步理解主要内容，主动和同学分享自己的阅读感受。",
              "第三学段（5~6年级）【阅读与鉴赏】6. 阅读整本书，把握文本的主要内容，积极向同学推荐并说明理由。",
              "第四学段（7~9年级）【阅读与鉴赏】7. 每学年阅读两三部名著，探索个性化的阅读方法，分享阅读感受，开展专题探究，建构阅读整本书的经验。"
            ],
            "domain": "阅读理解",
            "semester": "全学段",
            "prerequisites": [
              "chn-e-non-fiction-reading"
            ],
            "courses": [
              "chn-e-whole-book-reading"
            ]
          },
          {
            "id": "chn-m-word-usage",
            "name": "词语辨析与运用",
            "points": [
              "在具体的语言情境中独立识字写字；关注有新鲜感的词句，并有意识地在口头和书面表达中运用。",
              "能联系上下文，理解词句的意思，体会课文中关键词句表达情意的作用。能借助字典、词典和生活积累，理解生词的意义。"
            ],
            "domain": "语言文字运用",
            "courses": [
              "chn-m-word-usage"
            ]
          },
          {
            "id": "chn-m-sentence-components",
            "name": "句子成分分析",
            "points": [
              "1. 词的分类: 名词、动词、形容词、数词、量词、代词、副词、 介词、连词、助词、语气词、叹词。 2. 短语的结构: 并列式、偏正式、主谓式、动宾式、补充式。 3. 单句的成分: 主语、谓语、宾语、定…"
            ],
            "domain": "语言文字运用",
            "courses": [
              "chn-m-sentence-components"
            ]
          },
          {
            "id": "chn-m-rhetoric-figures",
            "name": "常见修辞手法",
            "points": [
              "能借助上下文语域，说出关键语句、标点符号、图表在表达中的作用。",
              "关注有新鲜感的词句，并有意识地在口头和书面表达中运用。",
              "体会作者通过语言和形象构建的艺术世界，借鉴其中的写作手法。"
            ],
            "domain": "语言文字运用",
            "courses": [
              "chn-m-rhetoric-figures"
            ]
          },
          {
            "id": "chn-m-rhetoric-analysis",
            "name": "修辞手法赏析",
            "points": [
              "关注有新鲜感的词句，并有意识地在口头和书面表达中运用。",
              "能从多个角度分析作品中的优美词语、精彩段落。",
              "感受语言文字的丰富内涵，对国家通用语言文字具有深厚感情。"
            ],
            "domain": "语言文字运用",
            "prerequisites": [
              "chn-m-rhetoric-figures",
              "chn-m-word-usage"
            ],
            "courses": [
              "chn-m-rhetoric-analysis"
            ]
          },
          {
            "id": "chn-m-narrative-reading",
            "name": "记叙文阅读",
            "points": [
              "阅读表现人与社会、人与他人的古今优秀诗歌、散文、小说、戏剧等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "能从多个角度分析作品中的**人物行为、人物形象、作品中的优美词语、精彩段落**；并根据需要进行摘录。",
              "能复述读过的故事，概括文本内容，根据自己的阅读理解提出问题并与人交流。"
            ],
            "domain": "现代文阅读",
            "prerequisites": [
              "chn-e-reading-comprehension-exam",
              "chn-e-non-fiction-reading"
            ],
            "courses": [
              "chn-m-narrative-reading"
            ]
          },
          {
            "id": "chn-m-expository-reading",
            "name": "说明文阅读",
            "points": [
              "学会运用多种阅读方法，具有独立阅读能力。能阅读日常的书报杂志，初步鉴赏文学作品。",
              "能初步把握文章的主要内容，体会文章表达的思想感情。学习圈点、批注等阅读方法。",
              "能对课文中不理解的地方提出疑问，乐于与他人讨论交流。"
            ],
            "domain": "现代文阅读",
            "prerequisites": [
              "chn-m-narrative-reading"
            ],
            "courses": [
              "chn-m-expository-reading"
            ]
          },
          {
            "id": "chn-m-classical-words",
            "name": "文言实词与虚词",
            "points": [
              "能借助工具书阅读浅易文言文。",
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-e-classical-reading"
            ],
            "courses": [
              "chn-m-classical-words"
            ]
          },
          {
            "id": "chn-m-poetry-recitation",
            "name": "初中古诗词背诵",
            "points": [
              "诵读学过的优秀诗文，尝试用不同的语气、语调表达自己的理解与感受。",
              "背诵优秀诗文50篇（段）。养成读书看报的习惯，收藏图书资料，乐于与同学交流。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-e-classical-reading"
            ],
            "courses": [
              "chn-m-poetry-recitation"
            ]
          },
          {
            "id": "chn-m-poetry-appreciation",
            "name": "古诗词赏析入门",
            "points": [
              "阅读表现人与自然的优秀文学作品，包括古诗文名篇，体会作者通过语言和形象构建的艺术世界。",
              "阅读表现人与社会、人与他人的古今优秀诗歌等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "诵读学过的优秀诗文，尝试用不同的语气、语调表达自己的理解与感受。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-m-poetry-recitation",
              "chn-m-classical-words"
            ],
            "courses": [
              "chn-m-poetry-appreciation"
            ]
          },
          {
            "id": "chn-m-narrative-writing-m",
            "name": "记叙文写作",
            "points": [
              "能根据需要，用书面语言具体明确、文从字顺地表达自己的见闻、体验和想法。",
              "观察周围世界，能不拘形式地写下自己的见闻、感受和想象，注意把自己觉得新奇有趣或印象最深、最受感动的内容写清楚。",
              "关注有新鲜感的词句，并有意识地在口头和书面表达中运用。"
            ],
            "domain": "写作",
            "semester": "上",
            "prerequisites": [
              "chn-e-argumentative-intro"
            ],
            "courses": [
              "chn-m-narrative-writing-m"
            ]
          },
          {
            "id": "chn-m-descriptive-writing",
            "name": "描写方法与细节",
            "points": [
              "阅读表现人与自然的优秀文学作品，体会作者通过语言和形象构建的艺术世界，借鉴其中的写作手法。",
              "阅读表现人与社会、人与他人的古今优秀文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "能按照童话、寓言等文体样式，运用联想、想象续编或续写故事。"
            ],
            "domain": "写作",
            "prerequisites": [
              "chn-m-narrative-writing-m"
            ],
            "courses": [
              "chn-m-descriptive-writing"
            ]
          },
          {
            "id": "chn-m-whole-book-reading",
            "name": "整本书阅读方法",
            "points": [
              "独立阅读古今中外诗歌集、中长篇小说、散文集等文学名著，根据阅读进度完成读书笔记，针对作品的语言、形象、主题等方面的话题展开研讨。",
              "引导学生了解阅读的多种策略，运用浏览、略读、精读等不同阅读方法；通读整本书，了解主要内容，关注整体与局部、局部与局部之间的关系。",
              "每学期至少阅读2-4本课外书——养成终身阅读习惯；部编版语文教材「名著导读」栏目是重要载体。"
            ],
            "domain": "整本书阅读与名著导读",
            "prerequisites": [
              "chn-m-narrative-reading"
            ],
            "courses": [
              "chn-m-whole-book-reading"
            ]
          },
          {
            "id": "chn-m-journey-west",
            "name": "《西游记》",
            "points": [
              "独立阅读古今中外诗歌集、中长篇小说、散文集等文学名著，如《西游记》。根据阅读进度完成读书笔记，针对作品的语言、形象、主题等方面的话题展开研讨。",
              "引导学生了解阅读的多种策略，运用浏览、略读、精读等不同阅读方法；通读整本书，了解主要内容，关注整体与局部、局部与局部之间的关系。",
              "每学期至少阅读2-4本课外书，养成终身阅读习惯。部编版语文教材‘名著导读’栏目是重要载体，初中阶段名著导读推荐包括《西游记》。"
            ],
            "domain": "整本书阅读与名著导读",
            "prerequisites": [
              "chn-m-whole-book-reading"
            ],
            "courses": [
              "chn-m-journey-west"
            ]
          },
          {
            "id": "chn-m-erta-stories",
            "name": "《朝花夕拾》",
            "points": [
              "独立阅读古今中外诗歌集、中长篇小说、散文集等文学名著，如《朝花夕拾》。根据阅读进度完成读书笔记，针对作品的语言、形象、主题等方面的话题展开研讨。",
              "以学生自主阅读活动为主，引导学生了解阅读的多种策略，运用浏览、略读、精读等不同阅读方法；通读整本书，了解主要内容，关注整体与局部、局部与局部之间的关系。",
              "采用读书笔记、读书报告会、读书分享会等方式引导学生高质量完成整本书的阅读。"
            ],
            "domain": "整本书阅读与名著导读",
            "prerequisites": [
              "chn-m-whole-book-reading"
            ],
            "courses": [
              "chinese-erta-stories",
              "chn-m-erta-stories"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "初中数学",
        "nodes": [
          {
            "id": "math-m-rational-number",
            "name": "有理数",
            "points": [
              "理解负数的意义；理解有理数的意义，能用数轴上的点表示有理数，能比较有理数的大小。",
              "掌握有理数的加、减、乘、除、乘方及简单的混合运算（以三步以内为主）；理解有理数的运算律，能运用运算律简化运算。",
              "能运用有理数的运算解决简单问题。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "courses": [
              "math-m-rational-number"
            ]
          },
          {
            "id": "math-m-rational-operations",
            "name": "有理数运算",
            "points": [
              "掌握有理数的加、减、乘、除、乘方及简单的混合运算（以三步以内为主）；理解有理数的运算律，能运用运算律简化运算。",
              "能熟练地对有理数进行加、减、乘、除、乘方及简单的混合运算（以三步以内为主），理解有理数的运算律，能合理运用运算律简化运算。",
              "能运用有理数的运算解决简单问题。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-rational-number"
            ],
            "courses": [
              "math-m-rational-operations"
            ]
          },
          {
            "id": "math-m-algebraic-expression",
            "name": "代数式与整式",
            "points": [
              "理解整式的概念，掌握合并同类项和去括号的法则；能进行简单的整式加减运算。",
              "掌握合并同类项和去括号的法则，能进行简单的整式加减法和减法运算。",
              "通过代数式和代数式运算的教学，让学生进一步理解字母表示数的意义。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-rational-operations"
            ],
            "courses": [
              "math-m-algebraic-expression"
            ]
          },
          {
            "id": "math-m-algebraic-expressions",
            "name": "整式加减",
            "points": [
              "理解整式的概念，掌握合并同类项和去括号的法则；能进行简单的整式加减运算，能进行简单的整式乘法运算。",
              "理解乘法公式 (a+b)(a−b)=a²−b², (a±b)²=a²±2ab+b²，了解公式的几何背景，能利用公式进行简单的计算和推理。",
              "能用提公因式法、公式法（直接利用公式不超过二次）进行因式分解（指数为正整数）。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-algebraic-expression"
            ],
            "courses": [
              "math-m-algebraic-expressions"
            ]
          },
          {
            "id": "math-m-real-number",
            "name": "实数与数轴",
            "points": [
              "了解无理数和实数，知道实数由有理数和无理数组成，了解实数与数轴上的点一一对应。",
              "了解无理数和实数，知道实数由有理数和无理数组成，感悟数的扩充；初步认识实数与数轴上的点具有一一对应关系。",
              "体会实数与数轴上的点一一对应的数形结合的意义，会进行实数的运算。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-rational-number"
            ],
            "courses": [
              "math-m-real-number"
            ]
          },
          {
            "id": "math-m-linear-equation-one",
            "name": "一元一次方程",
            "points": [
              "掌握等式的基本性质；能利用等式的性质解一元一次方程。",
              "能根据具体问题中的数量关系列出方程，理解解方程的意义；掌握等式的基本性质，能运用等式的基本性质进行等式的变形；能根据等式的基本性质解一元一次方程。",
              "能运用一元一次方程解决简单的实际问题。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-algebraic-expression"
            ],
            "courses": [
              "math-m-linear-equation-one"
            ]
          },
          {
            "id": "math-m-linear-equations",
            "name": "一元一次方程应用",
            "points": [
              "掌握等式的基本性质；能利用等式的性质解一元一次方程。",
              "掌握代入消元法和加减消元法，会解二元一次方程组；*能解简单的三元一次方程组*。",
              "能根据具体问题中的数量关系列出方程，理解解方程的意义；掌握等式的基本性质，能解一元一次方程。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-linear-equation-one"
            ],
            "courses": [
              "math-m-linear-equations"
            ]
          },
          {
            "id": "math-m-inequalities",
            "name": "不等式初步",
            "points": [
              "结合具体问题，了解不等式的意义，探索不等式的基本性质；能用不等式的基本性质对不等式进行变形；能解数字系数的一元一次不等式，并能在数轴上表示出解集；会用数轴确定两个一元一次不等式组成的不等式组的解集；能…",
              "结合具体问题，了解不等式的意义，探索不等式的基本性质；能用不等式的基本性质对不等式进行变形；能解数字系数的一元一次不等式，并能在数轴上表示出解集；会用数轴确定两个一元一次不等式组成的不等式组的解集；能…"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-linear-equation-one"
            ],
            "courses": [
              "math-m-inequalities"
            ]
          },
          {
            "id": "math-m-coordinate-system",
            "name": "平面直角坐标系",
            "points": [
              "能建立平面直角坐标系，用坐标表示位置。",
              "了解函数的概念和表示法，能举出函数的实例，初步形成模型观念。",
              "能结合图象对简单实际问题中的函数关系进行分析。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "prerequisites": [
              "math-m-rational-number"
            ],
            "courses": [
              "math-m-coordinate-system"
            ]
          },
          {
            "id": "math-m-geometric-figure",
            "name": "几何图形初步",
            "points": [
              "通过实物和模型，了解从物体抽象出来的几何体、平面、直线和点等概念。",
              "会比较线段的长短，理解线段的和、差，以及线段中点的意义。",
              "掌握基本事实：两点确定一条直线。掌握基本事实：两点之间线段最短。"
            ],
            "domain": "图形与几何",
            "courses": [
              "math-m-geometric-figure"
            ]
          },
          {
            "id": "math-m-line-angle",
            "name": "相交线与平行线",
            "points": [
              "理解补角、余角、对顶角的意义。理解垂线的意义，掌握基本事实：过一点有且只有一条直线垂直于另一条直线。",
              "理解点到直线的距离的意义，掌握基本事实：垂线段最短。理解平行线的概念，掌握基本事实：过直线外一点有且只有一条直线平行于这条直线。",
              "掌握平行线的性质定理：两条平行线被第三条直线所截，同位角相等。掌握平行线的判定定理：同位角相等，两直线平行。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-geometric-figure"
            ],
            "courses": [
              "math-m-line-angle"
            ]
          },
          {
            "id": "math-m-triangle-basics",
            "name": "三角形基础",
            "points": [
              "理解三角形及其有关概念（高、中线、角平分线），会画任意三角形的高、中线、角平分线。",
              "探索并证明三角形内角和定理及其推论。",
              "探索勾股定理及其逆定理，并能运用它们解决一些简单的实际问题。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-line-angle"
            ],
            "courses": [
              "math-m-triangle-basics"
            ]
          },
          {
            "id": "math-m-ruler-compass-construction",
            "name": "尺规作图",
            "points": [
              "能用尺规作图：已知三边、两边及其夹角、两角及其夹边作三角形；已知底边及底边上的高线作等腰三角形；已知一直角边和斜边作直角三角形。",
              "掌握基本事实：两点确定一条直线。掌握基本事实：两点之间线段最短。理解两点间距离的意义，能度量两点间的距离。"
            ],
            "domain": "图形与几何",
            "semester": "七上/八上",
            "prerequisites": [
              "math-m-line-angle"
            ],
            "courses": [
              "math-m-ruler-compass-construction"
            ]
          },
          {
            "id": "math-m-axial-symmetry",
            "name": "轴对称",
            "points": [
              "能理解图形的变化（平移、旋转、轴对称、相似、位似）。",
              "图形与几何领域包括图形的性质、图形的变化、图形与坐标三个主题。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-line-angle"
            ],
            "courses": [
              "math-m-axial-symmetry"
            ]
          },
          {
            "id": "math-m-data-collection",
            "name": "数据的收集",
            "points": [
              "经历收集、整理、描述和分析数据的活动，了解数据处理的过程；能用计算器处理较为复杂的数据。",
              "体会抽样的必要性，通过实例了解简单随机抽样。",
              "会制作扇形统计图，能用统计图直观、有效地描述数据。"
            ],
            "domain": "统计与概率",
            "courses": [
              "math-m-data-collection"
            ]
          },
          {
            "id": "math-m-data-description",
            "name": "数据的描述",
            "points": [
              "会制作扇形统计图，能用统计图直观、有效地描述数据。",
              "能用适当的统计图表描述数据；理解平均数、中位数、众数、方差的意义；能用样本估计总体。",
              "经历收集、整理、描述和分析数据的活动，了解数据处理的过程；能用计算器处理较为复杂的数据。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-m-data-collection"
            ],
            "courses": [
              "math-m-data-description"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "初中英语",
        "nodes": [
          {
            "id": "eng-m-ipa-transcription",
            "name": "国际音标（IPA）",
            "points": [
              "音标是初中阶段需要学习的语音知识内容。要帮助学生学习和掌握音标，借助音标准确读出和记忆单词，为学生开展自主学习奠定基础。",
              "就语音知识而言，要让学生学会根据重音、意群、语调与节奏等语音方面的变化，感知说话人表达的不同意义...并进行模仿、练习和内化，学会运用语音知识更好地表达自己的意图和态度。"
            ],
            "domain": "语音与拼写",
            "prerequisites": [
              "eng-e-alphabet",
              "eng-e-vowel-sounds",
              "eng-e-consonant-sounds"
            ],
            "courses": [
              "eng-m-ipa-transcription"
            ]
          },
          {
            "id": "eng-m-curriculum-vocabulary",
            "name": "课标核心词汇（1600词）",
            "points": [
              "就词汇知识而言，要让学生认识到词汇学习不是单纯的词汇记忆和机械的操练，而是要学会运用词语在特定情境中理解和表达意义。",
              "尽量以词块的形式呈现生词，引导学生关注词语的搭配和固定的表达方式，并在围绕主题意义建构结构化知识的过程中，提炼词语的搭配和固定表达方式，构建词汇语义网，积累词块，扩大词汇量。",
              "指导学生借助构词法知识和词典、词表等工具学习词语，大胆使用新的词块自主表达意义、解决新问题。"
            ],
            "domain": "词汇与语块",
            "prerequisites": [
              "eng-m-ipa-transcription"
            ],
            "courses": [
              "eng-curriculum-vocabulary"
            ]
          },
          {
            "id": "eng-m-nouns-articles",
            "name": "名词、代词与冠词",
            "points": [
              "就语法知识而言，要帮助学生建立以语言运用为导向的“形式—意义—使用”语法观，引导学生在理解主题意义的基础上，认识到语法形式的选择取决于具体语境。",
              "重视在语境中呈现新的语法知识，指导学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "根据学生的实际需求，选择和设计既有层次又强调整合的不同类型的练习和活动，巩固所学语法知识，引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。"
            ],
            "domain": "语法与句法",
            "prerequisites": [
              "eng-m-curriculum-vocabulary"
            ],
            "courses": [
              "eng-m-nouns-articles"
            ]
          },
          {
            "id": "eng-m-tenses-present",
            "name": "一般现在时与现在进行时",
            "points": [
              "就语法知识而言，要帮助学生建立以语言运用为导向的“形式—意义—使用”语法观，引导学生在理解主题意义的基础上，认识到语法形式的选择取决于具体语境。",
              "重视在语境中呈现新的语法知识，指导学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "根据学生的实际需求，选择和设计既有层次又强调整合的不同类型的练习和活动，巩固所学语法知识，引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。"
            ],
            "domain": "语法与句法",
            "semester": "上",
            "prerequisites": [
              "eng-m-nouns-articles",
              "eng-e-tenses-primary",
              "eng-e-future-simple"
            ],
            "courses": [
              "eng-m-tenses-present"
            ]
          },
          {
            "id": "eng-m-tenses-past",
            "name": "一般过去时与过去进行时",
            "points": [
              "就语法知识而言，要帮助学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "引导学生根据正式或非正式场合，选择得体的方式进行沟通与交流。",
              "能选用正确的词语、句式和时态，通过口语或书面语篇描述、介绍人和事物，表达个人看法，表意清晰，话语基本通顺。"
            ],
            "domain": "语法与句法",
            "semester": "下",
            "prerequisites": [
              "eng-m-tenses-present"
            ],
            "courses": [
              "eng-m-tenses-past"
            ]
          },
          {
            "id": "eng-m-reading-strategies",
            "name": "阅读策略（略读/扫读/精读）",
            "points": [
              "引导学生充分利用语篇知识有效获取和传递信息，表达观点和态度。",
              "能运用一定的阅读策略，借助表格、思维导图等工具梳理书面语篇的主要信息，理解大意。",
              "在阅读稍长的语篇材料时，能理解主要内容，推断隐含信息，表达个人看法，提出合理疑问，分析和解决问题。"
            ],
            "domain": "语篇理解与书面表达",
            "prerequisites": [
              "eng-m-theme-vocabulary",
              "eng-m-tenses-present",
              "eng-e-story-retelling",
              "eng-e-vocab-600-words"
            ],
            "courses": [
              "eng-m-reading-strategies"
            ]
          },
          {
            "id": "eng-m-listening-basic",
            "name": "基础听力（对话/短文）",
            "points": [
              "能听懂相关主题的语篇，借助关键词句、图片等复述语篇内容。能利用语篇所给提示预测内容的发展，判断说话者的身份和关系，推断说话者的情感、态度和观点。",
              "要让学生学会根据重音、意群、语调与节奏等语音方面的变化，感知说话人表达的不同意义，准确地理解说话人的意图和态度。",
              "引导学生充分利用语篇知识有效获取和传递信息，表达观点和态度。"
            ],
            "domain": "听说交流",
            "prerequisites": [
              "eng-m-theme-vocabulary"
            ],
            "courses": [
              "eng-m-listening-basic"
            ]
          }
        ]
      },
      {
        "subject": "biology",
        "name": "初中生物",
        "nodes": [
          {
            "id": "bio-m-bio-characteristics",
            "name": "生物的基本特征",
            "points": [
              "细胞是生物体结构和功能的基本单位。细胞的分裂、分化和生长是细胞重要的生命活动。",
              "识别动植物细胞的结构并说出其异同点，说明细胞是生物体结构和功能的基本单位。",
              "为学生提供多种生物材料，指导学生制作临时装片，利用显微镜进行观察，使学生初步学会使用显微镜观察的方法，形成对细胞结构的感性认识。"
            ],
            "domain": "生物体的结构层次",
            "prerequisites": [
              "sci-e-living-vs-nonliving",
              "sci-e-classification"
            ],
            "courses": [
              "bio-characteristics"
            ]
          },
          {
            "id": "bio-m-microscope-use",
            "name": "显微镜的使用",
            "points": [
              "正确、规范地制作临时装片，使用显微镜进行观察，能够针对观察结果中可能出现的成像不佳等情况，从材料制备、仪器设备、操作程序等方面初步分析原因。",
              "为学生提供多种生物材料，指导学生制作临时装片，利用显微镜进行观察，使学生初步学会使用显微镜观察的方法，形成对细胞结构的感性认识。",
              "实验探究活动: 练习使用光学显微镜; 用显微镜观察池塘水中的微小生物;制作植物细胞、动物细胞的临时装片，用显微镜观察细胞结构。"
            ],
            "domain": "生物体的结构层次",
            "prerequisites": [
              "bio-m-bio-characteristics",
              "sci-e-tools-use"
            ],
            "courses": [
              "bio-microscope-use"
            ]
          },
          {
            "id": "bio-m-cell-basics",
            "name": "细胞基础",
            "points": [
              "细胞是生物体结构和功能的基本单位",
              "识别动植物细胞的结构并说出其异同点，说明细胞是生物体结构和功能的基本单位。",
              "指导学生制作临时装片，利用显微镜进行观察，使学生初步学会使用显微镜观察的方法，形成对细胞结构的感性认识。"
            ],
            "domain": "生物体的结构层次",
            "prerequisites": [
              "bio-m-microscope-use"
            ],
            "courses": [
              "bio-m-cell-basics"
            ]
          },
          {
            "id": "bio-m-cell-structure-m",
            "name": "细胞的结构",
            "points": [
              "动物细胞、植物细胞都具有细胞膜、细胞质、细胞核等结构。植物细胞具有不同于动物细胞的结构，如叶绿体和细胞壁。",
              "识别动植物细胞的结构并说出其异同点，说明细胞是生物体结构和功能的基本单位。",
              "制作植物细胞、动物细胞的临时装片，用显微镜观察细胞结构；尝试制作植物细胞或动物细胞的结构模型。"
            ],
            "domain": "生物体的结构层次",
            "semester": "上",
            "prerequisites": [
              "bio-m-cell-basics"
            ],
            "courses": [
              "bio-cell-structure"
            ]
          },
          {
            "id": "bio-m-cell-life-activities",
            "name": "细胞的生命活动",
            "points": [
              "细胞不同结构的功能各不相同，共同完成细胞的各项生命活动。",
              "运用示意图或模型等方式，展示和说明细胞各结构的功能及其相互关系。",
              "指导学生制作临时装片，利用显微镜进行观察，使学生初步学会使用显微镜观察的方法，形成对细胞结构的感性认识。"
            ],
            "domain": "生物体的结构层次",
            "prerequisites": [
              "bio-m-cell-structure-m"
            ],
            "courses": [
              "bio-cell-life"
            ]
          },
          {
            "id": "bio-m-cell-division-m",
            "name": "细胞分裂",
            "points": [
              "细胞能通过分裂和分化形成不同的组织",
              "描述细胞分裂和分化的基本过程；识别人体和植物体的主要组织；说明细胞通过分裂和分化形成各种组织，组织构成不同的器官",
              "引导学生通过观察某种器官不同组织的特点，基于事实进行科学推理，深入理解细胞分化的概念"
            ],
            "domain": "生物体的结构层次",
            "semester": "下",
            "prerequisites": [
              "bio-m-cell-life-activities"
            ],
            "courses": [
              "bio-cell-division",
              "bio-m-cell-division-m"
            ]
          },
          {
            "id": "bio-m-cell-division-junior",
            "name": "细胞分化",
            "points": [
              "细胞能通过分裂和分化形成不同的组织",
              "描述细胞分裂和分化的基本过程；识别人体和植物体的主要组织；说明细胞通过分裂和分化形成各种组织",
              "引导学生通过观察某种器官不同组织的特点，基于事实进行科学推理，深入理解细胞分化的概念"
            ],
            "domain": "生物体的结构层次",
            "prerequisites": [
              "bio-m-cell-division-m"
            ],
            "courses": [
              "biology-bio-m-cell-division-junior-6a130889"
            ]
          },
          {
            "id": "bio-m-tissue-types",
            "name": "组织与器官",
            "points": [
              "功能不同的组织可以形成器官，共同完成某种生理功能的器官可以形成系统。",
              "绿色开花植物体的结构层次包括细胞、组织、器官和个体，高等动物体的结构层次包括细胞、组织、器官、系统和个体。",
              "识别给定生物材料所属的结构层次，并阐明生物体在结构和功能上是一个有机整体。"
            ],
            "domain": "生物体的结构层次",
            "prerequisites": [
              "bio-m-cell-division-junior"
            ],
            "courses": [
              "bio-tissue-types"
            ]
          },
          {
            "id": "bio-m-biosphere",
            "name": "生物圈",
            "points": [
              "生态系统中的生物与非生物环境相互作用，实现了物质循环和能量流动。",
              "从结构与功能的角度，阐明生态系统中的生产者、消费者、分解者以及非生物环境是一个有机整体。",
              "分析人类活动对生态环境造成破坏的实例，形成保护生物圈的社会责任意识。"
            ],
            "domain": "生物与环境",
            "prerequisites": [
              "bio-m-bio-characteristics"
            ],
            "courses": [
              "bio-m-biosphere-scope",
              "biology-bio-m-biosphere-6a130aec"
            ]
          },
          {
            "id": "bio-m-eco-factors",
            "name": "生态因素",
            "points": [
              "生态因素能够影响生物的生活和分布，生物能够适应和影响环境",
              "从结构与功能的角度，阐明生态系统中的生产者、消费者、分解者以及非生物环境是一个有机整体",
              "通过资料分析、调查、实验探究等活动，引导学生认识生物与环境的关系"
            ],
            "domain": "生物与环境",
            "prerequisites": [
              "bio-m-biosphere"
            ],
            "courses": [
              "bio-eco-factors"
            ]
          },
          {
            "id": "bio-m-biosphere-scope",
            "name": "生物圈的范围",
            "points": [
              "生态系统是由生产者、消费者、分解者与非生物环境构成的有机整体。",
              "从结构与功能的角度，阐明生态系统中的生产者、消费者、分解者以及非生物环境是一个有机整体。",
              "结合具体实例，引导学生分析生态系统中各成分的作用及其相互关系，并用恰当的形式呈现，发展学生的建模思维。"
            ],
            "domain": "生物与环境",
            "prerequisites": [
              "bio-m-biosphere"
            ],
            "courses": [
              "bio-biosphere-scope",
              "bio-m-biosphere-scope"
            ]
          },
          {
            "id": "bio-m-food-chain",
            "name": "食物链与食物网",
            "points": [
              "生态系统中不同生物之间通过捕食关系形成了食物链和食物网",
              "运用图示或模型表示生态系统中各生物成分之间的营养关系",
              "结合具体实例，引导学生分析生态系统中各成分的作用及其相互关系，并用恰当的形式呈现，发展学生的建模思维"
            ],
            "domain": "生物与环境",
            "prerequisites": [
              "bio-m-biosphere-scope",
              "bio-m-eco-factors"
            ],
            "courses": [
              "bio-food-chain"
            ]
          },
          {
            "id": "bio-m-biosphere-largest",
            "name": "生物圈是最大的生态系统",
            "points": [
              "生物圈是包含多种类型生态系统的最大生态系统",
              "分析人类活动对生态环境造成破坏的实例，形成保护生物圈的社会责任意识。",
              "通过各种途径收集生物圈的相关资料，模拟召开“生物圈国际保护”研讨会，结合本地实际讨论如何保护生物圈。"
            ],
            "domain": "生物与环境",
            "prerequisites": [
              "bio-m-food-chain"
            ],
            "courses": [
              "bio-biosphere-largest"
            ]
          },
          {
            "id": "bio-m-plant-structure",
            "name": "绿色植物整体结构",
            "points": [
              "植物分布广泛，直接或间接地为其他生物提供食物和能量；植物参与生物圈中的水循环，维持生物圈中的碳氧平衡。",
              "通过本主题的学习，学生能够理解植物体的构造与功能、植物的生活与生产、植物在生物圈中的作用。",
              "识别给定生物材料所属的结构层次，并阐明生物体在结构和功能上是一个有机整体。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-cell-basics",
              "sci-e-plant-parts",
              "sci-e-plant-life-cycle"
            ],
            "courses": [
              "bio-m-plant-structure"
            ]
          },
          {
            "id": "bio-m-seed-structure",
            "name": "种子结构与萌发",
            "points": [
              "概念4 植物有自己的生命周期，可以制造有机物，直接或间接地为其他生物提供食物，参与生物圈的水循环，并维持碳氧平衡。",
              "4.1.1 种子包括种皮和胚等结构，种子萌发需要完整、有活力的胚，需要充足的空气、适宜的温度、适量的水等环境条件。",
              "描述种子萌发的过程和条件；说明植物体的结构层次；阐明植物体在结构和功能上是一个统一整体。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-plant-structure"
            ],
            "courses": [
              "bio-seed-structure"
            ]
          },
          {
            "id": "bio-m-root-tip",
            "name": "根尖结构",
            "points": [
              "植物通过根吸收水和无机盐，满足植物生长发育的需要。",
              "根尖是根吸收水和无机盐的主要部位。",
              "通过实验，探究植物对水和无机盐的吸收、运输和散失过程。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-seed-structure"
            ],
            "courses": [
              "bio-root-tip"
            ]
          },
          {
            "id": "bio-m-stem-transport",
            "name": "茎的运输作用",
            "points": [
              "概念4 植物通过吸收作用和蒸腾作用参与生物圈的水循环，通过光合作用和呼吸作用参与生物圈的碳氧平衡",
              "4.2 植物通过吸收、运输和蒸腾作用参与生物圈的水循环",
              "4.2.2 植物茎中具有运输功能的输导组织"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-root-tip"
            ],
            "courses": [
              "bio-stem-transport"
            ]
          },
          {
            "id": "bio-m-leaf-structure",
            "name": "叶片结构",
            "points": [
              "植物细胞具有不同于动物细胞的结构，如叶绿体和细胞壁等。",
              "识别动植物细胞的结构并说出其异同点，说明细胞是生物体结构和功能的基本单位。",
              "指导学生在感性认识的基础上，通过比较、归纳等方法，找出不同类型细胞的共同特征，并运用模式图或模型等方式展现细胞的结构。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-stem-transport"
            ],
            "courses": [
              "bio-leaf-structure"
            ]
          },
          {
            "id": "bio-m-photosynthesis-m",
            "name": "光合作用",
            "points": [
              "概念 3.1.5 生态系统中的物质和能量通过食物链在生物之间传递",
              "通过本主题的学习，学生能够认识到植物分布广泛，直接或间接地为其他生物提供食物和能量；植物参与生物圈中的水循环，维持生物圈中的碳氧平衡。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-leaf-structure",
              "bio-m-cell-structure-m",
              "sci-e-photosynthesis-intro"
            ],
            "courses": [
              "bio-m-photosynthesis-m",
              "bio-photosynthesis"
            ]
          },
          {
            "id": "bio-m-respiration-m",
            "name": "呼吸作用",
            "points": [
              "概念4 植物通过光合作用和呼吸作用参与生物圈中的物质循环和能量流动，维持生物圈中的碳氧平衡。",
              "4.2.2 植物通过呼吸作用分解有机物，释放能量，供给植物生命活动的需要。",
              "（2）通过实验探究绿色植物的光合作用和呼吸作用，阐明绿色植物在生物圈中的作用。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-photosynthesis-m"
            ],
            "courses": [
              "bio-respiration"
            ]
          },
          {
            "id": "bio-m-transpiration",
            "name": "蒸腾作用",
            "points": [
              "植物通过根吸收水分，通过导管运输水分，通过叶片散失水分，从而参与生物圈中的水循环。",
              "阐明植物在生物圈水循环中的作用。",
              "通过实验，探究蒸腾作用的主要器官。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-leaf-structure"
            ],
            "courses": [
              "bio-transpiration"
            ]
          },
          {
            "id": "bio-m-flower-structure",
            "name": "花的结构与传粉",
            "points": [
              "概念4 植物有自己的生命周期，可以制造有机物，直接或间接地为其他生物提供食物，参与生物圈的水循环，并维持碳氧平衡。",
              "4.2.1 花是植物的生殖器官，其结构有利于完成传粉和受精。",
              "4.2.2 植物可以通过不同的媒介（如风、昆虫）完成传粉。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-transpiration"
            ],
            "courses": [
              "bio-flower-structure"
            ]
          },
          {
            "id": "bio-m-fruit-seed-formation",
            "name": "果实与种子的形成",
            "points": [
              "概念4 植物有自己的生命周期，可以制造有机物，直接或间接地为其他生物提供食物，参与生物圈的水循环，并维持碳氧平衡。",
              "4.2.2 花经过传粉和受精后形成果实和种子。",
              "描述花的基本结构，阐明花与果实和种子形成的关系。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-flower-structure"
            ],
            "courses": [
              "bio-fruit-seed"
            ]
          },
          {
            "id": "bio-m-asexual-reproduction",
            "name": "植物的无性生殖",
            "points": [
              "无性生殖是植物繁殖的一种方式，如扦插、嫁接等，能够保持母本的优良性状。",
              "通过观察或实验，描述植物的无性生殖过程，并举例说明其在农业生产中的应用。",
              "组织学生开展植物扦插、嫁接等实践活动，体验无性生殖的技术方法。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-fruit-seed-formation"
            ],
            "courses": [
              "bio-asexual-repro"
            ]
          },
          {
            "id": "bio-m-plant-classification",
            "name": "植物的主要类群",
            "points": [
              "根据生物的形态结构、生理功能以及繁殖方式等，可以将生物分为不同的类群。",
              "藻类是能够进行光合作用的结构简单的生物。苔藓、蕨类、裸子植物和被子植物都具有根、茎、叶等器官的分化，植物繁殖过程逐渐摆脱了对水环境的依赖。",
              "通过列表等多种方式，对不同生物类群的形态结构、生活环境、繁殖方式等进行比较，帮助学生逐步形成生物具有多样性和统一性的认识。"
            ],
            "domain": "植物的结构与生理",
            "prerequisites": [
              "bio-m-asexual-reproduction"
            ],
            "courses": [
              "bio-plant-classify"
            ]
          },
          {
            "id": "bio-m-human-body-overview",
            "name": "人体概述",
            "points": [
              "人体生理与健康是课程内容七个学习主题之一，包含人体概述与消化系统等基础知识。",
              "获得人体生理与健康等方面的基础知识；初步形成生物学的结构与功能观等生命观念。",
              "关注身体内外各种因素对健康的影响，在饮食作息等方面形成健康生活的态度和行为习惯。"
            ],
            "domain": "人体结构与功能",
            "prerequisites": [
              "bio-m-tissue-types",
              "sci-e-human-body-systems",
              "sci-e-senses"
            ],
            "courses": [
              "bio-human-overview"
            ]
          },
          {
            "id": "bio-m-digestion-system",
            "name": "消化系统",
            "points": [
              "5. 1 人体通过消化系统从外界获取生命活动所需的营养物质",
              "5.1.1 水、无机盐、糖类、蛋白质、脂质和维生素是人体生命 活动所需的主要营养物质",
              "5.1.2 消化系统由消化道和消化腺组成"
            ],
            "domain": "人体结构与功能",
            "prerequisites": [
              "bio-m-human-body-overview"
            ],
            "courses": [
              "bio-digestion"
            ]
          },
          {
            "id": "bio-m-respiratory-system",
            "name": "呼吸系统",
            "points": [
              "人体生理与健康主题包含呼吸系统与气体交换等内容，学生应掌握人体各系统的结构和功能。",
              "学生能够说明呼吸系统与气体交换的基本过程，理解其对人体的重要性。",
              "通过实验探究活动，如模拟呼吸运动或测量肺活量，帮助学生理解呼吸系统的结构与功能。"
            ],
            "domain": "人体结构与功能",
            "prerequisites": [
              "bio-m-digestion-system"
            ],
            "courses": [
              "bio-respiratory"
            ]
          },
          {
            "id": "bio-m-circulatory-system",
            "name": "循环系统",
            "points": [
              "人体生理与健康主题包含血液循环系统相关内容，学生应掌握人体生理与健康的基础知识。",
              "学生应能说明血液循环系统等器官系统在维持人体正常生理功能中的作用。",
              "通过观察模型、示意图或视频等，引导学生理解血液循环系统的结构与功能。"
            ],
            "domain": "人体结构与功能",
            "prerequisites": [
              "bio-m-respiratory-system"
            ],
            "courses": [
              "bio-circulation",
              "bio-m-circulatory-system"
            ]
          },
          {
            "id": "bio-m-circulation-respiration",
            "name": "循环与呼吸综合",
            "points": [
              "人体生理与健康学习主题包括循环系统与呼吸系统等内容，要求学生掌握人体生理与健康的基础知识。",
              "学生应获得人体生理与健康等方面的基础知识，初步形成结构与功能观等生命观念。",
              "树立健康意识和社会责任感，关注身体内外各种因素对健康的影响，形成健康生活的态度和行为习惯。"
            ],
            "domain": "人体结构与功能",
            "prerequisites": [
              "bio-m-circulatory-system"
            ],
            "courses": [
              "bio-m-circulation-respiration"
            ]
          },
          {
            "id": "bio-m-excretory-system",
            "name": "排泄系统",
            "points": [
              "概念5 人体通过泌尿系统排出代谢废物，维持内环境的稳定",
              "5.3.1 泌尿系统包括肾脏、输尿管、膀胱和尿道等器官",
              "5.3.2 肾脏是形成尿液的器官，其结构和功能的基本单位是肾单位"
            ],
            "domain": "人体结构与功能",
            "prerequisites": [
              "bio-m-circulatory-system"
            ],
            "courses": [
              "bio-excretory"
            ]
          },
          {
            "id": "bio-m-urinary-nervous",
            "name": "泌尿系统",
            "points": [
              "5.4 人体主要通过泌尿系统排出代谢废物和多余的水",
              "5.4.1 泌尿系统包括肾胜、和输尿管、膀胱和尿道等结构",
              "5.4.2 血液经过肾小球和肾小吉的滤过作用及肾小管的重吸收 作用形成尿液 5. 4. 3 人体可以通过汗腺排出部分尿素、无机盐和水等物质"
            ],
            "domain": "人体结构与功能",
            "prerequisites": [
              "bio-m-excretory-system"
            ],
            "courses": [
              "bio-m-urinary-nervous"
            ]
          },
          {
            "id": "bio-m-nervous-system-m",
            "name": "神经系统",
            "points": [
              "5.5.1 神经系统由脑、养莫及与它们相连的神经构成 5. 5. 2 反射是神经调节的基本方式，反射弧是反射的结构基础",
              "5.5.3 人体的运动是在神经系统支配下，由肌肉牵拉着骨围绕 关节进行的"
            ],
            "domain": "人体结构与功能",
            "prerequisites": [
              "bio-m-urinary-nervous"
            ],
            "courses": [
              "bio-nervous-system"
            ]
          },
          {
            "id": "bio-m-endocrine-system-m",
            "name": "内分泌系统",
            "points": [
              "5. 5.5 甲状腺激素、胰岛素等激素参与人体生命活动的调节 5. 5.6 性激素能促进生殖器官的发育，对第二性征的发育和维 持具有重要作用",
              "5.5.7 人在青春期会出现一些显著的生理变化，如身高和体重 迅速增加、出现第二性征、各项生理功能增强等"
            ],
            "domain": "人体结构与功能",
            "prerequisites": [
              "bio-m-nervous-system-m"
            ],
            "courses": [
              "bio-endocrine"
            ]
          },
          {
            "id": "bio-m-reproduction-development",
            "name": "人的生殖与发育",
            "points": [
              "概念1 生物体具有一定的结构层次，能够完成各项生命活动。1.2.2 高等动物体的结构层次包括细胞、组织、器官、系统和个体。",
              "描述细胞分裂和分化的基本过程；识别人体和植物体的主要组织；说明细胞通过分裂和分化形成各种组织，组织构成不同的器官。",
              "运用实物、图片、影像资料等教学资源，直观展现多细胞生物体的结构层次，引导学生形成生物体是一个统一整体的认识。"
            ],
            "domain": "人体结构与功能",
            "semester": "下",
            "prerequisites": [
              "bio-m-endocrine-system-m"
            ],
            "courses": [
              "bio-reproduction"
            ]
          }
        ]
      },
      {
        "subject": "geography",
        "name": "初中地理",
        "nodes": [
          {
            "id": "geo-m-earth-shape-size",
            "name": "地球的形状与大小",
            "points": [
              "结合科学故事、史实材料等，说出人类对地球形状的认识过程，使用数据、类比等方式描述地球的大小。",
              "能够借助相关资料以及教具、学具等，描述人类认识地球形状的过程，领悟求真务实、勇于创新的科学精神；能够说出地球在宇宙环境中的位置、地球的大小，初步建立科学的宇宙观。"
            ],
            "domain": "地球与地图",
            "courses": [
              "geography-earth-shape-size"
            ]
          },
          {
            "id": "geo-m-earth-basics",
            "name": "地球基础知识",
            "points": [
              "地理课程内容结构中的“认识全球”部分，将地球整体作为学习对象，认识地球所处的宇宙环境、地球的自转和公转运动、地球表层的自然和人文环境。",
              "“地理工具”侧重地球仪、地图的基础知识和应用, “地理实践”则以多种方式贯穿全部课程内容。",
              "运用地球仪或软件，演示地球的自转运动，说出地球的自转方向、周期。"
            ],
            "domain": "地球与地图",
            "prerequisites": [
              "geo-m-earth-shape-size"
            ],
            "courses": [
              "geo-m-earth-basics"
            ]
          },
          {
            "id": "geo-m-globe-coordinates",
            "name": "经纬网与地球坐标",
            "points": [
              "运用地球仪或软件，演示地球的自转运动，说出地球的自转方向、周期。",
              "运用模型或软件，演示地球的公转和运动，说出地球的公转方向、周期。",
              "“地理工具”侧重地球仪、地图的基础知识和应用。"
            ],
            "domain": "地球与地图",
            "prerequisites": [
              "geo-m-earth-shape-size"
            ],
            "courses": [
              "geo-m-globe-coordinates"
            ]
          },
          {
            "id": "geo-m-earth-motion-m",
            "name": "地球的自转与公转",
            "points": [
              "运用地球仪或软件，演示地球的自转运动，说出地球的自转方向、周期。",
              "运用模型或软件，演示地球的公转和运动，说出地球的公转方向、周期。",
              "结合实例，说出地球自转产生的主要自然现象及其对人们生产生活的影响。"
            ],
            "domain": "地球与地图",
            "prerequisites": [
              "geo-m-globe-coordinates"
            ],
            "courses": [
              "geo-m-earth-motion-m"
            ]
          },
          {
            "id": "geo-m-seasons-m",
            "name": "四季更替与昼夜长短",
            "points": [
              "运用模型或软件，演示地球的公转运动，说出地球的公转方向、周期。",
              "结合实例，说出地球公转产生的主要自然现象及其对人们生产生活的影响。",
              "能够举例说明地球运动所产生的主要自然现象及其对人们生产生活的影响。"
            ],
            "domain": "地球与地图",
            "prerequisites": [
              "geo-m-earth-motion-m"
            ],
            "courses": [
              "geo-m-seasons-m"
            ]
          },
          {
            "id": "geo-m-map-reading",
            "name": "地图的阅读（比例尺/方向/图例）",
            "points": [
              "地理工具侧重地球仪、地图的基础知识和应用。",
              "能够运用地图及其他地理工具，观察、描述地球表层陆地、海洋的基本面貌。"
            ],
            "domain": "地球与地图",
            "prerequisites": [
              "geo-m-globe-coordinates"
            ],
            "courses": [
              "geo-m-map-reading"
            ]
          },
          {
            "id": "geo-m-topographic-map",
            "name": "等高线与地形图",
            "points": [
              "通过阅读地形图、图像，观看影视资料，观察地形模型或实地考察等，区别山地、丘陵、高原、平原、盆地的形态特征。",
              "运用地图及其他地理工具，观察、描述地球表层陆地、海洋的基本面貌，说出地形、气候等自然环境要素的基本状况。"
            ],
            "domain": "地球与地图",
            "prerequisites": [
              "geo-m-map-reading"
            ],
            "courses": [
              "geo-m-contour-topographic"
            ]
          },
          {
            "id": "geo-m-continents-oceans",
            "name": "大洲大洋与海陆变迁",
            "points": [
              "阅读世界地图，描述世界海陆分布状况，说出七大洲、四大洋的分布。",
              "运用地图和相关资料，描述某大洲的地理位置，并依据大洲地理位置特点，判断大洲所处热量带和降水的空间分布概况。",
              "学习本主题后，学生能够运用地图及其他地理工具，观察、描述地球表层陆地、海洋的基本面貌。"
            ],
            "domain": "世界地理",
            "prerequisites": [
              "geo-m-globe-coordinates"
            ],
            "courses": [
              "geo-m-continents-oceans"
            ]
          },
          {
            "id": "geo-m-terrain-types",
            "name": "世界地形类型",
            "points": [
              "通过阅读地形图、图像，观看影视资料，观察地形模型或实地考察等，区别山地、丘陵、高原、平原、盆地的形态特征。",
              "在世界地形图上指出陆地主要地形和海底主要地形的分布，观察地形分布大势。"
            ],
            "domain": "世界地理",
            "prerequisites": [
              "geo-m-continents-oceans",
              "geo-m-topographic-map"
            ],
            "courses": [
              "geo-m-terrain-types"
            ]
          },
          {
            "id": "geo-m-climate-basics",
            "name": "气候基础（天气/气温/降水）",
            "points": [
              "收看天气预报节目，识别常见的天气符号，模拟播报天气。",
              "结合实例，说明天气和气候对人们生产生活的影响。",
              "阅读世界气候类型分布图，描述世界主要气候类型的分布特征；结合实例，说明纬度位置、海陆分布、地形等对气候的影响。"
            ],
            "domain": "世界地理",
            "prerequisites": [
              "geo-m-seasons-m"
            ],
            "courses": [
              "geo-m-climate-basics"
            ]
          },
          {
            "id": "geo-m-climate-m",
            "name": "世界气候类型与分布",
            "points": [
              "阅读世界气候类型分布图，描述世界主要气候类型的分布特征；结合实例，说明纬度位置、海陆分布、地形等对气候的影响。",
              "结合实例，说明天气和气候对人们生产生活的影响。",
              "能够运用地图及其他地理工具，观察、描述地球表层陆地、海洋的基本面貌，说出地形、气候等自然环境要素的基本状况。"
            ],
            "domain": "世界地理",
            "prerequisites": [
              "geo-m-climate-basics"
            ],
            "courses": [
              "geo-m-climate-m"
            ]
          },
          {
            "id": "geo-m-population-distribution",
            "name": "世界人口与人种",
            "points": [
              "运用地图和相关资料，描述并简要归纳世界人口数量变化和人口空间分布特点。",
              "运用反映人种、语言、宗教、习俗等内容的图文资料，描述世界文化的丰富多彩，树立尊重世界文化多样性的意识。",
              "能够观察、描述地球上人口、城乡、文化等人文环境要素的基本状况，以及人类活动对自然环境的影响。"
            ],
            "domain": "世界地理",
            "prerequisites": [
              "geo-m-climate-m"
            ],
            "courses": [
              "geo-m-population-distribution"
            ]
          },
          {
            "id": "geo-m-world-regions",
            "name": "世界地理分区",
            "points": [
              "运用地图和相关资料，描述某地区的地理位置，简要归纳自然地理特征，说明该特征对当地人们生产生活的影响。",
              "以某地区的一种自然资源为例，说出该资源在当地的分布状况、对外输出地区以及对当地乃至世界的重要意义。",
              "结合实例，说明某地区发展旅游业的优势。"
            ],
            "domain": "世界地理",
            "prerequisites": [
              "geo-m-climate-m",
              "geo-m-continents-oceans"
            ],
            "courses": [
              "geo-m-world-regions"
            ]
          },
          {
            "id": "geo-m-world-countries",
            "name": "世界主要国家（日/俄/美/澳/巴西等）",
            "points": [
              "运用地图和相关资料，说出某国家的地理位置、范围、领土构成和首都，选择与该国地理位置差异明显的国家，比较它们纬度位置和海陆位置的差异。",
              "运用地图和相关资料，描述某国家突出的自然地理特征。",
              "运用地图和相关资料，说出某国家人文地理主要特点及其与自然地理环境的联系。"
            ],
            "domain": "世界地理",
            "prerequisites": [
              "geo-m-world-regions"
            ],
            "courses": [
              "geo-m-world-countries"
            ]
          }
        ]
      },
      {
        "subject": "history",
        "name": "初中历史",
        "nodes": [
          {
            "id": "hist-m-prehistoric",
            "name": "史前时期（元谋人/北京人/半坡/河姆渡）",
            "points": [
              "通过了解元谋人、蓝田人、北京人等旧石器时代的人类及其文化遗存，知道中国境内原始社会时期的人类活动。",
              "通过了解河姆渡、半坡、良渚、陶寺等新石器时代的文化遗存，知道中国的原始农耕生活。",
              "了解私有制、阶级和早期国家的产生；知道考古发现是了解原始社会的重要依据。"
            ],
            "domain": "中国古代史",
            "courses": [
              "hist-m-prehistoric"
            ]
          },
          {
            "id": "hist-m-early-civilizations",
            "name": "早期国家的形成",
            "points": [
              "通过了解元谋人、蓝田人、北京人等旧石器时代的人类及其文化遗存，知道中国境内原始社会时期的人类活动；通过了解河姆渡、半坡、良渚、陶寺等新石器时代的文化遗存，知道中国的原始农耕生活。",
              "了解私有制、阶级和早期国家的产生；知道考古发现是了解原始社会的重要依据；通过古代文献中记述的黄帝、炎帝等神话传说，了解其中蕴含的历史信息。",
              "知道具有奴隶制特点的夏、商、西周王朝的建立与发展，了解西周分封制等重要制度。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-prehistoric"
            ],
            "courses": [
              "hist-m-early-civilizations"
            ]
          },
          {
            "id": "hist-m-xia-shang-zhou",
            "name": "夏商西周",
            "points": [
              "知道甲骨文是已知最早的汉字；通过了解甲骨文、青铜铭文、其他文献记载和典型器物，知道具有奴隶制特点的夏、商、西周王朝的建立与发展，了解西周分封制等重要制度。",
              "通过了解这一时期的生产力水平和社会关系的变化，初步理解春秋时期诸侯争霸局面的形成、战国时期商鞅变法等改革和“百家争鸣”局面的产生。",
              "能够了解中国古代历史的基本线索和重要的事件、人物、现象，知道重大史事发生的时间和地点、原因和结果，初步养成历史时序意识和历史空间感。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-prehistoric"
            ],
            "courses": [
              "hist-m-xia-shang-zhou"
            ]
          },
          {
            "id": "hist-m-spring-autumn-warring",
            "name": "春秋战国",
            "points": [
              "东周分为春秋、战国两个阶段。春秋时期，王室衰微，诸侯争霸，分封制度渐趋瓦解。战国时期，铁农具和牛耕的推广，促进了农业发展。各诸侯国的变法推动了社会进步，思想文化出现了“百家争鸣”的繁荣局面。",
              "通过了解这一时期的生产力水平和社会关系的变化，初步理解春秋时期诸侯争霸局面的形成、战国时期商鞅变法等改革和“百家争鸣”局面的产生。",
              "能够了解中国古代历史的基本线索和重要的事件、人物、现象，知道重大史事发生的时间和地点、原因和结果，初步养成历史时序意识和历史空间感。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-xia-shang-zhou"
            ],
            "courses": [
              "hist-m-spring-autumn-warring"
            ]
          },
          {
            "id": "hist-m-qin-han-unification",
            "name": "秦汉大一统",
            "points": [
              "通过了解秦朝统一、陈胜和吴广等领导的秦末农民起义、西汉“削藩”和尊崇儒术，知道统一多民族封建国家建立和早期发展的过程",
              "通过了解休养生息政策、“文景之治”、张骞通西域、“丝绸之路”的开辟、汉武帝的大一统，知道西汉从建立之初的社会残破发展到国力强盛的变化及原因",
              "能够通过中国古代历史发展的总体趋势，认识统一多民族国家形成、巩固和发展的重要历史意义"
            ],
            "domain": "中国古代史",
            "semester": "上",
            "prerequisites": [
              "hist-m-spring-autumn-warring"
            ],
            "courses": [
              "hist-m-qin-han-unification"
            ]
          },
          {
            "id": "hist-m-imperial-unification",
            "name": "秦汉统一多民族国家",
            "points": [
              "通过了解秦朝统一、陈胜和吴广等领导的秦末农民起义、西汉“削藩”和尊崇儒术，知道统一多民族封建国家建立和早期发展的过程。",
              "能够通过了解中国古代历史发展的总体趋势，认识统一多民族国家形成、巩固和发展的重要历史意义。",
              "中国古代史的教学，要通过把握中国古代历史发展的基本线索及相关重要史事，围绕统一多民族国家形成、巩固和发展的过程展开。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-qin-han-unification"
            ],
            "courses": [
              "imperial-unification"
            ]
          },
          {
            "id": "hist-m-three-kingdoms-sui-tang",
            "name": "三国两晋南北朝与隋唐",
            "points": [
              "通过了解三国两晋南北朝时期的政权更迭和北魏孝文帝改革、人口迁徙和区域开发，认识这一时期民族交往交流交融的历史特点及其对中华民族发展的意义。",
              "通过了解隋朝的兴亡、“贞观之治”与“开元盛世”，知道隋朝速亡和唐朝兴盛的原因；了解科举制度创建、大运河开通、文成公主入藏、鉴真东渡、玄奘西行等史事，从制度、经济、文学艺术、民族交往、中外文化交流等方面…",
              "能够了解中国古代历史的基本线索和重要的事件、人物、现象，知道重大史事发生的时间和地点、原因和结果，初步养成历史时序意识和历史空间感。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-imperial-unification"
            ],
            "courses": [
              "history-sanguo-sui-tang"
            ]
          },
          {
            "id": "hist-m-tang-song-prosperity",
            "name": "唐宋繁荣",
            "points": [
              "通过了解隋朝的兴亡、“贞观之治”与“开元盛世”，知道隋朝速亡和唐朝兴盛的原因；了解科举制度创建、大运河开通、文成公主入藏、鉴真东渡、玄奘西行等史事，从制度、经济、文学艺术、民族交往、中外文化交流等方面…",
              "认识北宋面临的新形势，了解辽、宋、西夏的并立与北宋强化中央集权和重文轻武的政策；通过了解宋金之战、南宋偏安和南方地区的经济繁荣，知道中国古代经济重心的进一步南移；通过了解蒙古兴起和元朝统一，设立行省、…",
              "能够了解中国古代历史的基本线索和重要的事件、人物、现象，知道重大史事发生的时间和地点、原因和结果，初步养成历史时序意识和历史空间感。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-three-kingdoms-sui-tang"
            ],
            "courses": [
              "hist-m-tang-song-prosperity"
            ]
          },
          {
            "id": "hist-m-song-yuan-ming-qing",
            "name": "宋元明清",
            "points": [
              "通过了解蒙古兴起和元朝统一，设立行省、宣政院等制度，知道西藏在元代正式纳入中国版图，理解元朝统一对中华民族进一步交融的重要意义。",
              "通过了解明清时期加强皇权的举措，初步认识君主专制带来的社会弊端；通过了解明清时期的经济改革和全球性经济互动，初步认识这一阶段中国经济发展的内因和外因。",
              "能够了解中国古代历史的基本线索和重要的事件、人物、现象，知道重大史事发生的时间和地点、原因和结果，初步养成历史时序意识和历史空间感。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-three-kingdoms-sui-tang"
            ],
            "courses": [
              "hist-m-song-yuan-ming-qing"
            ]
          },
          {
            "id": "hist-m-ming-qing-decline",
            "name": "明清衰落与闭关锁国",
            "points": [
              "通过了解明清时期加强皇权的举措，初步认识君主专制带来的社会弊端；通过了解明清时期的经济改革和全球性经济互动，初步认识这一阶段中国经济发展的内因和外因。",
              "通过郑和下西洋、戚继光抗倭等史事，了解明朝的对外关系；通过了解郑成功收复台湾、清朝在台湾的建制、册封达赖和班禅以及设置驻藏大臣等中央政权在边疆地区的各种举措，认识西藏地区、新疆地区、南海诸岛、台湾及其…",
              "通过了解《本草纲目》《天工开物》《农政全书》，认识明朝的科技成就及其影响；通过了解小说、戏曲的繁荣，知道明清时期文学艺术的特色；通过明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，…"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-song-yuan-ming-qing"
            ],
            "courses": [
              "hist-m-ming-qing-decline"
            ]
          },
          {
            "id": "hist-m-ancient-culture",
            "name": "中国古代文化成就",
            "points": [
              "通过了解这一时期的科技和艺术成就，如祖冲之的数学成就，认识传统文化的继承与创新。",
              "通过印刷术、指南针、火药的应用和外传，认识中国古代的重要发明对世界文明发展的贡献。",
              "通过了解《本草纲目》《天工开物》《农政全书》，认识明朝的科技成就及其影响。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-song-yuan-ming-qing"
            ],
            "courses": [
              "hist-m-ancient-culture"
            ]
          },
          {
            "id": "hist-m-ming-qing-economy",
            "name": "明清经济发展与对外关系",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-song-yuan-ming-qing"
            ],
            "courses": [
              "hist-m-ming-qing-economy"
            ]
          },
          {
            "id": "hist-m-mongol-empire",
            "name": "蒙古崛起与元朝统一",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-song-yuan-ming-qing"
            ],
            "courses": [
              "hist-m-mongol-empire"
            ]
          },
          {
            "id": "hist-m-silk-road",
            "name": "丝绸之路与东西方交流",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-qin-han-unification"
            ],
            "courses": [
              "hist-m-silk-road"
            ]
          },
          {
            "id": "hist-m-song-technology",
            "name": "宋代科技与社会生活",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-tang-song-prosperity"
            ],
            "courses": [
              "hist-m-song-technology"
            ]
          },
          {
            "id": "hist-m-sui-tang-ruling",
            "name": "隋唐制度与盛世",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-m-imperial-unification"
            ],
            "courses": [
              "hist-m-sui-tang-ruling"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "初中道德与法治",
        "nodes": [
          {
            "id": "pol-m-g7-lo-u1",
            "name": "珍惜青春时光",
            "points": [
              "【课标】正确认识自我，接纳青春期变化，形成积极稳定的情绪情感，养成自尊自信人格。",
              "【教材·下·珍惜青春时光】青春正当时；做情绪情感的主人"
            ],
            "domain": "成长中的我",
            "semester": "下",
            "prerequisites": [
              "pol-m-g7-up-u4"
            ],
            "courses": [
              "pol-m-g7-lo-u1"
            ]
          },
          {
            "id": "pol-m-g7-up-u1",
            "name": "少年有梦",
            "points": [
              "【课标】正确认识自我，接纳青春期变化，形成积极稳定的情绪情感，养成自尊自信人格。",
              "【教材·上·少年有梦】开启初中生活；正确认识自我；梦想始于当下"
            ],
            "domain": "成长中的我",
            "semester": "上",
            "courses": [
              "pol-m-g7-up-u1"
            ]
          },
          {
            "id": "pol-m-g7-lo-u2",
            "name": "焕发青春活力",
            "points": [
              "【课标】珍爱生命，具有安全意识、规则意识和法治观念，能够自我保护、自我调控。",
              "【教材·下·焕发青春活力】人贵自尊；自信给人力量；人生当自强"
            ],
            "domain": "我与他人和集体",
            "semester": "下",
            "prerequisites": [
              "pol-m-g7-lo-u1"
            ],
            "courses": [
              "pol-m-g7-lo-u2"
            ]
          },
          {
            "id": "pol-m-g7-up-u2",
            "name": "成长的时空",
            "points": [
              "【课标】珍爱生命，具有安全意识、规则意识和法治观念，能够自我保护、自我调控。",
              "【教材·上·成长的时空】幸福和睦的家庭；和谐的师生关系；友谊之树常青；在集体中成长"
            ],
            "domain": "我与他人和集体",
            "semester": "上",
            "prerequisites": [
              "pol-m-g7-up-u1"
            ],
            "courses": [
              "pol-m-g7-up-u2"
            ]
          },
          {
            "id": "pol-m-g7-lo-u3",
            "name": "传承中华优秀传统文化",
            "points": [
              "【课标】具有亲社会态度和行为，懂得维护集体荣誉，构建和谐人际关系。",
              "【教材·下·传承中华优秀传统文化】传承核心思想理念；弘扬中华人文精神；践行中华传统美德"
            ],
            "domain": "珍爱生命与健康",
            "semester": "下",
            "prerequisites": [
              "pol-m-g7-lo-u2"
            ],
            "courses": [
              "pol-m-g7-lo-u3"
            ]
          },
          {
            "id": "pol-m-g7-up-u3",
            "name": "珍爱我们的生命",
            "points": [
              "【课标】具有亲社会态度和行为，懂得维护集体荣誉，构建和谐人际关系。",
              "【教材·上·珍爱我们的生命】生命可贵；守护生命安全；保持身心健康"
            ],
            "domain": "珍爱生命与健康",
            "semester": "上",
            "prerequisites": [
              "pol-m-g7-up-u2"
            ],
            "courses": [
              "pol-m-g7-up-u3"
            ]
          },
          {
            "id": "pol-m-g7-lo-u4",
            "name": "生活在法治社会",
            "points": [
              "【课标】树立正确人生观、价值观，明确人生目标，努力成为担当民族复兴大任的时代新人。",
              "【教材·下·生活在法治社会】法律为我们护航；走近民法典；远离违法犯罪"
            ],
            "domain": "我与国家和社会",
            "semester": "下",
            "prerequisites": [
              "pol-m-g7-lo-u3"
            ],
            "courses": [
              "pol-m-g7-lo-u4"
            ]
          },
          {
            "id": "pol-m-g7-up-u4",
            "name": "追求美好人生",
            "points": [
              "【课标】树立正确人生观、价值观，明确人生目标，努力成为担当民族复兴大任的时代新人。",
              "【教材·上·追求美好人生】确立人生目标；端正人生态度；实现人生价值"
            ],
            "domain": "我与国家和社会",
            "semester": "上",
            "prerequisites": [
              "pol-m-g7-up-u3"
            ],
            "courses": [
              "pol-m-g7-up-u4"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "初中信息科技",
        "nodes": [
          {
            "id": "it-m-internet-architecture",
            "name": "互联网结构与协议初识",
            "points": [
              "理解互联网基本结构，知道常见协议的作用。"
            ],
            "domain": "互联网应用与创新"
          },
          {
            "id": "it-m-web-development",
            "name": "网页与在线应用制作",
            "points": [
              "运用工具制作简单网页或在线应用，服务真实需求。"
            ],
            "domain": "互联网应用与创新",
            "prerequisites": [
              "it-m-internet-architecture"
            ]
          },
          {
            "id": "it-m-cloud-collaboration",
            "name": "云存储与在线协作",
            "points": [
              "体验云存储与协作工具，规范进行数字作品管理。"
            ],
            "domain": "互联网应用与创新",
            "prerequisites": [
              "it-m-internet-architecture"
            ]
          },
          {
            "id": "it-m-algorithm-design",
            "name": "算法设计与程序实现",
            "points": [
              "分析实际问题，设计算法并用程序语言实现。"
            ],
            "domain": "数据与算法"
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "初中心理健康教育",
        "nodes": [
          {
            "id": "psych-m-g7-study-adapt",
            "name": "学习适应与情绪管理",
            "points": [
              "发展学习能力，改善学习方法，提高学习效率。",
              "进行积极的情绪体验与表达，并对自己的情绪进行有效管理，正确处理厌学心理。"
            ],
            "domain": "学习辅导",
            "prerequisites": [
              "psych-m-g7-self-identity"
            ],
            "courses": [
              "psych-m-g7-study-adapt"
            ]
          },
          {
            "id": "psych-m-g7-self-identity",
            "name": "自我认识与青春期适应",
            "points": [
              "加强自我认识，客观评价自己，认识青春期的生理特征和心理特征。",
              "适应中学阶段的学习环境和学习要求，培养正确的学习观念。"
            ],
            "domain": "认识自我",
            "courses": [
              "psych-m-g7-self-identity"
            ]
          },
          {
            "id": "psych-m-g7-interpersonal",
            "name": "亲子师生与同伴交往",
            "points": [
              "积极与老师及父母进行沟通，把握与异性交往的尺度，建立良好的人际关系。"
            ],
            "domain": "人际交往",
            "prerequisites": [
              "psych-m-g7-study-adapt"
            ],
            "courses": [
              "psych-m-g7-interpersonal"
            ]
          }
        ]
      }
    ],
    "8": [
      {
        "subject": "chinese",
        "name": "小学语文",
        "nodes": [
          {
            "id": "chn-e-sentence-transformations-zh",
            "name": "常见句式与句式变换",
            "points": [
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。",
              "在理解课文的过程中体会顿号与逗号、分号与句号的不同用法。",
              "随文学习基本的词汇、语法知识，用以帮助理解课文中的语言难点；了解常用的修辞手法，体会它们在课文中的表达效果。"
            ],
            "domain": "句子与标点",
            "semester": "四上-九下",
            "prerequisites": [
              "chn-e-sentence-transformation"
            ],
            "courses": [
              "chn-e-sentence-transformations-zh"
            ]
          },
          {
            "id": "chn-e-whole-book-reading",
            "name": "整本书阅读",
            "points": [
              "第二学段（3~4年级）【阅读与鉴赏】5. 阅读整本书，初步理解主要内容，主动和同学分享自己的阅读感受。",
              "第三学段（5~6年级）【阅读与鉴赏】6. 阅读整本书，把握文本的主要内容，积极向同学推荐并说明理由。",
              "第四学段（7~9年级）【阅读与鉴赏】7. 每学年阅读两三部名著，探索个性化的阅读方法，分享阅读感受，开展专题探究，建构阅读整本书的经验。"
            ],
            "domain": "阅读理解",
            "semester": "全学段",
            "prerequisites": [
              "chn-e-non-fiction-reading"
            ],
            "courses": [
              "chn-e-whole-book-reading"
            ]
          },
          {
            "id": "chn-m-sentence-transformations-zh",
            "name": "句式变换与病句修改",
            "points": [
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。",
              "能借助上下文语域，说出关键语句、标点符号、图表在表达中的作用。",
              "关注有新鲜感的词句，并有意识地在口头和书面表达中运用。"
            ],
            "domain": "语言文字运用",
            "prerequisites": [
              "chn-m-sentence-components"
            ],
            "courses": [
              "chn-m-sentence-transformations-zh"
            ]
          },
          {
            "id": "chn-m-sentence-logic",
            "name": "句子逻辑与连贯",
            "points": [
              "能联系上下文，理解词句的意思，体会课文中关键词句表达情意的作用。",
              "学习修改习作中有了明显错误的词句。",
              "能借助上下文语域，说出关键语句、标点符号、图表在表达中的作用。"
            ],
            "domain": "语言文字运用",
            "prerequisites": [
              "chn-m-rhetoric-analysis",
              "chn-m-sentence-transformations-zh"
            ],
            "courses": [
              "chn-m-sentence-logic"
            ]
          },
          {
            "id": "chn-m-prose-reading",
            "name": "散文阅读",
            "points": [
              "阅读表现人与社会、人与他人的古今优秀诗歌、散文、小说、戏剧等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "独立阅读古今中外诗歌集、中长篇小说、散文集等文学名著，根据阅读进度完成读书笔记，针对作品的语言、形象、主题等方面的话题展开研讨。",
              "能从多个角度分析作品中的人物行为、人物形象、作品中的优美词语、精彩段落，并根据需要进行摘录。"
            ],
            "domain": "现代文阅读",
            "prerequisites": [
              "chn-m-narrative-reading"
            ],
            "courses": [
              "chn-m-prose-reading"
            ]
          },
          {
            "id": "chn-m-novel-reading",
            "name": "小说阅读",
            "points": [
              "阅读表现人与社会、人与他人的古今优秀诗歌、散文、小说、戏剧等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "能从多个角度分析作品中的**人物行为、人物形象**、作品中的优美词语、精彩段落。",
              "独立阅读古今中外诗歌集、中长篇小说、散文集等文学名著，根据阅读进度完成读书笔记，针对作品的**语言、形象、主题**等方面的话题展开研讨。"
            ],
            "domain": "现代文阅读",
            "prerequisites": [
              "chn-m-narrative-reading"
            ],
            "courses": [
              "chn-m-novel-reading"
            ]
          },
          {
            "id": "chn-m-argumentative-reading",
            "name": "议论文阅读",
            "points": [
              "引导学生客观、全面、冷静地思考问题，识别文本隐含的情感、观点、立场，体会作者运用的思维方法，如比较、分析、概括、推理等。",
              "尝试对文本进行评价。引导学生基于阅读和生活实际，开展研讨等活动，表达要观点鲜明、证据充分、合乎逻辑。",
              "在语文学习过程中，通过阅读、比较、推断、质疑、讨论等方式，梳理观点、事实与材料及其关系；辨析态度与立场，辨别是非、善恶、美丑。"
            ],
            "domain": "现代文阅读",
            "prerequisites": [
              "chn-m-expository-reading"
            ],
            "courses": [
              "chn-m-argumentative-reading"
            ]
          },
          {
            "id": "chn-m-classical-sentences",
            "name": "文言特殊句式",
            "points": [
              "能借助工具书阅读浅易文言文。",
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-m-classical-words"
            ],
            "courses": [
              "chn-m-classical-sentences"
            ]
          },
          {
            "id": "chn-m-classical-translation",
            "name": "文言文翻译",
            "points": [
              "能借助工具书阅读浅易文言文。",
              "诵读优秀诗文，注意在诵读过程中体验情感，展开想象，领悟诗文大意。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-m-classical-sentences"
            ],
            "courses": [
              "chn-m-classical-translation"
            ]
          },
          {
            "id": "chn-m-classical-prose",
            "name": "经典文言文精读",
            "points": [
              "能阅读日常的书报杂志，初步鉴赏文学作品，能借助工具书阅读浅易文言文。",
              "阅读表现人与自然的优秀文学作品，包括古诗文名篇，体会作者通过语言和形象构建的艺术世界。",
              "诵读学过的优秀诗文，尝试用不同的语气、语调表达自己的理解与感受。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-m-classical-translation"
            ],
            "courses": [
              "chn-m-classical-prose"
            ]
          },
          {
            "id": "chn-m-poetry-imagery",
            "name": "古诗词意象与意境",
            "points": [
              "阅读表现人与自然的优秀文学作品，包括古诗文名篇，体会作者通过语言和形象构建的艺术世界。",
              "阅读表现人与社会、人与他人的古今优秀诗歌、散文、小说、戏剧等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "对优秀的作品有体验、理解和欣赏能力；能从多个角度分析作品中的优美词语、精彩段落。"
            ],
            "domain": "古诗文阅读",
            "semester": "上",
            "prerequisites": [
              "chn-m-poetry-appreciation"
            ],
            "courses": [
              "chn-m-poetry-imagery"
            ]
          },
          {
            "id": "chn-m-poetry-techniques",
            "name": "古诗词表现手法",
            "points": [
              "阅读表现人与自然的优秀文学作品，包括古诗文名篇，体会作者通过语言和形象构建的艺术世界，借鉴其中的写作手法。",
              "阅读表现人与社会、人与他人的古今优秀诗歌、散文、小说、戏剧等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "感受语言文字的美，感悟作品的思想内涵和艺术价值，能结合自己的经验，理解、欣赏和初步评价语言文字作品。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-m-poetry-imagery"
            ],
            "courses": [
              "chn-m-poetry-techniques"
            ]
          },
          {
            "id": "chn-m-argumentative-writing-m",
            "name": "议论文写作",
            "points": [
              "引导学生客观、全面、冷静地思考问题，识别文本隐含的情感、观点、立场，体会作者运用的思维方法，如比较、分析、概括、推理等。",
              "尝试对文本进行评价。引导学生基于阅读和生活实际，开展研讨等活动，表达要观点鲜明、证据充分、合乎逻辑。",
              "乐于探索，勤于思考，初步掌握比较、分析、概括、推理等思维方法，辩证地思考问题，有理有据、负责任地表达自己的观点。"
            ],
            "domain": "写作",
            "semester": "下",
            "prerequisites": [
              "chn-m-argumentative-reading",
              "chn-m-descriptive-writing"
            ],
            "courses": [
              "chn-m-argumentative-writing-m"
            ]
          },
          {
            "id": "chn-m-erta-tales-heroes",
            "name": "《骆驼祥子》/《水浒传》",
            "points": [
              "独立阅读古今中外诗歌集、中长篇小说、散文集等文学名著，根据阅读进度完成读书笔记，针对作品的语言、形象、主题等方面的话题展开研讨。",
              "引导学生了解阅读的多种策略，运用浏览、略读、精读等不同阅读方法；通读整本书，了解主要内容，关注整体与局部、局部与局部之间的关系。",
              "能从多个角度分析作品中的人物行为、人物形象、作品中的优美词语、精彩段落，并根据需要进行摘录。"
            ],
            "domain": "整本书阅读与名著导读",
            "prerequisites": [
              "chn-m-novel-reading"
            ],
            "courses": [
              "chn-m-erta-tales-heroes"
            ]
          },
          {
            "id": "chn-m-erta-foreign-novel",
            "name": "外国名著（《海底两万里》等）",
            "points": [
              "独立阅读古今中外诗歌集、中长篇小说、散文集等文学名著，如《钢铁是怎样炼成的》。",
              "根据阅读进度完成读书笔记，针对作品的语言、形象、主题等方面的话题展开研讨。",
              "阅读革命文学作品，体会、评析革命领袖、革命英雄的爱国精神和人格魅力。"
            ],
            "domain": "整本书阅读与名著导读",
            "prerequisites": [
              "chn-m-novel-reading"
            ],
            "courses": [
              "chn-m-erta-foreign-novel"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "初中数学",
        "nodes": [
          {
            "id": "math-m-monomial-multiplication",
            "name": "整式乘除与因式分解",
            "points": [
              "理解整式的概念，掌握合并同类项和去括号的法则；能进行简单的整式加减运算，能进行简单的整式乘法运算。",
              "理解乘法公式 (a+b)(a−b)=a²−b², (a±b)²=a²±2ab+b²，了解公式的几何背景，能利用公式进行简单的计算和推理。",
              "能用提公因式法、公式法（直接利用公式不超过二次）进行因式分解（指数为正整数）。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-algebraic-expression"
            ],
            "courses": [
              "math-m-monomial-multiplication"
            ]
          },
          {
            "id": "math-m-fraction-expression",
            "name": "分式",
            "points": [
              "了解分式和最简分式的概念，能利用分式的基本性质进行约分和通分；能对简单的分式进行加、减、乘、除运算。",
              "知道分式的分母不能为零，能利用分式的基本性质进行约分、通分，并化简分式，能对简单的分式进行加、减、乘、除运算并将运算结果化为最简分式。"
            ],
            "domain": "数与代数",
            "semester": "下",
            "prerequisites": [
              "math-m-monomial-multiplication"
            ],
            "courses": [
              "math-m-fraction-expression"
            ]
          },
          {
            "id": "math-m-quadratic-radical",
            "name": "二次根式",
            "points": [
              "了解二次根式、最简二次根式的概念，了解二次根式（根号下仅限于数）加、减、乘、除运算法则，会用它们进行简单的四则运算。",
              "会用二次根式（根号下仅限于数）的加、减、乘、除运算法则进行简单的四则运算。"
            ],
            "domain": "数与代数",
            "semester": "下",
            "prerequisites": [
              "math-m-real-number",
              "math-m-monomial-multiplication"
            ],
            "courses": [
              "math-m-quadratic-radical"
            ]
          },
          {
            "id": "math-m-linear-inequality",
            "name": "一元一次不等式",
            "points": [
              "结合具体问题，了解不等式的意义，探索不等式的基本性质；能用不等式的基本性质对不等式进行变形。",
              "能解数字系数的一元一次不等式，并能在数轴上表示出解集；会用数轴确定两个一元一次不等式组成的不等式组的解集。",
              "能根据具体问题中的数量关系，列出一元一次不等式，解决简单的实际问题。建立模型观念。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-inequalities"
            ],
            "courses": [
              "math-m-linear-inequality"
            ]
          },
          {
            "id": "math-m-linear-equation-two",
            "name": "二元一次方程组",
            "points": [
              "掌握消元法，能解二元一次方程组。",
              "能根据二元一次方程组的特征，选择代入消元法或加减消元法解二元一次方程组。",
              "能运用一元一次方程、二元一次方程组、一元一次不等式（组）、一元二次方程解决简单的实际问题。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-linear-equation-one"
            ],
            "courses": [
              "math-m-linear-equation-two"
            ]
          },
          {
            "id": "math-m-fraction-equation",
            "name": "分式方程",
            "points": [
              "掌握等式的基本性质；能解一元一次方程和可化为一元一次方程的分式方程。",
              "能根据等式的基本性质解一元一次方程和可化为一元一次方程的分式方程。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-fraction-expression",
              "math-m-linear-equation-one"
            ],
            "courses": [
              "math-m-fraction-equation"
            ]
          },
          {
            "id": "math-m-variable-and-function",
            "name": "变量与函数",
            "points": [
              "探索简单实例中的数量关系和变化规律，了解常量、变量的意义；了解函数的概念和表示法，能举出函数的实例。",
              "能识别简单实际问题中的常量、变量及其意义，并能找出变量之间的数量关系及变化规律，形成初步的抽象能力；了解函数的概念和表示法，能举出函数的实例，初步形成模型观念。",
              "能用适当的函数表示法刻画简单实际问题中变量之间的关系，理解函数值的意义。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "prerequisites": [
              "math-m-coordinate-system",
              "math-m-algebraic-expression"
            ],
            "courses": [
              "math-variable-function"
            ]
          },
          {
            "id": "math-m-proportional-function",
            "name": "正比例函数",
            "points": [
              "能画一次函数的图象，根据图象和表达式 y = kx + b (k ≠ 0) 探索并理解 k > 0 和 k < 0 时图象的变化情况；理解正比例函数。",
              "会根据一次函数的图象和表达式 y=kx+b(k≠0)，探索并理解 k 值的变化对函数图象的影响。认识正比例函数中两个变量之间的对应规律。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "prerequisites": [
              "math-m-variable-and-function"
            ],
            "courses": [
              "math-m-proportional-function"
            ]
          },
          {
            "id": "math-m-linear-function",
            "name": "一次函数",
            "points": [
              "能根据简单实际问题中的已知条件确定一次函数的表达式；会在不同问题情境中运用待定系数法确定一次函数的表达式。",
              "会画出一次函数的图象；会根据一次函数的表达式求其图象与坐标轴的交点坐标；会根据一次函数的图象和表达式 y=kx+b(k≠0)，探索并理解 k 值的变化对函数图象的影响。",
              "会根据一次函数的图象解释一次函数与二元一次方程的关系；能在实际问题中列出一次函数的表达式，并结合一次函数的图象与表达式的性质等解决简单的实际问题。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "prerequisites": [
              "math-m-proportional-function",
              "math-m-linear-equation-one"
            ],
            "courses": [
              "math-linear-function",
              "math-m-linear-func-demo",
              "math-m-linear-function-inquiry-phone-plan"
            ]
          },
          {
            "id": "math-m-linear-equation-system-graph",
            "name": "一次函数与二元一次方程组",
            "points": [
              "会根据一次函数的图象解释一次函数与二元一次方程的关系。",
              "体会一次函数与二元一次方程的关系。",
              "会根据一次函数的图象解释一次函数与二元一次方程的关系。"
            ],
            "domain": "数与代数",
            "prerequisites": [
              "math-m-linear-function",
              "math-m-linear-equation-two"
            ],
            "courses": [
              "math-m-linear-equation-system-graph"
            ]
          },
          {
            "id": "math-m-isosceles-triangle",
            "name": "等腰三角形与等边三角形",
            "points": [
              "能用尺规作图：已知三边、两边及其夹角、两角及其夹角作三角形；已知底边及底边上的高线作等腰三角形；已知一直角边和斜边作直角三角形。",
              "探索并证明三角形内角和定理及其推论。",
              "能运用相交线、平行线、三角形、四边形的基本性质和判定解决问题。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-triangle-basics"
            ],
            "courses": [
              "math-m-isosceles-triangle"
            ]
          },
          {
            "id": "math-m-pythagorean-theorem",
            "name": "勾股定理",
            "points": [
              "探索勾股定理及其逆定理，并能运用它们解决一些简单的实际问题。",
              "能运用相交线、平行线、三角形、四边形的基本性质和判定解决问题。"
            ],
            "domain": "图形与几何",
            "semester": "下",
            "prerequisites": [
              "math-m-triangle-basics",
              "math-m-real-number"
            ],
            "courses": [
              "math-m-pythagorean-theorem"
            ]
          },
          {
            "id": "math-m-geometry-congruent-triangles",
            "name": "全等三角形",
            "points": [
              "探索并证明判定直角三角形全等的“斜边、直角边”定理。",
              "能用尺规作图：已知三边、两边及其夹角、两角及其夹边作三角形。",
              "能运用相交线、平行线、三角形、四边形的基本性质和判定解决问题。"
            ],
            "domain": "图形与几何",
            "semester": "上",
            "prerequisites": [
              "math-m-triangle-basics"
            ],
            "courses": [
              "math-congruent-triangles"
            ]
          },
          {
            "id": "math-m-quadrilateral",
            "name": "多边形与四边形",
            "points": [
              "探索并证明平行四边形的性质定理：平行四边形的对边相等、对角相等、对角线互相平分。",
              "探索并证明平行四边形的判定定理：一组对边平行且相等的四边形是平行四边形；两组对边分别相等的四边形是平行四边形；对角线互相平分的四边形是平行四边形。",
              "理解平行四边形、矩形、菱形、正方形、梯形的概念，以及它们之间的关系；了解四边形的不稳定性。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-geometry-congruent-triangles"
            ],
            "courses": [
              "math-m-quadrilateral"
            ]
          },
          {
            "id": "math-m-geometry-quadrilaterals",
            "name": "四边形综合",
            "points": [
              "了解多边形的概念及多边形的顶点、边、内角、外角与对角线；探索并掌握多边形内角和与外角和公式。",
              "理解平行四边形、矩形、菱形、正方形、梯形的概念，以及它们之间的关系；了解四边形的不稳定性。",
              "探索并证明平行四边形的性质定理：平行四边形的对边相等、对角相等、对角线互相平分。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-quadrilateral"
            ],
            "courses": [
              "math-m-geometry-quadrilaterals"
            ]
          },
          {
            "id": "math-m-special-quadrilateral",
            "name": "特殊四边形",
            "points": [
              "探索并证明矩形、菱形的性质定理：矩形的四个角都是直角，对角线相等；菱形的四条边相等，对角线互相垂直。",
              "探索并证明矩形的判定定理：三个角是直角的四边形是矩形，对角线相等的平行四边形是矩形；菱形的判定定理：四边相等的四边形是菱形，对角线互相垂直的平行四边形是菱形。",
              "正方形既是矩形，又是菱形；理解矩形、菱形、正方形之间的包含关系。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-quadrilateral"
            ],
            "courses": [
              "math-m-special-quadrilateral"
            ]
          },
          {
            "id": "math-m-data-analysis",
            "name": "数据的分析（均值/中位数/众数/方差）",
            "points": [
              "理解平均数的意义，能计算中位数、众数、加权平均数，了解它们是数据集中趋势的描述。",
              "体会刻画数据离散程度的意义，会计算简单数据的方差。",
              "能用适当的统计图表描述数据；理解平均数、中位数、众数、方差的意义；能用样本估计总体。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-m-data-description"
            ],
            "courses": [
              "math-m-data-analysis"
            ]
          },
          {
            "id": "math-m-sampling-estimation",
            "name": "抽样与估计",
            "points": [
              "体会抽样的必要性，通过实例了解简单随机抽样。",
              "能用适当的统计图表描述数据；理解平均数、中位数、众数、方差的意义；能用样本估计总体。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-m-data-analysis"
            ],
            "courses": [
              "math-m-sampling-estimation"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "初中英语",
        "nodes": [
          {
            "id": "eng-m-word-formation-en",
            "name": "构词法（前缀/后缀/合成）",
            "points": [
              "指导学生借助构词法知识和词典、词表等工具学习词语，大胆使用新的词块自主表达意义、解决新问题。",
              "尽量以词块的形式呈现生词，引导学生关注词语的搭配和固定的表达方式，并在围绕主题意义建构结构化知识的过程中，提炼词语的搭配和固定表达方式，构建词汇语义网，积累词块，扩大词汇量。",
              "能借助基本的构词法知识推测语篇中生词的含义，辅助理解语篇内容。"
            ],
            "domain": "词汇与语块",
            "prerequisites": [
              "eng-m-curriculum-vocabulary"
            ],
            "courses": [
              "eng-m-word-formation-en"
            ]
          },
          {
            "id": "eng-m-theme-vocabulary",
            "name": "主题词汇（校园/家庭/社会/自然）",
            "points": [
              "尽量以词块的形式呈现生词，引导学生关注词语的搭配和固定的表达方式，并在围绕主题意义建构结构化知识的过程中，提炼词语的搭配和固定表达方式，构建词汇语义网，积累词块，扩大词汇量。",
              "指导学生借助构词法知识和词典、词表等工具学习词语，大胆使用新的词块自主表达意义、解决新问题。",
              "引导学生围绕主题使用思维导图梳理词汇。"
            ],
            "domain": "词汇与语块",
            "prerequisites": [
              "eng-m-curriculum-vocabulary"
            ],
            "courses": [
              "eng-m-theme-vocabulary"
            ]
          },
          {
            "id": "eng-m-tenses-future",
            "name": "一般将来时与过去将来时",
            "points": [
              "就语法知识而言，要帮助学生建立以语言运用为导向的‘形式—意义—使用’语法观，引导学生在理解主题意义的基础上，认识到语法形式的选择取决于具体语境。",
              "重视在语境中呈现新的语法知识，指导学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "根据学生的实际需求，选择和设计既有层次又强调整合的不同类型的练习和活动，巩固所学语法知识，引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。"
            ],
            "domain": "语法与句法",
            "prerequisites": [
              "eng-m-tenses-present"
            ],
            "courses": [
              "eng-m-tenses-future"
            ]
          },
          {
            "id": "eng-m-modal-verbs",
            "name": "情态动词（can/may/must/should）",
            "points": [
              "就语法知识而言，要帮助学生建立以语言运用为导向的‘形式—意义—使用’语法观，引导学生在理解主题意义的基础上，认识到语法形式的选择取决于具体语境。",
              "重视在语境中呈现新的语法知识，指导学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "根据学生的实际需求，选择和设计既有层次又强调整合的不同类型的练习和活动，巩固所学语法知识，引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。"
            ],
            "domain": "语法与句法",
            "prerequisites": [
              "eng-m-tenses-present"
            ],
            "courses": [
              "eng-m-modal-verbs"
            ]
          },
          {
            "id": "eng-m-tenses-perfect",
            "name": "现在完成时与过去完成时",
            "points": [
              "就语法知识而言，要帮助学生建立以语言运用为导向的“形式—意义—使用”语法观，引导学生在理解主题意义的基础上，认识到语法形式的选择取决于具体语境。",
              "重视在语境中呈现新的语法知识，指导学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "根据学生的实际需求，选择和设计既有层次又强调整合的不同类型的练习和活动，巩固所学语法知识，引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。"
            ],
            "domain": "语法与句法",
            "prerequisites": [
              "eng-m-tenses-past",
              "eng-m-tenses-future"
            ],
            "courses": [
              "eng-m-tenses-perfect"
            ]
          },
          {
            "id": "eng-m-passive-voice",
            "name": "被动语态",
            "points": [
              "就语法知识而言，要帮助学生建立以语言运用为导向的“形式—意义—使用”语法观，引导学生在理解主题意义的基础上，认识到语法形式的选择取决于具体语境。",
              "重视在语境中呈现新的语法知识，指导学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "根据学生的实际需求，选择和设计既有层次又强调整合的不同类型的练习和活动，巩固所学语法知识，引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。"
            ],
            "domain": "语法与句法",
            "prerequisites": [
              "eng-m-tenses-perfect",
              "eng-m-modal-verbs"
            ],
            "courses": [
              "eng-m-passive-voice"
            ]
          },
          {
            "id": "eng-m-sentence-patterns",
            "name": "基本句型与复合句",
            "points": [
              "就语法知识而言，要帮助学生建立以语言运用为导向的‘形式—意义—使用’语法观，引导学生在理解主题意义的基础上，认识到语法形式的选择取决于具体语境。",
              "重视在语境中呈现新的语法知识，指导学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。"
            ],
            "domain": "语法与句法",
            "prerequisites": [
              "eng-m-tenses-perfect"
            ],
            "courses": [
              "eng-m-sentence-patterns"
            ]
          },
          {
            "id": "eng-m-object-clause",
            "name": "宾语从句",
            "points": [
              "就语法知识而言，要帮助学生建立以语言运用为导向的“形式—意义—使用”语法观，引导学生在理解主题意义的基础上，认识到语法形式的选择取决于具体语境。",
              "重视在语境中呈现新的语法知识，指导学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "根据学生的实际需求，选择和设计既有层次又强调整合的不同类型的练习和活动，巩固所学语法知识，引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。"
            ],
            "domain": "语法与句法",
            "prerequisites": [
              "eng-m-sentence-patterns"
            ],
            "courses": [
              "eng-m-object-clause"
            ]
          },
          {
            "id": "eng-m-text-types",
            "name": "语篇类型识别（记叙/说明/议论）",
            "points": [
              "就语篇知识而言，要为学生提供接触和体验各种语篇类型的机会，指导学生学习不同文体特有的语篇结构和语言特征。",
              "引导学生围绕主题使用思维导图梳理词汇。指导学生借助构词法知识和词典、词表等工具学习词语。",
              "在阅读稍长的语篇材料时，能理解主要内容，推断隐含信息，表达个人看法，提出合理疑问，分析和解决问题。"
            ],
            "domain": "语篇理解与书面表达",
            "prerequisites": [
              "eng-m-reading-strategies"
            ],
            "courses": [
              "eng-m-text-types"
            ]
          },
          {
            "id": "eng-m-cloze-test",
            "name": "完形填空",
            "points": [
              "能运用一定的阅读策略，借助表格、思维导图等工具梳理书面语篇的主要信息，理解大意。",
              "在阅读稍长的语篇材料时，能理解主要内容，推断隐含信息，表达个人看法，提出合理疑问，分析和解决问题。",
              "能借助基本的构词法知识推测语篇中生词的含义，辅助理解语篇内容。"
            ],
            "domain": "语篇理解与书面表达",
            "prerequisites": [
              "eng-m-reading-strategies",
              "eng-m-word-formation-en"
            ],
            "courses": [
              "eng-m-cloze-test"
            ]
          },
          {
            "id": "eng-m-listening-long",
            "name": "长对话与语段听力",
            "points": [
              "能听懂相关主题的语篇，借助关键词句、图片等复述语篇内容。",
              "能利用语篇所给提示预测内容的发展，判断说话者的身份和关系，推断说话者的情感、态度和观点。",
              "能理解多模态语篇（如广播、电视节目等）的主要内容，获取关键信息。"
            ],
            "domain": "听说交流",
            "prerequisites": [
              "eng-m-listening-basic",
              "eng-m-text-types"
            ],
            "courses": [
              "eng-m-listening-long"
            ]
          }
        ]
      },
      {
        "subject": "physics",
        "name": "初中物理",
        "nodes": [
          {
            "id": "phy-m-sound-generation",
            "name": "声音的产生与传播",
            "points": [
              "2.3.1 通过实验，认识声的产生和传播条件。",
              "例1 在鼓面上放碎纸屑，敲击鼓面，观察纸屑的运动；拨动张紧的橡皮筋，观察与其接触的物体的运动。了解实验中将微小变化放大的方法。",
              "例2 将发声器放入玻璃罩中，逐渐抽出罩内空气，会听到发声器发出的声音逐渐变小，分析导致该现象的原因。"
            ],
            "domain": "声现象",
            "semester": "上",
            "prerequisites": [
              "sci-e-sound"
            ],
            "courses": [
              "phy-m-sound-generation"
            ]
          },
          {
            "id": "phy-m-sound-properties",
            "name": "声音的特性（音调/响度/音色）",
            "points": [
              "了解声音的特性。了解现代技术中声学知识的一些应用。知道噪声的危害及控制方法。",
              "通过实验，认识声的产生和传播条件。"
            ],
            "domain": "声现象",
            "prerequisites": [
              "phy-m-sound-generation"
            ],
            "courses": [
              "phy-m-sound-properties"
            ]
          },
          {
            "id": "phy-m-noise-control",
            "name": "噪声与声污染",
            "points": [
              "了解声音的特性。了解现代技术中声学知识的一些应用。知道噪声的危害及控制方法。",
              "举例说明如何减弱生活环境中的噪声，具有保护自己、关心他人的意识。"
            ],
            "domain": "声现象",
            "prerequisites": [
              "phy-m-sound-properties"
            ],
            "courses": [
              "phy-m-noise-control"
            ]
          },
          {
            "id": "phy-m-sound-applications",
            "name": "声的利用（超声/次声）",
            "points": [
              "了解声音的特性。了解现代技术中声学知识的一些应用。知道噪声的危害及控制方法。",
              "举例说明如何减弱生活环境中的噪声，具有保护自己、关心他人的意识。"
            ],
            "domain": "声现象",
            "prerequisites": [
              "phy-m-sound-properties"
            ],
            "courses": [
              "phy-m-sound-applications"
            ]
          },
          {
            "id": "phy-m-acoustics-cross-disciplinary",
            "name": "声现象跨学科应用",
            "points": [
              "“跨学科实践”主题侧重体现物理学与日常生活、工程实践、社会发展等方面的联系。",
              "设立跨学科主题学习活动，加强学科间相互关联，带动课程综合化实施，强化实践性要求。"
            ],
            "domain": "声现象",
            "prerequisites": [
              "phy-m-sound-applications"
            ],
            "courses": [
              "phy-m-acoustics-cross-disciplinary"
            ]
          },
          {
            "id": "phy-m-light-propagation",
            "name": "光的直线传播",
            "points": [
              "2.3.3 探究并了解光的反射定律。通过实验，了解光的折射现象及其特点。",
              "例6 通过光束从空气射入水（或玻璃）中的实验，了解光的折射现象及其特点。"
            ],
            "domain": "光现象",
            "semester": "上",
            "prerequisites": [
              "sci-e-light"
            ],
            "courses": [
              "phy-m-light-propagation"
            ]
          },
          {
            "id": "phy-m-light-reflection",
            "name": "光的反射",
            "points": [
              "探究并了解光的反射定律。通过实验，了解光的折射现象及其特点。",
              "探究并了解光束在平面镜上反射时，反射角与入射角的关系。"
            ],
            "domain": "光现象",
            "semester": "上",
            "prerequisites": [
              "phy-m-light-propagation"
            ],
            "courses": [
              "phy-m-light-reflection"
            ]
          },
          {
            "id": "phy-m-plane-mirror",
            "name": "平面镜成像",
            "points": [
              "探究并了解平面镜成像时像与物的关系。知道平面镜成像的特点及应用。",
              "探究并了解光的反射定律。通过实验，了解光的折射现象及其特点。"
            ],
            "domain": "光现象",
            "prerequisites": [
              "phy-m-light-reflection"
            ],
            "courses": [
              "phy-m-plane-mirror"
            ]
          },
          {
            "id": "phy-m-spherical-mirror",
            "name": "球面镜（凹镜/凸镜）",
            "points": [
              "2.3.4 探究并了解平面镜成像时像与物的关系。知道平面镜成 像的特点及应用。",
              "2.3.5 了解凸透镜对光的会聚作用和四透镜对光的发散作用。 探究并了解凸透镜成像的规律。了解凸透镜成像规律的应用。 例7 了解凸透镜成像规律在放大镜、照相机中的应用。 例 8 了解人眼成像的原理，了…"
            ],
            "domain": "光现象",
            "prerequisites": [
              "phy-m-plane-mirror"
            ],
            "courses": [
              "phy-m-spherical-mirror"
            ]
          },
          {
            "id": "phy-m-light-refraction",
            "name": "光的折射",
            "points": [
              "探究并了解光的反射定律。通过实验，了解光的折射现象及其特点。",
              "通过光束从空气射入水（或玻璃）中的实验，了解光的折射现象及其特点。"
            ],
            "domain": "光现象",
            "prerequisites": [
              "phy-m-light-reflection"
            ],
            "courses": [
              "phy-light-refraction",
              "phy-m-light-refraction"
            ]
          },
          {
            "id": "phy-m-refraction",
            "name": "折射规律应用",
            "points": [
              "探究并了解光的反射定律。通过实验，了解光的折射现象及其特点。",
              "通过光束从空气射入水（或玻璃）中的实验，了解光的折射现象及其特点。",
              "了解凸透镜对光的会聚作用和凹透镜对光的发散作用。探究并了解凸透镜成像的规律。了解凸透镜成像规律的应用。"
            ],
            "domain": "光现象",
            "prerequisites": [
              "phy-m-light-refraction"
            ],
            "courses": [
              "phy-m-refraction"
            ]
          },
          {
            "id": "phy-m-light-dispersion",
            "name": "光的色散",
            "points": [
              "通过实验，了解白光的组成和不同色光混合的现象。",
              "观察红、绿、蓝三束光照射在白墙上重登部分的颜色。"
            ],
            "domain": "光现象",
            "prerequisites": [
              "phy-m-light-refraction"
            ],
            "courses": [
              "phy-m-light-dispersion"
            ]
          },
          {
            "id": "phy-m-lens",
            "name": "透镜（凸透镜/凹透镜）",
            "points": [
              "了解凸透镜对光的会聚作用和凹透镜对光的发散作用。探究并了解凸透镜成像的规律。了解凸透镜成像规律的应用。",
              "例7 了解凸透镜成像规律在放大镜、照相机中的应用。例8 了解人眼成像的原理，了解近视眼和远视眼的成因与矫正方法。具有保护视力的意识。"
            ],
            "domain": "光现象",
            "prerequisites": [
              "phy-m-light-refraction"
            ],
            "courses": [
              "phy-m-lens"
            ]
          },
          {
            "id": "phy-m-eye-vision",
            "name": "眼睛与视觉矫正",
            "points": [
              "2.3.5 了解凸透镜对光的会聚作用和凹透镜对光的发散作用。探究并了解凸透镜成像的规律。了解凸透镜成像规律的应用。",
              "例 8 了解人眼成像的原理，了解近视眼和远视眼的成因与矫正方法。具有保护视力的意识。"
            ],
            "domain": "光现象",
            "prerequisites": [
              "phy-m-lens"
            ],
            "courses": [
              "phy-m-eye-vision"
            ]
          },
          {
            "id": "phy-m-thermometer",
            "name": "温度与温度计",
            "points": [
              "了解液体温度计的工作原理。会用常见温度计测量温度。能说出生活环境中常见的温度值。",
              "会正确使用天平、温度计等实验器材，能按实验方案操作，获得实验数据。"
            ],
            "domain": "热现象",
            "semester": "上",
            "prerequisites": [
              "sci-e-heat-transfer"
            ],
            "courses": [
              "phy-m-thermometer"
            ]
          },
          {
            "id": "phy-m-phase-change",
            "name": "物态变化（熔化/汽化/凝固）",
            "points": [
              "1.1.3 经历物态变化的实验探究过程，知道物质的熔点、凝固点和沸点，了解物态变化过程中的吸热和放热现象。能运用物态变化知识说明自然界和生活中的有关现象。",
              "能描述固态、液态和气态的基本特征及在相互转化过程中的特点...能根据这些知识解释有关自然现象，尝试运用这些知识解决日常生活中的有关问题，形成初步的物质观念。",
              "尤其在物态变化特点、规律的实验教学中，引导学生基于证据进行归纳、总结、解释及交流，促进学生科学思维和科学探究能力的发展。"
            ],
            "domain": "热现象",
            "prerequisites": [
              "phy-m-thermometer"
            ],
            "courses": [
              "phy-m-phase-change"
            ]
          },
          {
            "id": "phy-m-motion-description",
            "name": "机械运动",
            "points": [
              "2.2.1 会选用适当的工具测量长度和时间，会根据生活经验估测长度和时间。",
              "2.2.2 能用速度描述物体运动的快慢，并能进行简单计算。会测量物体运动的速度。",
              "2.1.1 知道机械运动，举例说明机械运动的相对性。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "sci-e-motion-speed",
              "sci-e-gravity",
              "sci-e-friction"
            ],
            "courses": [
              "phy-m-motion-description"
            ]
          },
          {
            "id": "phy-m-mass-density",
            "name": "质量与密度",
            "points": [
              "1.2.3 通过实验，理解密度。会测量固体和液体的密度。能解释生活中与密度有关的一些物理现象。",
              "1.2.2 知道质量的含义。会测量固体和液体的质量。",
              "能描述固态、液态和气态的基本特征...知道质量的含义，理解密度...能根据这些知识解释有关自然现象，尝试运用这些知识解决日常生活中的有关问题，形成初步的物质观念。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-motion-description"
            ],
            "courses": [
              "phy-m-mass-density"
            ]
          },
          {
            "id": "phy-m-force-basics",
            "name": "力的初步认识",
            "points": [
              "通过常见事例或实验，了解重力、弹力和摩擦力，认识力的作用效果。探究并了解滑动摩擦力的大小与哪些因素有关。",
              "能用示意图描述力。会测量力的大小。了解同一直线上的二力合成。知道二力平衡条件。",
              "通过实验和科学推理，认识牛顿第一定律。能运用物体的惯性解释自然界和生活中的有关现象。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-mass-density"
            ],
            "courses": [
              "phy-m-force-basics"
            ]
          },
          {
            "id": "phy-m-gravity",
            "name": "重力",
            "points": [
              "通过常见事例或实验，了解重力、弹力和摩擦力，认识力的作用效果。",
              "探究并了解滑动摩擦力的大小与哪些因素有关。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-force-basics"
            ],
            "courses": [
              "phy-m-gravity"
            ]
          },
          {
            "id": "phy-m-friction",
            "name": "摩擦力",
            "points": [
              "通过常见事例或实验，了解重力、弹力和摩擦力，认识力的作用效果。探究并了解滑动摩擦力的大小与哪些因素有关。",
              "探究并了解滑动摩擦力的大小与哪些因素有关。"
            ],
            "domain": "运动和力",
            "semester": "下",
            "prerequisites": [
              "phy-m-force-basics"
            ],
            "courses": [
              "phy-m-friction"
            ]
          },
          {
            "id": "phy-m-newton-laws",
            "name": "牛顿第一定律与二力平衡",
            "points": [
              "通过实验和科学推理，认识牛顿第一定律。能运用物体的惯性解释自然界和生活中的有关现象。",
              "了解同一直线上的二力合成。知道二力平衡条件。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-gravity",
              "phy-m-friction"
            ],
            "courses": [
              "phy-m-newton-laws"
            ]
          },
          {
            "id": "phy-m-pressure",
            "name": "压强",
            "points": [
              "通过实验，理解压强。知道增大和减小压强的方法，并了解其在生产生活中的应用。",
              "估测自己站立时对地面的压强。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-newton-laws"
            ],
            "courses": [
              "phy-m-pressure",
              "teachany-phy-mid-pressure"
            ]
          },
          {
            "id": "phy-m-liquid-pressure-buoyancy",
            "name": "液体压强与浮力",
            "points": [
              "探究并了解液体压强与哪些因素有关。知道大气压强及其与人类生活的关系。了解流体压强与流速的关系及其在生产生活中的应用。",
              "通过实验，认识浮力。探究并了解浮力大小与哪些因素有关。知道阿基米德原理，能运用物体的浮沉条件说明生产生活中的有关现象。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-pressure",
              "phy-m-mass-density"
            ],
            "courses": [
              "phy-m-liquid-pressure-buoyancy",
              "phy-pressure-buoyancy"
            ]
          },
          {
            "id": "phy-m-atmospheric-pressure",
            "name": "大气压强",
            "points": [
              "2.2.8 探究并了解液体压强与哪些因素有关。知道大气压强及其与人类生活的关系。了解流体压强与流速的关系及其在生产生活中的应用。",
              "例9 了解铁路站台上设置安全线的必要性。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-pressure"
            ],
            "courses": [
              "phy-m-atmospheric-pressure",
              "phy-mid-atmospheric-pressure"
            ]
          },
          {
            "id": "phy-m-fluid-flow",
            "name": "流体压强与流速关系",
            "points": [
              "了解流体压强与流速的关系及其在生产生活中的应用。",
              "例 9 了解铁路站台上设置安全线的必要性。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-atmospheric-pressure"
            ],
            "courses": [
              "phy-m-fluid-flow",
              "phy-mid-fluid-flow"
            ]
          }
        ]
      },
      {
        "subject": "biology",
        "name": "初中生物",
        "nodes": [
          {
            "id": "bio-m-ecosystem-junior",
            "name": "生态系统的组成",
            "points": [
              "生态系统是由生产者、消费者、分解者与非生物环境构成的有机整体。",
              "运用图示或模型表示生态系统中各生物成分之间的营养关系。",
              "分析某生态系统受到破坏的具体实例，阐明生态系统的自我调节能力是有限的。"
            ],
            "domain": "生物与环境",
            "prerequisites": [
              "bio-m-biosphere-largest",
              "sci-e-ecosystem",
              "sci-e-environment-protection"
            ],
            "courses": [
              "bio-m-ecosystem-junior"
            ]
          },
          {
            "id": "bio-m-animal-diversity",
            "name": "动物的主要类群",
            "points": [
              "无脊椎动物与人类关系密切，如线虫动物、环节动物等",
              "脊椎动物（鱼类、两栖类、爬行类、鸟类、哺乳类）都具有适应其生活方式和环境的主要特征",
              "通过列表等多种方式，对不同生物类群的形态结构、生活环境、繁殖方式等进行比较"
            ],
            "domain": "动物、微生物与健康",
            "prerequisites": [
              "bio-m-tissue-types"
            ],
            "courses": [
              "bio-m-animal-diversity"
            ]
          },
          {
            "id": "bio-m-animal-behavior",
            "name": "动物行为",
            "points": [
              "六、课程实施 ‖目 些学生领略过国家公园、自然保护区的风光;一些学生有过饲养家 禽、家畜或种植蔬菜、果树、花卉的经历:一些学生经历过流行性感 冒等常见疾病带来的痛苦;一些学生有过野外观察动物行为的经历…"
            ],
            "domain": "动物、微生物与健康",
            "prerequisites": [
              "bio-m-animal-diversity"
            ],
            "courses": [
              "bio-m-animal-behavior"
            ]
          },
          {
            "id": "bio-m-microorganism",
            "name": "微生物（细菌/真菌/病毒）",
            "points": [
              "微生物一般是指个体微小、结构简单的生物，主要包括病毒、细菌和真菌。",
              "病毒无细胞结构，需要在活细胞内完成增殖。细菌是单细胞生物，无成形的细胞核。真菌是单细胞或多细胞生物，有成形的细胞核。",
              "有些微生物会使人患病，有些微生物在食品生产、医药工业等方面得到广泛应用。"
            ],
            "domain": "动物、微生物与健康",
            "prerequisites": [
              "bio-m-animal-diversity",
              "bio-m-cell-structure-m"
            ],
            "courses": [
              "bio-m-microorganism"
            ]
          },
          {
            "id": "bio-m-infectious-disease",
            "name": "传染病与免疫",
            "points": [
              "2.3.4 有些微生物会使人患病，有些微生物在食品生产、医药工业等方面得到广泛应用",
              "5. 树立健康意识和社会责任感，能够强身健体和服务社会。关注身体内外各种因素对健康的影响，在饮食作息、体育锻炼、疾病预防等方面形成健康生活的态度和行为习惯"
            ],
            "domain": "动物、微生物与健康",
            "prerequisites": [
              "bio-m-microorganism"
            ],
            "courses": [
              "bio-m-infectious-disease"
            ]
          },
          {
            "id": "bio-m-microorganism-health",
            "name": "微生物与人类健康",
            "points": [
              "有些微生物会使人患病，有些微生物在食品生产、医药工业等方面得到广泛应用。",
              "病毒无细胞结构，需要在活细胞内完成增殖；细菌是单细胞生物，无成形的细胞核；真菌是单细胞或多细胞生物，有成形的细胞核。",
              "培养并观察细菌的菌落，用放大镜或显微镜观察酵母菌和霉菌。"
            ],
            "domain": "动物、微生物与健康",
            "prerequisites": [
              "bio-m-infectious-disease"
            ],
            "courses": [
              "bio-m-microorganism-health"
            ]
          },
          {
            "id": "bio-m-bio-classification",
            "name": "生物分类",
            "points": [
              "根据生物之间的相似程度将生物划分为界、门、纲、目、科、属、种等分类等级",
              "说明生物的不同分类等级及其相互关系，初步形成生物进化的观点。",
              "充分利用本地的生物资源，组织学生识别生物的特征，尝试开展分类活动。"
            ],
            "domain": "生物多样性与跨学科实践",
            "prerequisites": [
              "bio-m-animal-behavior"
            ],
            "courses": [
              "bio-classification"
            ]
          },
          {
            "id": "bio-m-biodiversity-m",
            "name": "生物多样性及其保护",
            "points": [
              "我国拥有丰富的动植物资源，保护生物的多样性是每个人应有的责任。",
              "主动宣传生物多样性的重要意义，自觉遵守相关法律法规，保护生物多样性。",
              "组织学生收集生物资源安全方面的资料和生物多样性保护的典型实例，在课堂上进行展示、交流和讨论。"
            ],
            "domain": "生物多样性与跨学科实践",
            "prerequisites": [
              "bio-m-bio-classification"
            ],
            "courses": [
              "bio-m-biodiversity-m"
            ]
          },
          {
            "id": "bio-m-biology-cross-disciplinary-practice",
            "name": "生物学跨学科实践",
            "points": [
              "设置“生物学与社会·跨学科实践”学习主题，引导学生综合运用生物学、化学、物理、地理、数学等学科的相关知识和方法，尝试分析和解决实际问题。",
              "“生物学与社会·跨学科实践”学习主题与其他6个学习主题构成了完整的课程内容体系，它们之间是相互融合的关系。该主题约占总课时数的10%。",
              "探究实践是源于对自然界的好奇心、求知欲和现实需求，解决真实情境中的问题或完成实践项目的能力与品格。探究实践活动主要包括科学探究和跨学科实践。"
            ],
            "domain": "生物多样性与跨学科实践",
            "prerequisites": [
              "bio-m-biodiversity-m"
            ],
            "courses": [
              "bio-cross-disciplinary"
            ]
          }
        ]
      },
      {
        "subject": "geography",
        "name": "初中地理",
        "nodes": [
          {
            "id": "geo-m-china-location",
            "name": "中国的地理位置与疆域",
            "points": [
              "运用地图，描述中国的地理位置与疆域特征，说明南海诸岛是中国领土的组成部分，钓鱼岛及其附属岛屿是中国固有领土，增强国家版图意识与海洋权益意识。",
              "运用中国行政区划图，识别34个省级行政区，记住它们的简称和行政中心。"
            ],
            "domain": "中国地理",
            "prerequisites": [
              "geo-m-continents-oceans"
            ],
            "courses": [
              "geo-m-china-location"
            ]
          },
          {
            "id": "geo-m-china-overview",
            "name": "中国地理总论",
            "points": [
              "运用地图，描述中国的地理位置与疆域特征，说明南海诸岛是中国领土的组成部分，钓鱼岛及其附属岛屿是中国固有领土，增强国家版图意识与海洋权益意识。",
              "运用地图和相关资料，简要归纳中国地形、气候、河湖等的特征；简要分析影响中国气候的主要因素。",
              "运用地图和相关资料，描述中国人口的基本状况和变化。简要归纳中国的民族分布特点，树立中华民族共同体意识。"
            ],
            "domain": "中国地理",
            "prerequisites": [
              "geo-m-china-location"
            ],
            "courses": [
              "geo-m-china-overview"
            ]
          },
          {
            "id": "geo-m-china-terrain",
            "name": "中国地形与地势",
            "points": [
              "运用地图和相关资料，简要归纳中国地形、气候、河湖等的特征；简要分析影响中国气候的主要因素。",
              "运用地图、图像等资料，说明秦岭一淮河等重要自然地理界线在地理分区中的意义。"
            ],
            "domain": "中国地理",
            "prerequisites": [
              "geo-m-china-location",
              "geo-m-terrain-types"
            ],
            "courses": [
              "geo-m-china-terrain"
            ]
          },
          {
            "id": "geo-m-china-climate",
            "name": "中国气候",
            "points": [
              "运用地图和相关资料，简要归纳中国地形、气候、河湖等的特征；简要分析影响中国气候的主要因素。",
              "学习本主题后，学生能够运用地图及其他地理工具，观察、描述地球表层陆地、海洋的基本面貌，说出地形、气候等自然环境要素的基本状况。"
            ],
            "domain": "中国地理",
            "prerequisites": [
              "geo-m-china-terrain",
              "geo-m-climate-m"
            ],
            "courses": [
              "geo-m-china-climate"
            ]
          },
          {
            "id": "geo-m-china-rivers",
            "name": "中国河流湖泊",
            "points": [
              "运用地图和相关资料，描述长江、黄河的特点，举例说明其对经济发展和人们生活的影响。",
              "能够运用地图及其他地理工具，观察、描述地球表层陆地、海洋的基本面貌，说出地形、气候等自然环境要素的基本状况，以及自然环境要素对人们生产生活的影响。"
            ],
            "domain": "中国地理",
            "prerequisites": [
              "geo-m-china-climate"
            ],
            "courses": [
              "geo-m-china-rivers"
            ]
          },
          {
            "id": "geo-m-china-population",
            "name": "中国人口与民族",
            "points": [
              "运用地图和相关资料，描述中国人口的基本状况和变化。",
              "运用地图和相关资料，简要归纳中国的民族分布特点，树立中华民族共同体意识。"
            ],
            "domain": "中国地理",
            "prerequisites": [
              "geo-m-china-location"
            ],
            "courses": [
              "geo-m-china-population"
            ]
          },
          {
            "id": "geo-m-china-resources",
            "name": "中国自然资源",
            "points": [
              "运用地图和相关资料，描述中国水资源、土地资源、矿产资源、海洋资源等自然资源的主要特征，举例说明自然资源与人们生产生活的关系。",
              "认识开发、利用、保护自然资源的重要意义。"
            ],
            "domain": "中国地理",
            "prerequisites": [
              "geo-m-china-rivers"
            ],
            "courses": [
              "geo-m-china-resources"
            ]
          },
          {
            "id": "geo-m-china-agriculture",
            "name": "中国农业",
            "points": [
              "借助地图和相关资料，举例描述中国农业等生产活动的分布，并用实例说明科学技术在产业发展中的重要作用。",
              "结合实例，说明自然条件对该区域经济社会发展的影响，认识因地制宜的重要性。"
            ],
            "domain": "中国经济地理",
            "prerequisites": [
              "geo-m-china-resources",
              "geo-m-china-population"
            ],
            "courses": [
              "geography-chinese-agriculture"
            ]
          },
          {
            "id": "geo-m-china-industry",
            "name": "中国工业",
            "points": [
              "借助地图和相关资料，举例描述中国农业、工业等生产活动的分布，并用实例说明科学技术在产业发展中的重要作用。",
              "运用地图和相关资料，说出某区域的地理位置和自然地理特征，说明自然条件对该区域经济社会发展的影响，认识因地制宜的重要性。"
            ],
            "domain": "中国经济地理",
            "prerequisites": [
              "geo-m-china-resources"
            ],
            "courses": [
              "geo-m-china-industry"
            ]
          },
          {
            "id": "geo-m-china-transportation",
            "name": "中国交通运输",
            "points": [
              "运用地图和相关资料，说明中国交通运输线的分布特征，以及高速公路、高速铁路的快速发展对人们生产生活的影响。",
              "结合实例，说明交通运输在全球经济发展中的重要作用。"
            ],
            "domain": "中国经济地理",
            "prerequisites": [
              "geo-m-china-agriculture",
              "geo-m-china-industry"
            ],
            "courses": [
              "geo-m-china-transportation"
            ]
          },
          {
            "id": "geo-m-china-regions",
            "name": "中国四大地理区域",
            "points": [
              "运用地图、图像等资料，说明秦岭一淮河等重要自然地理界线在地理分区中的意义。",
              "运用地图和相关资料，说出某区域的地理位置和自然地理特征，说明自然条件对该区域经济社会发展的影响，认识因地制宜的重要性。",
              "结合实例，描述不同区域的差异，说明区域联系和协同发展对经济社会发展的意义。"
            ],
            "domain": "中国区域地理",
            "semester": "下",
            "prerequisites": [
              "geo-m-china-climate",
              "geo-m-china-terrain"
            ],
            "courses": [
              "geo-m-china-regions"
            ]
          },
          {
            "id": "geo-m-four-regions",
            "name": "北方、南方、西北、青藏地区",
            "points": [
              "运用地图、图像等资料，说明秦岭一淮河等重要自然地理界线在地理分区中的意义。",
              "结合实例，描述不同区域的差异，说明区域联系和协同发展对经济社会发展的意义。"
            ],
            "domain": "中国区域地理",
            "prerequisites": [
              "geo-m-china-regions"
            ],
            "courses": [
              "geo-m-four-regions"
            ]
          },
          {
            "id": "geo-m-north-south",
            "name": "北方与南方地区对比",
            "points": [
              "运用地图和相关资料，说出某区域的地理位置和自然地理特征，说明自然条件对该区域经济社会发展的影响，认识因地制宜的重要性。",
              "结合实例，描述不同区域的差异，说明区域联系和协同发展对经济社会发展的意义。"
            ],
            "domain": "中国区域地理",
            "prerequisites": [
              "geo-m-four-regions"
            ],
            "courses": [
              "geo-m-north-south"
            ]
          },
          {
            "id": "geo-m-northwest-qinghai",
            "name": "西北与青藏地区",
            "points": [
              "运用地图和相关资料，说出某区域的地理位置和自然地理特征，说明自然条件对该区域经济社会发展的影响，认识因地制宜的重要性。",
              "结合实例，描述不同区域的差异，说明区域联系和协同发展对经济社会发展的意义。"
            ],
            "domain": "中国区域地理",
            "prerequisites": [
              "geo-m-four-regions"
            ],
            "courses": [
              "geo-m-northwest-qinghai"
            ]
          },
          {
            "id": "geo-m-pearl-river-delta",
            "name": "珠江三角洲",
            "points": [
              "运用地图和相关资料，说出某区域的地理位置和自然地理特征，说明自然条件对该区域经济社会发展的影响，认识因地制宜的重要性。",
              "结合实例，描述不同区域的差异，说明区域联系和协同发展对经济社会发展的意义。"
            ],
            "domain": "中国区域地理",
            "prerequisites": [
              "geo-m-china-industry",
              "geo-m-four-regions"
            ],
            "courses": [
              "geo-m-pearl-river-delta"
            ]
          },
          {
            "id": "geo-m-yangtze-delta",
            "name": "长江三角洲",
            "points": [
              "运用地图和相关资料，描述长江、黄河的特点，举例说明其对经济发展和人们生活的影响。",
              "运用地图和相关资料，说出某区域的地理位置和自然地理特征，说明自然条件对该区域经济社会发展的影响，认识因地制宜的重要性。"
            ],
            "domain": "中国区域地理",
            "prerequisites": [
              "geo-m-china-industry",
              "geo-m-four-regions"
            ],
            "courses": [
              "geo-m-yangtze-delta"
            ]
          }
        ]
      },
      {
        "subject": "history",
        "name": "初中历史",
        "nodes": [
          {
            "id": "hist-m-opium-war",
            "name": "鸦片战争",
            "points": [
              "中国封建社会到1840年鸦片战争爆发后逐步解体。",
              "通过明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，认识当时中国社会面临的严重危机。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-song-yuan-ming-qing"
            ],
            "courses": [
              "hist-m-opium-war"
            ]
          },
          {
            "id": "hist-m-opium-war-era",
            "name": "鸦片战争后的中国",
            "points": [
              "通过明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，认识当时中国社会面临的严重危机。",
              "了解中国历史上的英雄人物，崇尚英雄气概，传承民族气节；培育和践行社会主义核心价值观。",
              "能够从历史的角度认识中国国情，认识中华民族多元一体的历史发展趋势，增强热爱家乡、热爱祖国的情感。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-opium-war"
            ],
            "courses": [
              "hist-m-opium-war-era"
            ]
          },
          {
            "id": "hist-m-taiping-westernization",
            "name": "太平天国运动与洋务运动",
            "points": [
              "通过明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，认识当时中国社会面临的严重危机。",
              "通过了解郑和下西洋、戚继光抗倭等史事，了解明朝的对外关系。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-opium-war"
            ],
            "courses": [
              "hist-m-taiping-westernization"
            ]
          },
          {
            "id": "hist-m-reform-1898",
            "name": "戊戌变法",
            "points": [
              "通过明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，认识当时中国社会面临的严重危机。",
              "能够对中国古代历史上的重要事件、人物、现象等形成合理想象，进行初步分析，认识其意义和影响。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-taiping-westernization"
            ],
            "courses": [
              "hist-m-reform-1898"
            ]
          },
          {
            "id": "hist-m-reform-revolution",
            "name": "改革与革命",
            "points": [
              "中国近代史始于1840年鸦片战争，止于1949年中华人民共和国成立，重点叙述近代以来中国人民为争取民族独立、人民解放和实现国家富强、人民幸福而不懈奋斗的历程。",
              "通过了解林则徐虎门销烟、英法联军火烧圆明园、俄国割占中国北方大片领土等史事，认识列强侵华对中国社会的影响。",
              "通过了解洋务运动、戊戌变法、辛亥革命、新文化运动等史事，认识近代中国人民为救亡图存进行的艰难探索。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-reform-1898"
            ],
            "courses": [
              "hist-m-reform-revolution"
            ]
          },
          {
            "id": "hist-m-xinhai-revolution",
            "name": "辛亥革命",
            "points": [
              "通过了解辛亥革命，认识推翻帝制、建立民国的意义与局限性。",
              "能够了解中国近代历史的基本线索和重要的事件、人物、现象，知道重大史事发生的时间和地点、原因和结果。",
              "通过近代中国人民救亡图存的史事，体会中华民族英勇不屈的精神，认识没有中国共产党就没有新中国的道理。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-reform-1898"
            ],
            "courses": [
              "hist-m-xinhai-revolution"
            ]
          },
          {
            "id": "hist-m-may-fourth-movement",
            "name": "五四运动",
            "points": [
              "通过了解新文化运动、五四运动、马克思主义在中国的传播、中国共产党的成立，认识五四运动与新文化运动、马克思主义传播、中国共产党建立之间的历史关联。",
              "能够了解中国近代历史的基本线索和重要的事件、人物、现象，知道重大史事发生的时间和地点、原因和结果，初步养成历史时序意识和历史空间感。",
              "能够通过了解五四运动、新文化运动等史事，认识中国人民为救亡图存进行的艰难探索，理解五四运动作为新民主主义革命开端的历史意义。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-xinhai-revolution"
            ],
            "courses": [
              "hist-m-may-fourth-movement"
            ]
          },
          {
            "id": "hist-m-cpc-founding",
            "name": "中国共产党的诞生",
            "points": [
              "通过了解明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，认识当时中国社会面临的严重危机。",
              "了解中国历史上的英雄人物，崇尚英雄气概，传承民族气节；培育和践行社会主义核心价值观，把握习近平新时代中国特色社会主义思想的核心要义，树立中国特色社会主义道路自信、理论自信、制度自信、文化自信。",
              "能够从历史的角度认识中国国情，认识中华民族多元一体的历史发展趋势，增强热爱家乡、热爱祖国的情感，铸牢中华民族共同体意识。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-may-fourth-movement"
            ],
            "courses": [
              "hist-m-cpc-founding"
            ]
          },
          {
            "id": "hist-m-northern-expedition",
            "name": "北伐战争与南京国民政府",
            "points": [
              "通过了解明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，认识当时中国社会面临的严重危机。",
              "能够通过古代历史上治乱兴衰的史事，认识阶级社会中阶级斗争在历史发展中的作用。",
              "围绕中国古代历史上重大的、综合性的问题进行探究并展开讨论，如“统一多民族封建国家建立与巩固的重要意义”。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-cpc-founding"
            ],
            "courses": [
              "hist-m-northern-expedition"
            ]
          },
          {
            "id": "hist-m-anti-japan-war",
            "name": "抗日战争",
            "points": [
              "通过了解明清时期加强皇权的举措，初步认识君主专制带来的社会弊端；通过了解明清时期的经济改革和全球性经济互动，初步认识这一阶段中国经济发展的内因和外因。",
              "通过明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，认识当时中国社会面临的严重危机。",
              "能够通过中国古代的经济、科技成就，了解生产力发展对政治、社会、文化变革的推动作用；通过古代历史上治乱兴衰的史事，认识阶级社会中阶级斗争在历史发展中的作用。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-northern-expedition"
            ],
            "courses": [
              "hist-m-anti-japan-war"
            ]
          },
          {
            "id": "hist-m-liberation-war",
            "name": "解放战争",
            "points": [
              "通过了解明清时期的经济改革和全球性经济互动，初步认识这一阶段中国经济发展的内因和外因。",
              "通过明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，认识当时中国社会面临的严重危机。",
              "能够通过古代历史上治乱兴衰的史事，认识阶级社会中阶级斗争在历史发展中的作用。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-anti-japan-war"
            ],
            "courses": [
              "hist-m-liberation-war"
            ]
          },
          {
            "id": "hist-m-new-democratic-revolution",
            "name": "新民主主义革命",
            "points": [
              "中国近代史内容要求：了解新民主主义革命的兴起，知道五四运动、中国共产党的成立、井冈山革命根据地的创建、红军长征等重大史事。",
              "中国近代史内容要求：认识中国共产党领导的新民主主义革命的意义，理解新民主主义革命胜利是近代以来中国人民反抗外来侵略和封建统治斗争的继续和发展。"
            ],
            "domain": "中国近代史",
            "semester": "下",
            "prerequisites": [
              "hist-m-liberation-war"
            ],
            "courses": [
              "hist-m-new-democratic-revolution"
            ]
          },
          {
            "id": "hist-m-modern-china-development",
            "name": "新中国成立与发展",
            "points": [
              "通过了解明末李自成起义，清中叶以来的政治腐败、故步自封和19世纪的国际局势，认识当时中国社会面临的严重危机。",
              "能够通过中国古代历史上治乱兴衰的史事，认识阶级社会中阶级斗争在历史发展中的作用。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-new-democratic-revolution"
            ],
            "courses": [
              "hist-m-modern-china-development"
            ]
          },
          {
            "id": "hist-m-china-reform-opening",
            "name": "改革开放与中国特色社会主义",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "中国近代史",
            "prerequisites": [
              "hist-m-modern-china-development"
            ],
            "courses": [
              "hist-m-china-reform-opening"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "初中道德与法治",
        "nodes": [
          {
            "id": "pol-m-g8-lo-u1",
            "name": "坚持宪法至上",
            "points": [
              "【课标】理解家庭和睦的重要性，学会与同学、老师、父母沟通，构建和谐人际关系。",
              "【教材·下·坚持宪法至上】维护宪法权威；保障宪法实施"
            ],
            "domain": "成长中的我",
            "semester": "下",
            "prerequisites": [
              "pol-m-g8-up-u4"
            ],
            "courses": [
              "pol-m-g8-lo-u1"
            ]
          },
          {
            "id": "pol-m-g8-up-u1",
            "name": "走进社会生活",
            "points": [
              "【课标】理解家庭和睦的重要性，学会与同学、老师、父母沟通，构建和谐人际关系。",
              "【教材·上·走进社会生活】丰富的社会生活；网络生活新空间"
            ],
            "domain": "成长中的我",
            "semester": "上",
            "prerequisites": [
              "pol-m-g7-lo-u4"
            ],
            "courses": [
              "pol-m-g8-up-u1"
            ]
          },
          {
            "id": "pol-m-g8-lo-u2",
            "name": "理解权利义务",
            "points": [
              "【课标】遵守社会规则，维护公共秩序，热心公益事业，践行社会主义核心价值观。",
              "【教材·下·理解权利义务】公民权利；公民义务"
            ],
            "domain": "我与他人和集体",
            "semester": "下",
            "prerequisites": [
              "pol-m-g8-lo-u1"
            ],
            "courses": [
              "pol-m-g8-lo-u2"
            ]
          },
          {
            "id": "pol-m-g8-up-u2",
            "name": "遵守社会规则",
            "points": [
              "【课标】遵守社会规则，维护公共秩序，热心公益事业，践行社会主义核心价值观。",
              "【教材·上·遵守社会规则】社会生活离不开规则；社会生活讲道德；做守法的公民"
            ],
            "domain": "我与他人和集体",
            "semester": "上",
            "prerequisites": [
              "pol-m-g8-up-u1"
            ],
            "courses": [
              "pol-m-g8-up-u2"
            ]
          },
          {
            "id": "pol-m-g8-lo-u3",
            "name": "人民当家作主",
            "points": [
              "【课标】了解我国基本政治制度、基本经济制度，理解法治是治国理政的基本方式。",
              "【教材·下·人民当家作主】我国的政治和经济制度；我国国家机构"
            ],
            "domain": "珍爱生命与健康",
            "semester": "下",
            "prerequisites": [
              "pol-m-g8-lo-u2"
            ],
            "courses": [
              "pol-m-g8-lo-u3"
            ]
          },
          {
            "id": "pol-m-g8-up-u3",
            "name": "勇担社会责任",
            "points": [
              "【课标】了解我国基本政治制度、基本经济制度，理解法治是治国理政的基本方式。",
              "【教材·上·勇担社会责任】责任与角色同在；积极奉献社会"
            ],
            "domain": "珍爱生命与健康",
            "semester": "上",
            "prerequisites": [
              "pol-m-g8-up-u2"
            ],
            "courses": [
              "pol-m-g8-up-u3"
            ]
          },
          {
            "id": "pol-m-g8-lo-u4",
            "name": "崇尚法治精神",
            "points": [
              "【课标】具有公共意识、社会责任意识，维护国家利益和国家安全。",
              "【教材·下·崇尚法治精神】尊重自由平等；维护公平正义"
            ],
            "domain": "我与国家和社会",
            "semester": "下",
            "prerequisites": [
              "pol-m-g8-lo-u3"
            ],
            "courses": [
              "pol-m-g8-lo-u4"
            ]
          },
          {
            "id": "pol-m-g8-up-u4",
            "name": "维护国家利益",
            "points": [
              "【课标】具有公共意识、社会责任意识，维护国家利益和国家安全。",
              "【教材·上·维护国家利益】国家利益至上；树立总体国家安全观；建设美好祖国"
            ],
            "domain": "我与国家和社会",
            "semester": "上",
            "prerequisites": [
              "pol-m-g8-up-u3"
            ],
            "courses": [
              "pol-m-g8-up-u4"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "初中信息科技",
        "nodes": [
          {
            "id": "it-m-iot-concept",
            "name": "物联网概念与架构",
            "points": [
              "理解物联网感知层、网络层、应用层的基本架构。"
            ],
            "domain": "物联网与模块"
          },
          {
            "id": "it-m-iot-project",
            "name": "物联网项目设计",
            "points": [
              "设计并实现简单的物联网应用项目。"
            ],
            "domain": "物联网与模块",
            "prerequisites": [
              "it-m-iot-concept"
            ]
          },
          {
            "id": "it-m-open-hardware",
            "name": "开源硬件与模块化设计",
            "points": [
              "使用开源硬件完成模块化系统搭建与调试。"
            ],
            "domain": "物联网与模块",
            "prerequisites": [
              "it-m-iot-concept"
            ]
          },
          {
            "id": "it-m-data-structures-basic",
            "name": "数据结构基础（列表/字典）",
            "points": [
              "运用列表、字典等结构组织与管理数据。"
            ],
            "domain": "数据与算法"
          },
          {
            "id": "it-m-cybersecurity",
            "name": "网络安全防护",
            "points": [
              "识别常见网络攻击方式，掌握基本防护策略。"
            ],
            "domain": "信息安全"
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "初中心理健康教育",
        "nodes": [
          {
            "id": "psych-m-g8-role-identity",
            "name": "角色认同与社会适应",
            "points": [
              "帮助学生建立正确的角色意识，培养学生对不同社会角色的适应。",
              "逐步适应生活和社会的各种变化，着重培养应对失败和挫折的能力。"
            ],
            "domain": "生活适应",
            "prerequisites": [
              "psych-m-g7-interpersonal"
            ],
            "courses": [
              "psych-m-g8-role-identity"
            ]
          },
          {
            "id": "psych-m-g8-puberty-relation",
            "name": "青春期交往与情绪调适",
            "points": [
              "认识青春期生理和心理特征，把握与异性交往的尺度。",
              "抑制冲动行为，学会恰当地体验情绪和表达情绪。"
            ],
            "domain": "青春期与成长",
            "prerequisites": [
              "psych-m-g8-role-identity"
            ],
            "courses": [
              "psych-m-g8-puberty-relation"
            ]
          },
          {
            "id": "psych-m-g8-stress-coping",
            "name": "学业压力与挫折应对",
            "points": [
              "正确处理厌学心理，克服学习困难。",
              "着重培养应对失败和挫折的能力，形成良好意志品质。"
            ],
            "domain": "抗挫与适应",
            "prerequisites": [
              "psych-m-g8-puberty-relation"
            ],
            "courses": [
              "psych-m-g8-stress-coping"
            ]
          }
        ]
      }
    ],
    "9": [
      {
        "subject": "chinese",
        "name": "小学语文",
        "nodes": [
          {
            "id": "chn-e-sentence-transformations-zh",
            "name": "常见句式与句式变换",
            "points": [
              "在理解语句的过程中，体会句号与逗号的不同用法，了解冒号、引号的一般用法。",
              "在理解课文的过程中体会顿号与逗号、分号与句号的不同用法。",
              "随文学习基本的词汇、语法知识，用以帮助理解课文中的语言难点；了解常用的修辞手法，体会它们在课文中的表达效果。"
            ],
            "domain": "句子与标点",
            "semester": "四上-九下",
            "prerequisites": [
              "chn-e-sentence-transformation"
            ],
            "courses": [
              "chn-e-sentence-transformations-zh"
            ]
          },
          {
            "id": "chn-e-whole-book-reading",
            "name": "整本书阅读",
            "points": [
              "第二学段（3~4年级）【阅读与鉴赏】5. 阅读整本书，初步理解主要内容，主动和同学分享自己的阅读感受。",
              "第三学段（5~6年级）【阅读与鉴赏】6. 阅读整本书，把握文本的主要内容，积极向同学推荐并说明理由。",
              "第四学段（7~9年级）【阅读与鉴赏】7. 每学年阅读两三部名著，探索个性化的阅读方法，分享阅读感受，开展专题探究，建构阅读整本书的经验。"
            ],
            "domain": "阅读理解",
            "semester": "全学段",
            "prerequisites": [
              "chn-e-non-fiction-reading"
            ],
            "courses": [
              "chn-e-whole-book-reading"
            ]
          },
          {
            "id": "chn-m-comprehensive-language",
            "name": "综合性语言运用",
            "points": [
              "学会倾听与表达，初步学会用口头语言文明地进行人际沟通和社会交往。",
              "乐于用口头、书面的方式与人交流沟通，愿意与他人分享，增强表达的自信心。",
              "能主动参与日常生活中的文化活动，根据不同的场合，尝试运用合适的音量和语气与他人交流，有礼貌地请教、回应。"
            ],
            "domain": "语言文字运用",
            "prerequisites": [
              "chn-m-sentence-logic"
            ],
            "courses": [
              "chn-m-comprehensive-language"
            ]
          },
          {
            "id": "chn-m-literary-appreciation",
            "name": "文学类作品鉴赏",
            "points": [
              "阅读表现人与社会、人与他人的古今优秀诗歌、散文、小说、戏剧等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "能参与读书交流活动，能诵读学过的优秀诗文，尝试用不同的语气、语调表达自己的理解与感受。",
              "结合自己的阅读体会，尝试撰写文学鉴赏文章。"
            ],
            "domain": "现代文阅读",
            "prerequisites": [
              "chn-m-argumentative-reading",
              "chn-m-prose-reading",
              "chn-m-novel-reading"
            ],
            "courses": [
              "chn-m-literary-appreciation"
            ]
          },
          {
            "id": "chn-m-classical-appreciation",
            "name": "文言文综合鉴赏",
            "points": [
              "阅读表现人与自然的优秀文学作品，包括古诗文名篇，体会作者通过语言和形象构建的艺术世界，借鉴其中的写作手法。",
              "阅读表现人与社会、人与他人的古今优秀诗歌、散文、小说、戏剧等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "对优秀的作品有体验、理解和欣赏能力；能从多个角度分析作品中的优美词语、精彩段落。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-m-classical-prose"
            ],
            "courses": [
              "chn-m-classical-appreciation"
            ]
          },
          {
            "id": "chn-m-poetry-comparison",
            "name": "古诗词比较阅读",
            "points": [
              "阅读表现人与社会、人与他人的古今优秀诗歌、散文、小说、戏剧等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "引导学生客观、全面、冷静地思考问题，识别文本隐含的情感、观点、立场，体会作者运用的思维方法，如比较、分析、概括、推理等。",
              "思维能力是指学生在语文学习过程中的联想想象、分析比较、归纳判断等认知表现。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-m-poetry-techniques"
            ],
            "courses": [
              "chn-m-poetry-comparison"
            ]
          },
          {
            "id": "chn-m-essay-comprehensive",
            "name": "综合性作文",
            "points": [
              "能根据需要，用书面语言具体明确、文从字顺地表达自己的见闻、体验和想法。",
              "尝试撰写文学鉴赏文章。",
              "表达要观点鲜明、证据充分、合乎逻辑。"
            ],
            "domain": "写作",
            "prerequisites": [
              "chn-m-argumentative-writing-m"
            ],
            "courses": [
              "chn-m-essay-comprehensive"
            ]
          },
          {
            "id": "chn-m-erta-essay-collection",
            "name": "散文杂文集",
            "points": [
              "独立阅读古今中外诗歌集、中长篇小说、散文集等文学名著，如《艾青诗选》。根据阅读进度完成读书笔记，针对作品的语言、形象、主题等方面的话题展开研讨。",
              "阅读表现人与社会、人与他人的古今优秀诗歌、散文、小说、戏剧等文学作品，学习欣赏、品味作品的语言、形象等，交流审美体验。",
              "以学生自主阅读活动为主，引导学生了解阅读的多种策略，运用浏览、略读、精读等不同阅读方法。通读整本书，了解主要内容。"
            ],
            "domain": "整本书阅读与名著导读",
            "prerequisites": [
              "chn-m-poetry-comparison",
              "chn-m-prose-reading"
            ],
            "courses": [
              "chn-m-erta-essay-collection"
            ]
          },
          {
            "id": "chn-m-dream-red-mansions",
            "name": "《红楼梦》选读",
            "points": [
              "独立阅读古今中外诗歌集、中长篇小说、散文集等文学名著，根据阅读进度完成读书笔记，针对作品的语言、形象、主题等方面的话题展开研讨。",
              "引导学生了解阅读的多种策略，运用浏览、略读、精读等不同阅读方法；通读整本书，了解主要内容，关注整体与局部、局部与局部之间的关系。",
              "能从多个角度分析作品中的人物行为、人物形象、作品中的优美词语、精彩段落，并根据需要进行摘录。"
            ],
            "domain": "整本书阅读与名著导读",
            "prerequisites": [
              "chn-m-literary-appreciation",
              "chn-m-erta-tales-heroes"
            ],
            "courses": [
              "chn-m-dream-red-mansions"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "初中数学",
        "nodes": [
          {
            "id": "math-m-quadratic-equation",
            "name": "一元二次方程",
            "points": [
              "理解配方法，能用配方法、公式法、因式分解法解数字系数的一元二次方程。",
              "会用一元二次方程根的判别式判别方程是否有实根及两个实根是否相等。",
              "能根据一元二次方程的特征，选择配方法、公式法、因式分解法解数字系数的一元二次方程。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "prerequisites": [
              "math-m-quadratic-radical"
            ],
            "courses": [
              "math-m-quadratic-equation"
            ]
          },
          {
            "id": "math-m-inverse-proportion",
            "name": "反比例函数",
            "points": [
              "结合具体情境体会反比例函数的意义，能根据已知条件确定反比例函数的表达式。",
              "会用描点法画出反比例函数的图象；知道当 k>0 和 k<0 时反比例函数 y=k/x(k≠0) 图象的整体特征。",
              "能用反比例函数解决简单的实际问题。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "prerequisites": [
              "math-m-linear-function",
              "math-m-fraction-expression"
            ],
            "courses": [
              "math-m-inverse-proportion"
            ]
          },
          {
            "id": "math-m-quadratic-function",
            "name": "二次函数",
            "points": [
              "会通过分析实际问题的情境确定二次函数的表达式，体会二次函数的意义；会用描点法画出二次函数的图象，会利用一些特殊点画出二次函数的草图。",
              "通过图象了解二次函数的性质，知道二次函数系数与图象形状和对称轴的关系。会根据二次函数的表达式求其图象与坐标轴的交点坐标。",
              "会用配方法将数字系数二次函数的表达式化为 y=a(x-h)²+k 的形式，能由此得出二次函数图象顶点坐标，说出图象开口方向，得出最大值或最小值，并能确定相应自变量的值，解决简单的实际问题。"
            ],
            "domain": "数与代数",
            "semester": "上",
            "prerequisites": [
              "math-m-linear-function",
              "math-m-quadratic-equation"
            ],
            "courses": [
              "math-m-quadratic-transformations",
              "math-quadratic-function"
            ]
          },
          {
            "id": "math-m-similar-triangles",
            "name": "相似三角形",
            "points": [
              "了解相似三角形的判定定理：两角分别相等的两个三角形相似；两边成比例且夹角相等的两个三角形相似；三边成比例的两个三角形相似。",
              "了解相似三角形的性质定理：相似三角形对应线段的比等于相似比；面积比等于相似比的平方。",
              "会利用图形的相似解决一些简单的实际问题。"
            ],
            "domain": "图形与几何",
            "semester": "上",
            "prerequisites": [
              "math-m-pythagorean-theorem",
              "math-m-quadratic-radical"
            ],
            "courses": [
              "math-m-similar-triangles"
            ]
          },
          {
            "id": "math-m-trig-ratio",
            "name": "锐角三角函数",
            "points": [
              "利用相似的直角三角形，探索并认识锐角三角函数（sin A, cos A, tan A），知道30°, 45°, 60°角的三角函数值。",
              "会使用计算器由已知锐角求它的三角函数值，由已知三角函数值求它的对应锐角。",
              "能用锐角三角函数解直角三角形，能用相关知识解决一些简单的实际问题。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-similar-triangles"
            ],
            "courses": [
              "math-m-trig-ratio"
            ]
          },
          {
            "id": "math-m-rotation",
            "name": "旋转",
            "points": [
              "能理解图形的变化（平移、旋转、轴对称、相似、位似）。",
              "图形与几何领域包括图形的性质、图形的变化、图形与坐标三个主题。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-axial-symmetry",
              "math-m-geometry-congruent-triangles"
            ],
            "courses": [
              "math-m-rotation"
            ]
          },
          {
            "id": "math-m-translation-dilation",
            "name": "平移与位似",
            "points": [
              "了解图形的位似，知道利用位似可以将一个图形放大或缩小。",
              "能理解图形的变化（平移、旋转、轴对称、相似、位似）。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-rotation",
              "math-m-similar-triangles"
            ],
            "courses": [
              "math-m-translation-dilation"
            ]
          },
          {
            "id": "math-m-circle-basics",
            "name": "圆的基础",
            "points": [
              "了解比例的基本性质、线段的比、成比例的线段；通过建筑、艺术上的实例了解黄金分割。",
              "通过具体实例认识图形的相似。了解相似多边形和相似比。",
              "掌握基本事实：两条直线被一组平行线所截，所得的对应线段成比例。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-pythagorean-theorem"
            ],
            "courses": [
              "math-m-circle-basics"
            ]
          },
          {
            "id": "math-m-circle-angle",
            "name": "圆周角与圆心角",
            "points": [
              "探索并证明圆周角定理及其推论：圆周角的度数等于它所对弧上的圆心角度数的一半；直径所对的圆周角是直角；90°的圆周角所对的弦是直径。",
              "了解圆周角定理及其推论：圆周角的度数等于它所对弧上的圆心角度数的一半；直径所对的圆周角是直角；90°的圆周角所对的弦是直径。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-circle-basics"
            ],
            "courses": [
              "math-m-circle-angle"
            ]
          },
          {
            "id": "math-m-arc-sector",
            "name": "弧长与扇形面积",
            "points": [
              "了解直棱柱、圆锥的侧面展开图，能根据展开图想象和制作模型。",
              "通过实例，了解上述视图与展开图在现实生活中的应用。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-circle-angle"
            ],
            "courses": [
              "math-m-arc-sector"
            ]
          },
          {
            "id": "math-m-circle-tangent",
            "name": "直线与圆的位置关系",
            "points": [
              "理解圆、弧、弦、圆心角、圆周角的概念，了解等圆、等弧的 概念， 探索并掌握点与圆的位置关系。 探索并证明垂径定理: 垂直于弦的直径平分弦以及弦所对的两 RM. 探索圆周角与圆心角及其所对弧的关系，知道…"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-circle-basics",
              "math-m-similar-triangles"
            ],
            "courses": [
              "math-m-circle-tangent"
            ]
          },
          {
            "id": "math-m-inscribed-circumscribed",
            "name": "三角形内切圆与外接圆",
            "points": [
              "了解多边形的概念及多边形的顶点、边、内角、外角与对角线；探索并掌握多边形内角和与外角和公式。",
              "理解平行四边形、矩形、菱形、正方形、梯形的概念，以及它们之间的关系；了解四边形的不稳定性。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-circle-tangent",
              "math-m-trig-ratio"
            ],
            "courses": [
              "math-m-inscribed-circumscribed"
            ]
          },
          {
            "id": "math-m-geometry-circle",
            "name": "圆的综合应用",
            "points": [
              "了解比例的基本性质、线段的比、成比例的线段；通过建筑、艺术上的实例了解黄金分割。",
              "通过具体实例认识图形的相似。了解相似多边形和相似比。",
              "掌握基本事实：两条直线被一组平行线所截，所得的对应线段成比例。"
            ],
            "domain": "图形与几何",
            "prerequisites": [
              "math-m-inscribed-circumscribed"
            ],
            "courses": [
              "math-m-geometry-circle"
            ]
          },
          {
            "id": "math-m-probability-basic",
            "name": "概率初步",
            "points": [
              "能列出简单随机现象所有可能的结果，知道随机事件发生的可能性有大有小。",
              "了解概率的意义；能通过列表、画树状图等方法列出简单随机事件所有可能的结果，以及指定事件发生的所有可能结果，了解简单随机事件发生概率的计算方法。",
              "能用列举法计算简单随机事件的概率。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-m-data-analysis"
            ],
            "courses": [
              "math-m-probability-basic"
            ]
          },
          {
            "id": "math-m-probability-frequency",
            "name": "频率与概率",
            "points": [
              "能通过大量重复试验，用频率估计概率。",
              "能用列举法计算简单随机事件的概率。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-m-probability-basic"
            ],
            "courses": [
              "math-m-probability-frequency"
            ]
          },
          {
            "id": "math-m-statistics-probability-junior",
            "name": "统计与概率综合",
            "points": [
              "经历收集、整理、描述和分析数据的活动，了解数据处理的过程；能用计算器处理较为复杂的数据。",
              "理解平均数的意义，能计算中位数、众数、加权平均数，了解它们是数据集中趋势的描述。体会刻画数据离散程度的意义，会计算简单数据的方差。",
              "能列出简单随机现象所有可能的结果，知道随机事件发生的可能性有大有小。了解概率的意义；能通过列表、画树状图等方法列出简单随机事件所有可能的结果，了解简单随机事件发生概率的计算方法。"
            ],
            "domain": "统计与概率",
            "prerequisites": [
              "math-m-probability-frequency"
            ],
            "courses": [
              "math-m-statistics-probability-junior"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "初中英语",
        "nodes": [
          {
            "id": "eng-m-phrasal-verbs",
            "name": "动词短语",
            "points": [
              "尽量以词块的形式呈现生词，引导学生关注词语的搭配和固定的表达方式，并在围绕主题意义建构结构化知识的过程中，提炼词语的搭配和固定表达方式，构建词汇语义网，积累词块，扩大词汇量。",
              "指导学生借助构词法知识和词典、词表等工具学习词语，大胆使用新的词块自主表达意义、解决新问题。"
            ],
            "domain": "词汇与语块",
            "prerequisites": [
              "eng-m-word-formation-en",
              "eng-m-theme-vocabulary"
            ],
            "courses": [
              "eng-m-phrasal-verbs"
            ]
          },
          {
            "id": "eng-m-attributive-clause",
            "name": "定语从句",
            "points": [
              "就语法知识而言，要帮助学生建立以语言运用为导向的“形式—意义—使用”语法观，引导学生在理解主题意义的基础上，认识到语法形式的选择取决于具体语境。",
              "重视在语境中呈现新的语法知识，指导学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "根据学生的实际需求，选择和设计既有层次又强调整合的不同类型的练习和活动，巩固所学语法知识，引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。"
            ],
            "domain": "语法与句法",
            "prerequisites": [
              "eng-m-sentence-patterns"
            ],
            "courses": [
              "eng-m-attributive-clause"
            ]
          },
          {
            "id": "eng-m-adverbial-clause",
            "name": "状语从句",
            "points": [
              "就语法知识而言，要帮助学生在语境中观察和归纳所学语法的使用场合、表达形式、基本意义、使用规则和语用功能。",
              "引导学生在语境中学会应用语法知识准确地理解他人和得体地表达自己。",
              "帮助学生建立以语言运用为导向的“形式—意义—使用”语法观，认识到语法形式的选择取决于具体语境。"
            ],
            "domain": "语法与句法",
            "prerequisites": [
              "eng-m-sentence-patterns"
            ],
            "courses": [
              "eng-m-adverbial-clause"
            ]
          },
          {
            "id": "eng-m-basic-writing",
            "name": "基础写作（短文/书信/邮件）",
            "points": [
              "进行书面表达时，能正确使用所学语言，格式较为规范。能参照范例，仿写简短的文段（如回复信函等），语言准确，表意得体。",
              "能选用正确的词语、句式和时态，通过口语或书面语篇描述、介绍人和事物，表达个人看法，表意清晰，话语基本通顺。",
              "能结合图片、文字等提示信息，对语篇进行补充、续编或改编，语言基本准确。"
            ],
            "domain": "语篇理解与书面表达",
            "prerequisites": [
              "eng-m-text-types",
              "eng-m-tenses-perfect",
              "eng-m-passive-voice",
              "eng-e-simple-writing",
              "eng-e-writing-skills-primary"
            ],
            "courses": [
              "eng-m-basic-writing"
            ]
          },
          {
            "id": "eng-m-oral-topic",
            "name": "话题口语表达",
            "points": [
              "能根据口头交际的具体情境，初步运用得体的语言形式，表达自己的情感、态度和观点。",
              "引导学生围绕主题表达个人观点和态度，解决真实问题，达到在教学中培养学生核心素养的目的。",
              "在输出活动中，注意创设真实的、与问题解决紧密关联的语境，引导学生根据正式或非正式场合，选择得体的方式进行沟通与交流。"
            ],
            "domain": "听说交流",
            "prerequisites": [
              "eng-m-listening-long",
              "eng-m-sentence-patterns"
            ],
            "courses": [
              "eng-m-oral-topic"
            ]
          }
        ]
      },
      {
        "subject": "physics",
        "name": "初中物理",
        "nodes": [
          {
            "id": "phy-m-internal-energy",
            "name": "内能与热量",
            "points": [
              "认识机械能、内能、电磁能及能量的转化与守恒；能将所学物理知识与实际情境联系起来，初步形成能量观念。"
            ],
            "domain": "热现象",
            "semester": "上",
            "prerequisites": [
              "phy-m-phase-change"
            ],
            "courses": [
              "phy-m-internal-energy"
            ]
          },
          {
            "id": "phy-m-specific-heat",
            "name": "比热容",
            "points": [
              "3.3 内能 3.3.1 了解内能和热量。从能量转化的角度认识燃料的热值。",
              "3.3.2 通过实验，了解比热容。能运用比热容说明简单的自然现象。",
              "能运用比热容说明简单的自然现象。"
            ],
            "domain": "热现象",
            "prerequisites": [
              "phy-m-internal-energy"
            ],
            "courses": [
              "phy-m-specific-heat"
            ]
          },
          {
            "id": "phy-m-heat-calculation",
            "name": "热量计算",
            "points": [
              "3.3 内能 3.3.1 了解内能和热量。从能量转化的角度认识燃料的热值。",
              "3.3.2 通过实验，了解比热容。能运用比热容说明简单的自然现象。",
              "3.3.3 了解热机的工作原理。知道内能的利用在人类社会发展史上的重要意义。"
            ],
            "domain": "热现象",
            "prerequisites": [
              "phy-m-specific-heat"
            ],
            "courses": [
              "phy-m-heat-calculation"
            ]
          },
          {
            "id": "phy-m-heat-engine",
            "name": "内燃机与热机效率",
            "points": [
              "3.3 内能 3.3.1 了解内能和热量。从能量转化的角度认识燃料的热值。",
              "3.3.2 通过实验，了解比热容，并尝试解释一些自然现象。",
              "3.3.3 了解热机的工作原理。知道内能的利用在人类社会发展史上的重要意义。"
            ],
            "domain": "热现象",
            "prerequisites": [
              "phy-m-heat-calculation"
            ],
            "courses": [
              "phy-m-heat-engine"
            ]
          },
          {
            "id": "phy-m-simple-machines",
            "name": "简单机械（杠杆/滑轮）",
            "points": [
              "知道简单机械。探究并了解杠杆的平衡条件。",
              "通过常见事例或实验，了解重力、弹力和摩擦力，认识力的作用效果。探究并了解滑动摩擦力的大小与哪些因素有关。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-newton-laws"
            ],
            "courses": [
              "phy-m-simple-machines"
            ]
          },
          {
            "id": "phy-m-work-energy",
            "name": "功与功率",
            "points": [
              "2.2.2 能用速度描述物体运动的快慢，并能进行简单计算。会测量物体运动的速度。",
              "2.2.3 通过常见事例或实验，了解重力、弹力和摩擦力，认识力的作用效果。探究并了解滑动摩擦力的大小与哪些因素有关。",
              "2.2.4 能用示意图描述力。会测量力的大小。了解同一直线上的二力合成。知道二力平衡条件。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-simple-machines"
            ],
            "courses": [
              "phy-m-work-energy"
            ]
          },
          {
            "id": "phy-m-mechanical-energy",
            "name": "机械能（动能/势能）",
            "points": [
              "3.2 机械能：通过实验，认识动能和势能。探究并了解动能、势能的变化与哪些因素有关。",
              "3.1 能量、能量的转化和转移：结合实例，认识能量可以从一个物体转移到另一个物体，不同形式的能量可以互相转化。",
              "3.5 能量守恒：知道机械能守恒定律。能用机械能守恒定律分析生产、生活中的有关问题。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-work-energy"
            ],
            "courses": [
              "phy-m-mechanical-energy"
            ]
          },
          {
            "id": "phy-m-energy-conservation",
            "name": "能量转化与守恒定律",
            "points": [
              "3.5 能量守恒：知道能量守恒定律；列举日常生活中能量守恒的实例；有用能量守恒的观点分析物理现象的意识。",
              "认识机械能、内能、电磁能及能量的转化与守恒；能将所学物理知识与实际情境联系起来，解释有关现象，解决简单的实际问题。初步形成能量观念。",
              "能量主题旨在引导学生了解不同形式的能量，知道能量的转化与转移，认识能量守恒定律，了解能源与可持续发展。"
            ],
            "domain": "运动和力",
            "prerequisites": [
              "phy-m-mechanical-energy",
              "phy-m-internal-energy"
            ],
            "courses": [
              "phy-m-energy-conservation"
            ]
          },
          {
            "id": "phy-m-static-electricity",
            "name": "静电现象",
            "points": [
              "一级主题“运动和相互作用”包含“多种多样的运动形式”“机械运动和力”“声和光”“电和磁”四个二级主题。",
              "“电和磁”二级主题的课程内容包含较多的物理概念和规律，与生产生活密切相关。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "sci-e-electricity-basic",
              "sci-e-conductors-insulators"
            ],
            "courses": [
              "phy-m-static-electricity"
            ]
          },
          {
            "id": "phy-m-current-circuit",
            "name": "电流与电路",
            "points": [
              "2.4 电和磁（二级主题）包含电流和电路相关内容，旨在引导学生从物理学视角认识电和磁的含义，初步形成运动和相互作用观念。",
              "通过实验，了解物质的导电性，比较导体、半导体、绝缘体导电性能的差异。",
              "知道简单电路。会连接简单的串联电路和并联电路。能说出生产生活中采用简单串联电路或并联电路的实例。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-static-electricity"
            ],
            "courses": [
              "phy-m-current-circuit"
            ]
          },
          {
            "id": "phy-m-circuit-basics",
            "name": "电路基本连接",
            "points": [
              "2.4 电和磁（二级主题）",
              "了解物质的导电性，比较导体、半导体、绝缘体导电性能的差异。",
              "通过实验，了解物质的导电性。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-current-circuit"
            ],
            "courses": [
              "phy-m-circuit-basics"
            ]
          },
          {
            "id": "phy-m-series-parallel",
            "name": "串联与并联电路",
            "points": [
              "【内容要求】2.4 电和磁：通过实验，了解串、并联电路的特点。能连接简单的串联电路和并联电路。",
              "【内容要求】2.4 电和磁：会使用电流表和电压表。探究并了解串联电路和并联电路中电流、电压的特点。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-circuit-basics"
            ],
            "courses": [
              "phy-m-series-parallel"
            ]
          },
          {
            "id": "phy-m-current-measurement",
            "name": "电流的测量",
            "points": [
              "会测量力的大小。了解同一直线上的二力合成。知道二力平衡条件。",
              "会选用适当的工具测量长度和时间，会根据生活经验估测长度和时间。",
              "能制订简单的实验方案，会正确使用天平、温度计等实验器材，能按实验方案操作，获得实验数据。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-series-parallel"
            ],
            "courses": [
              "phy-m-current-measurement"
            ]
          },
          {
            "id": "phy-m-voltage",
            "name": "电压",
            "points": [
              "一级主题“运动和相互作用”包含“多种多样的运动形式”“机械运动和力”“声和光”“电和磁”四个二级主题。",
              "“电和磁”是“运动和相互作用”主题下的二级主题之一，旨在引导学生了解电和磁的含义，初步形成运动和相互作用观念。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-series-parallel"
            ],
            "courses": [
              "phy-m-voltage"
            ]
          },
          {
            "id": "phy-m-resistance",
            "name": "电阻",
            "points": [
              "通过实验，了解物质的导电性，比较导体、半导体、绝缘体导电性能的差异。",
              "通过实验，了解物质的一些物理属性，如弹性、磁性、导电性和导热性等，能用语言、文字或图表描述物质的物理属性。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-current-measurement",
              "phy-m-voltage"
            ],
            "courses": [
              "phy-m-resistance"
            ]
          },
          {
            "id": "phy-m-ohms-law",
            "name": "欧姆定律",
            "points": [
              "通过实验，探究电流与电压、电阻的关系。理解欧姆定律。",
              "能运用欧姆定律解决简单的电学问题，解释生活中的有关现象。",
              "在‘电和磁’主题教学中，应注重通过实验探究，引导学生理解欧姆定律等核心规律。"
            ],
            "domain": "电现象与电路",
            "semester": "上",
            "prerequisites": [
              "phy-m-resistance"
            ],
            "courses": [
              "phy-m-ohms-law",
              "phy-ohms-law"
            ]
          },
          {
            "id": "phy-m-circuit-calculation",
            "name": "电路综合计算",
            "points": [
              "2.4 电和磁（二级主题）包含电路计算（串并联）相关内容，属于‘运动和相互作用’主题。",
              "能运用物体的浮沉条件说明生产生活中的有关现象。了解潜水艇的浮沉原理。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-ohms-law"
            ],
            "courses": [
              "phy-m-circuit-calculation"
            ]
          },
          {
            "id": "phy-m-electric-power",
            "name": "电功率",
            "points": [
              "二级主题“电和磁”属于“运动和相互作用”一级主题，包含电功与电功率相关内容，旨在引导学生认识电和磁的含义。",
              "一级主题“能量”包含“电磁能”二级主题，该主题涉及电功、电功率等概念，要求学生认识电磁能及能量的转化与守恒。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-ohms-law"
            ],
            "courses": [
              "phy-m-electric-power"
            ]
          },
          {
            "id": "phy-m-joule-law",
            "name": "焦耳定律",
            "points": [
              "通过实验，理解电功和电功率。知道用电器的额定功率和实际功率。",
              "探究并了解焦耳定律。能用焦耳定律说明生产生活中的有关现象。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-electric-power",
              "phy-m-internal-energy"
            ],
            "courses": [
              "phy-m-joule-law"
            ]
          },
          {
            "id": "phy-m-electrical-safety",
            "name": "家庭电路与安全用电",
            "points": [
              "2.4 电和磁（二级主题）属于一级主题‘运动和相互作用’，旨在引导学生从物理学视角认识电和磁的含义，初步形成运动和相互作用观念。",
              "了解电和磁的含义，初步形成运动和相互作用观念；了解我国古代和现代的相关科技成就，体会中华民族的智慧。"
            ],
            "domain": "电现象与电路",
            "prerequisites": [
              "phy-m-electric-power"
            ],
            "courses": [
              "phy-m-electrical-safety"
            ]
          },
          {
            "id": "phy-m-magnetism-basics",
            "name": "磁现象",
            "points": [
              "一级主题“运动和相互作用”包含“多种多样的运动形式”“机械运动和力”“声和光”“电和磁”四个二级主题。",
              "“电和磁”是“运动和相互作用”主题下的二级主题之一。"
            ],
            "domain": "电与磁",
            "prerequisites": [
              "sci-e-magnetism"
            ],
            "courses": [
              "phy-m-magnetism-basics"
            ]
          },
          {
            "id": "phy-m-electromagnetism-basic",
            "name": "电流的磁效应",
            "points": [
              "一级主题“运动和相互作用”包含“多种多样的运动形式”“机械运动和力”“声和光”“电和磁”四个二级主题。",
              "“电和磁”是“运动和相互作用”主题下的二级主题之一，旨在引导学生从物理学视角认识电和磁的含义。"
            ],
            "domain": "电与磁",
            "prerequisites": [
              "phy-m-current-circuit",
              "phy-m-magnetism-basics"
            ],
            "courses": [
              "phy-m-electromagnetism-basic"
            ]
          },
          {
            "id": "phy-m-electric-motor",
            "name": "电动机原理",
            "points": [
              "一级主题“运动和相互作用”包含“多种多样的运动形式”“机械运动和力”“声和光”“电和磁”四个二级主题。",
              "“电和磁”是“运动和相互作用”主题下的二级主题之一，旨在引导学生从物理学视角认识电和磁的含义。"
            ],
            "domain": "电与磁",
            "prerequisites": [
              "phy-m-electromagnetism-basic"
            ],
            "courses": [
              "phy-m-electric-motor"
            ]
          },
          {
            "id": "phy-m-electromagnetic-induction",
            "name": "电磁感应",
            "points": [
              "2.4 电和磁（二级主题）包含电磁感应相关内容，旨在引导学生从物理学视角认识电和磁的相互作用。",
              "通过实验，认识电磁感应。了解发电机的工作原理。了解电磁感应在生产生活中的应用。",
              "能运用电磁感应知识，解释发电机的工作原理，说明电磁感应在生产生活中的应用。"
            ],
            "domain": "电与磁",
            "prerequisites": [
              "phy-m-electromagnetism-basic"
            ],
            "courses": [
              "phy-m-electromagnetic-induction"
            ]
          },
          {
            "id": "phy-m-generator",
            "name": "发电机原理",
            "points": [
              "通过实验，认识浮力。探究并了解浮力大小与哪些因素有关。知道阿基米德原理，能运用物体的浮沉条件说明生产生活中的有关现象。",
              "知道简单机械。探究并了解杠杆的平衡条件。",
              "通过常见事例或实验，了解重力、弹力和摩擦力，认识力的作用效果。探究并了解滑动摩擦力的大小与哪些因素有关。"
            ],
            "domain": "电与磁",
            "prerequisites": [
              "phy-m-electromagnetic-induction"
            ],
            "courses": [
              "phy-m-generator"
            ]
          }
        ]
      },
      {
        "subject": "chemistry",
        "name": "初中化学",
        "nodes": [
          {
            "id": "chem-m-chemistry-intro",
            "name": "走进化学世界",
            "points": [
              "化学变化有新物质生成，其本质是原子的重新组合，且伴随着能量变化，并遵循一定的规律；在一定条件下通过化学反应可以实现物质转化。",
              "初步认识物质的多样性，能对物质及其变化进行分类；能从元素、原子、分子视角初步分析物质的组成及变化，认识“在一定条件下通过化学反应可以实现物质转化”的重要性。",
              "能从宏观、微观、符号相结合的视角认识和表征化学变化；初步建立物质及其变化的相关模型，能根据物质的类别和信息提示预测其性质，并能解释一些简单的化学问题。"
            ],
            "domain": "科学探究与化学实验",
            "prerequisites": [
              "sci-e-solid-liquid-gas",
              "sci-e-dissolving",
              "sci-e-materials-in-life"
            ],
            "courses": [
              "chem-m-chemistry-intro"
            ]
          },
          {
            "id": "chem-m-lab-safety",
            "name": "实验基本操作与安全",
            "points": [
              "学会试剂的取用、简单仪器的使用及连接、加热等实验基本操作。",
              "能正确选取实验试剂和仪器，依据实验方案完成必做实验，并能全面、准确地记录实验过程和现象。",
              "能严格遵守实验室安全规则，能识别实验室安全警示标志和常用危险化学品标志，具有预防化学实验安全事故的意识。"
            ],
            "domain": "科学探究与化学实验",
            "prerequisites": [
              "chem-m-chemistry-intro"
            ],
            "courses": [
              "chem-m-lab-safety"
            ]
          },
          {
            "id": "chem-m-scientific-inquiry-experiment",
            "name": "科学探究方法",
            "points": [
              "知道化学实验是进行科学探究的重要方式，具备基本的化学实验技能是学习化学和进行探究活动的基础和保证。",
              "能独立或经过启发发现和表述有探究价值的问题，提出猜想与假设；能设计简单的实验方案或实践活动方案；能独立或与他人合作开展化学实验，收集证据。",
              "积极创造条件，开足、开好必做实验和跨学科实践活动，倡导“做中学”“用中学”“创中学”，充分发挥必做实验和跨学科实践活动的教学功能及育人价值。"
            ],
            "domain": "科学探究与化学实验",
            "prerequisites": [
              "chem-m-lab-safety"
            ],
            "courses": [
              "chem-m-scientific-inquiry-experiment"
            ]
          },
          {
            "id": "chem-m-atom-molecule",
            "name": "分子与原子",
            "points": [
              "物质是由分子、原子构成的，物质结构决定性质，物质性质决定用途。",
              "能从元素、原子、分子视角初步分析物质的组成及变化。",
              "原子结构模型的建立和发展。"
            ],
            "domain": "物质的组成与结构",
            "prerequisites": [
              "chem-m-chemistry-intro"
            ],
            "courses": [
              "chem-m-atom-molecule"
            ]
          },
          {
            "id": "chem-m-atom-structure",
            "name": "原子的结构",
            "points": [
              "物质是由分子、原子构成的，物质结构决定性质，物质性质决定用途。",
              "能从元素、原子、分子视角初步分析物质的组成及变化。",
              "原子结构模型的建立和发展。"
            ],
            "domain": "物质的组成与结构",
            "prerequisites": [
              "chem-m-atom-molecule"
            ],
            "courses": [
              "chem-m-atom-structure"
            ]
          },
          {
            "id": "chem-m-atomic-structure",
            "name": "原子核外电子排布",
            "points": [
              "物质是由分子、原子构成的，物质结构决定性质，物质性质决定用途。",
              "能从元素、原子、分子视角初步分析物质的组成及变化，认识“在一定条件下通过化学反应可以实现物质转化”的重要性。",
              "原子结构模型的建立和发展。"
            ],
            "domain": "物质的组成与结构",
            "prerequisites": [
              "chem-m-atom-structure"
            ],
            "courses": [
              "chem-m-atomic-structure-demo"
            ]
          },
          {
            "id": "chem-m-element-concept",
            "name": "元素",
            "points": [
              "物质是由元素组成的；物质是由分子、原子构成的，物质结构决定性质，物质性质决定用途。",
              "能从元素、原子、分子视角初步分析物质的组成及变化，认识“在一定条件下通过化学反应可以实现物质转化”的重要性。",
              "氧气的发现，酸碱指示剂的发现；水的组成的探索；原子结构模型的建立和发展。"
            ],
            "domain": "物质的组成与结构",
            "prerequisites": [
              "chem-m-atom-structure"
            ],
            "courses": [
              "chem-m-element-concept"
            ]
          },
          {
            "id": "chem-m-ion-concept",
            "name": "离子",
            "points": [
              "物质是由分子、原子构成的，物质结构决定性质，物质性质决定用途。",
              "能从元素、原子、分子视角初步分析物质的组成及变化。",
              "原子结构模型的建立和发展。"
            ],
            "domain": "物质的组成与结构",
            "prerequisites": [
              "chem-m-atom-structure"
            ],
            "courses": [
              "chem-m-ion-concept"
            ]
          },
          {
            "id": "chem-m-periodic-table",
            "name": "元素周期表",
            "points": [
              "物质是由元素组成的；物质是由分子、原子构成的，物质结构决定性质，物质性质决定用途。",
              "能从元素、原子、分子视角初步分析物质的组成及变化，认识“在一定条件下通过化学反应可以实现物质转化”的重要性。"
            ],
            "domain": "物质的组成与结构",
            "semester": "上",
            "prerequisites": [
              "chem-m-element-concept"
            ],
            "courses": [
              "chem-periodic-table"
            ]
          },
          {
            "id": "chem-m-chemical-formula",
            "name": "化学式与化合价",
            "points": [
              "物质是由分子、原子构成的，物质结构决定性质，物质性质决定用途。",
              "能从元素、原子、分子视角初步分析物质的组成及变化，认识“在一定条件下通过化学反应可以实现物质转化”的重要性。",
              "初步学会从定性和定量的视角研究物质的组成及变化，认识质量守恒定律对资源利用和物质转化的重要意义。"
            ],
            "domain": "物质的组成与结构",
            "semester": "上",
            "prerequisites": [
              "chem-m-element-concept",
              "chem-m-ion-concept"
            ],
            "courses": [
              "chem-m-chemical-formula"
            ]
          },
          {
            "id": "chem-m-matter-classification",
            "name": "物质的分类",
            "points": [
              "物质具有多样性，可以分为不同的类别。",
              "初步认识物质的多样性，能对物质及其变化进行分类。",
              "初步学会运用观察、实验、调查等手段获取化学事实，能初步运用比较、分类、分析、综合、归纳等方法认识物质及其变化。"
            ],
            "domain": "物质的组成与结构",
            "semester": "上",
            "prerequisites": [
              "chem-m-element-concept"
            ],
            "courses": [
              "chem-m-matter-classification"
            ]
          },
          {
            "id": "chem-m-substance-classification",
            "name": "纯净物、混合物、化合物",
            "points": [
              "初步认识物质的多样性，能对物质及其变化进行分类；能从元素、原子、分子视角初步分析物质的组成及变化。",
              "物质具有多样性，可以分为不同的类别；化学变化有新物质生成，其本质是原子的重新组合，且伴随着能量变化，并遵循一定的规律。",
              "物质是由元素组成的；物质具有多样性，可以分为不同的类别；物质是由分子、原子构成的，物质结构决定性质，物质性质决定用途。"
            ],
            "domain": "物质的组成与结构",
            "prerequisites": [
              "chem-m-matter-classification"
            ],
            "courses": [
              "chem-m-substance-classification"
            ]
          },
          {
            "id": "chem-m-mass-conservation",
            "name": "质量守恒定律",
            "points": [
              "认识质量守恒定律对资源利用和物质转化的重要意义；能从定性和定量的视角研究物质的组成及变化。",
              "化学反应及质量守恒定律：化学变化的特征及化学反应的基本类型；化学反应的定量关系与质量守恒定律。",
              "质量守恒定律的发现；通过具体的化学实验探究活动，学习研究物质性质，探究物质组成和反应规律。"
            ],
            "domain": "物质的化学变化",
            "prerequisites": [
              "chem-m-atom-molecule"
            ],
            "courses": [
              "chem-m-mass-conservation"
            ]
          },
          {
            "id": "chem-m-chemical-equation",
            "name": "化学方程式",
            "points": [
              "化学变化有新物质生成，其本质是原子的重新组合，且伴随着能量变化，并遵循一定的规律。",
              "能从宏观、微观、符号相结合的视角认识和表征化学变化。",
              "化学反应的定量关系与质量守恒定律。"
            ],
            "domain": "物质的化学变化",
            "semester": "上",
            "prerequisites": [
              "chem-m-mass-conservation",
              "chem-m-chemical-formula"
            ],
            "courses": [
              "chem-m-chemical-equation"
            ]
          },
          {
            "id": "chem-m-equation-calculation",
            "name": "根据化学方程式计算",
            "points": [
              "化学反应的定量关系与质量守恒定律。",
              "初步学会从定性和定量的视角研究物质的组成及变化，认识质量守恒定律对资源利用和物质转化的重要意义。"
            ],
            "domain": "物质的化学变化",
            "prerequisites": [
              "chem-m-chemical-equation"
            ],
            "courses": [
              "chem-m-equation-calculation"
            ]
          },
          {
            "id": "chem-m-reaction-types",
            "name": "化学反应基本类型",
            "points": [
              "化学变化的特征及化学反应的基本类型",
              "初步认识物质的多样性，能对物质及其变化进行分类",
              "化学变化有新物质生成，其本质是原子的重新组合，且伴随着能量变化，并遵循一定的规律"
            ],
            "domain": "物质的化学变化",
            "prerequisites": [
              "chem-m-chemical-equation"
            ],
            "courses": [
              "chem-m-reaction-types"
            ]
          },
          {
            "id": "chem-m-catalyst-concept",
            "name": "催化剂与催化作用",
            "points": [
              "探究过氧化氢分解反应中二氧化锰的催化作用。",
              "通过具体的化学实验探究活动，学习研究物质性质，探究物质组成和反应规律。"
            ],
            "domain": "物质的化学变化",
            "prerequisites": [
              "chem-m-chemical-equation"
            ],
            "courses": [
              "chem-m-catalyst-concept"
            ]
          },
          {
            "id": "chem-m-air-composition",
            "name": "空气的组成",
            "points": [
              "2.2.1 空气、氧气、二氧化碳：知道空气的主要成分，认识空气对人类生活的重要作用。",
              "能通过小组合作，有意识地应用化学、技术、工程及其他学科知识，完成实验探究及跨学科实践活动。",
              "公交车或火车车厢内空气的成分。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-chemistry-intro"
            ],
            "courses": [
              "chem-m-air-composition"
            ]
          },
          {
            "id": "chem-m-oxygen-properties",
            "name": "氧气的性质",
            "points": [
              "氧气的实验室制取与性质。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-air-composition"
            ],
            "courses": [
              "chem-oxygen-properties"
            ]
          },
          {
            "id": "chem-m-oxygen-preparation",
            "name": "氧气的制取",
            "points": [
              "初步学习运用简单的装置和方法制取某些气体。",
              "氧气的实验室制取与性质。",
              "能正确选取实验试剂和仪器，依据实验方案完成必做实验，并能全面、准确地记录实验过程和现象。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-oxygen-properties",
              "chem-m-lab-safety"
            ],
            "courses": [
              "chem-m-oxygen-preparation"
            ]
          },
          {
            "id": "chem-m-water-properties",
            "name": "水的组成与净化",
            "points": [
              "水的组成及变化的探究。",
              "初步学习使用过滤、蒸发的方法对混合物进行分离。",
              "水的组成的探索；工业区污水的处理。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-atom-molecule"
            ],
            "courses": [
              "chem-m-water-properties"
            ]
          },
          {
            "id": "chem-m-hydrogen-properties",
            "name": "氢气的性质",
            "points": [
              "初步学习运用简单的装置和方法制取某些气体。",
              "能正确选取实验试剂和仪器，依据实验方案完成必做实验，并能全面、准确地记录实验过程和现象。",
              "探究二氧化碳与水或氢氧化钠稀溶液的反应。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-water-properties"
            ],
            "courses": [
              "chem-m-hydrogen-properties"
            ]
          },
          {
            "id": "chem-m-solution-concept",
            "name": "溶液的形成",
            "points": [
              "初步学会配制一定溶质质量分数的溶液。",
              "测定并比较氯化钠、硝酸铵、氢氧化钠在水中溶解时溶液的温度变化。"
            ],
            "domain": "物质的性质与应用",
            "semester": "下",
            "prerequisites": [
              "chem-m-water-properties"
            ],
            "courses": [
              "chem-m-solution-concept"
            ]
          },
          {
            "id": "chem-m-solubility",
            "name": "溶解度",
            "points": [
              "初步学会配制一定溶质质量分数的溶液。",
              "测定并比较氯化钠、硝酸铵、氢氧化钠在水中溶解时溶液的温度变化。"
            ],
            "domain": "物质的性质与应用",
            "semester": "下",
            "prerequisites": [
              "chem-m-solution-concept"
            ],
            "courses": [
              "chem-m-solubility"
            ]
          },
          {
            "id": "chem-m-solution-concentration",
            "name": "溶液浓度（质量分数）",
            "points": [
              "初步学会配制一定溶质质量分数的溶液。",
              "一定溶质质量分数的氯化钠溶液的配制。",
              "能正确选取实验试剂和仪器，依据实验方案完成必做实验。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-solubility"
            ],
            "courses": [
              "chem-m-solution-concentration"
            ]
          },
          {
            "id": "chem-m-carbon-allotropes",
            "name": "碳的单质（金刚石/石墨/C60）",
            "points": [
              "物质是由分子、原子构成的，物质结构决定性质，物质性质决定用途。",
              "能通过实例认识物质的性质与应用的关系，形成合理利用物质的意识。",
              "认识物质性质的思路与方法。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-element-concept"
            ],
            "courses": [
              "chem-m-carbon-allotropes"
            ]
          },
          {
            "id": "chem-m-co2-properties",
            "name": "二氧化碳的性质与制取",
            "points": [
              "（3）二氧化碳的实验室制取与性质。",
              "探究二氧化碳与水或氢氧化钠稀溶液的反应",
              "初步学习运用简单的装置和方法制取某些气体。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-carbon-allotropes",
              "chem-m-chemical-equation"
            ],
            "courses": [
              "chem-m-co2-properties"
            ]
          },
          {
            "id": "chem-m-co-properties",
            "name": "一氧化碳的性质",
            "points": [
              "2.2.1 空气、氧气、二氧化碳：了解空气的主要成分，认识氧气、二氧化碳的主要性质和用途。",
              "（3）二氧化碳的实验室制取与性质。",
              "能基于必做实验形成的探究思路与方法，结合物质的组成及变化等相关知识，分析解决真实情境中的简单实验问题。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-co2-properties"
            ],
            "courses": [
              "chem-m-co-properties"
            ]
          },
          {
            "id": "chem-m-metal-properties",
            "name": "金属的物理与化学性质",
            "points": [
              "常见金属的物理性质和化学性质。",
              "能独立或与他人合作开展化学实验，收集证据；能基于事实，分析证据与假设的关系，形成结论。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-chemical-equation"
            ],
            "courses": [
              "chem-m-metal-properties"
            ]
          },
          {
            "id": "chem-m-metals-activity",
            "name": "金属的活动性",
            "points": [
              "常见金属的物理性质和化学性质。",
              "能正确选取实验试剂和仪器，依据实验方案完成必做实验，并能全面、准确地记录实验过程和现象。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-metal-properties"
            ],
            "courses": [
              "chem-m-metals-activity"
            ]
          },
          {
            "id": "chem-m-activity-series",
            "name": "金属活动性顺序",
            "points": [
              "2.2.3 金属与金属矿物：认识金属的物理性质和化学性质，了解金属活动性顺序及其应用。",
              "（4）常见金属的物理性质和化学性质。",
              "能基于必做实验形成的探究思路与方法，结合物质的组成及变化等相关知识，分析解决真实情境中的简单实验问题。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-metals-activity"
            ],
            "courses": [
              "chem-m-activity-series"
            ]
          },
          {
            "id": "chem-m-metal-smelting",
            "name": "金属冶炼",
            "points": [
              "2.2.3 金属与金属矿物：了解金属的物理性质和化学性质，认识金属材料在生产、生活和社会发展中的重要作用。",
              "（4）常见金属的物理性质和化学性质。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-activity-series",
              "chem-m-co-properties"
            ],
            "courses": [
              "chem-m-metal-smelting"
            ]
          },
          {
            "id": "chem-m-metal-corrosion",
            "name": "金属的锈蚀与防护",
            "points": [
              "常见金属的物理性质和化学性质。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-metal-properties"
            ],
            "courses": [
              "chem-m-metal-corrosion"
            ]
          },
          {
            "id": "chem-m-ph-indicators",
            "name": "酸碱指示剂与 pH",
            "points": [
              "学会用酸碱指示剂、pH 试纸检验溶液的酸碱性。",
              "探究氢氧化钠溶液和稀盐酸发生中和反应时的温度变化、pH 变化。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-solution-concept"
            ],
            "courses": [
              "chem-m-ph-indicators"
            ]
          },
          {
            "id": "chem-m-acid-base-concept",
            "name": "酸和碱",
            "points": [
              "学会用酸碱指示剂、pH试纸检验溶液的酸碱性。",
              "常见酸、碱的化学性质。",
              "探究氢氧化钠溶液和稀盐酸发生中和反应时的温度变化、pH变化。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-chemical-equation",
              "chem-m-ion-concept"
            ],
            "courses": [
              "chem-m-acid-base-concept"
            ]
          },
          {
            "id": "chem-m-neutralization",
            "name": "中和反应",
            "points": [
              "探究氢氧化钠溶液和稀盐酸发生中和反应时的温度变化、pH 变化。",
              "学会用酸碱指示剂、pH 试纸检验溶液的酸碱性。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-acid-base-concept",
              "chem-m-ph-indicators"
            ],
            "courses": [
              "chem-m-neutralization"
            ]
          },
          {
            "id": "chem-m-salt-reactions",
            "name": "盐的性质",
            "points": [
              "知道化学是研究物质的组成、结构、性质、转化及应用的一门基础学科，其特征是从分子层次认识物质，通过化学变化创造物质。",
              "初步学会根据某些性质检验和区分一些常见的物质。",
              "能通过具体的化学实验探究活动，学习研究物质性质，探究物质组成和反应规律，进行物质分离、检验和制备等不同类型化学实验探究活动的一般思路与基本方法。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-neutralization",
              "chem-m-activity-series"
            ],
            "courses": [
              "chem-m-salt-reactions"
            ]
          },
          {
            "id": "chem-m-acid-base-salt",
            "name": "酸碱盐综合",
            "points": [
              "2.2.4 常见的酸、碱、盐：认识常见的酸、碱、盐（如盐酸、硫酸、氢氧化钠、氢氧化钙、碳酸钠等）的主要性质和用途。",
              "（5）常见酸、碱的化学性质。",
              "（5）学会用酸碱指示剂、pH试纸检验溶液的酸碱性。"
            ],
            "domain": "物质的性质与应用",
            "prerequisites": [
              "chem-m-salt-reactions"
            ],
            "courses": [
              "chem-m-acid-base-salt"
            ]
          },
          {
            "id": "chem-m-chemistry-society-practice",
            "name": "化学与生产生活（跨学科实践）",
            "points": [
              "化学与社会·跨学科实践学习主题包括化学与可持续发展、化学与资源能源材料环境健康、化学技术工程融合解决跨学科问题的思路与方法、应对未来不确定性挑战、跨学科实践活动。",
              "各学科用不少于本学科总课时的10%开展跨学科主题学习活动。在学习主题5中，围绕学生核心素养的目标要求，设计了10个跨学科实践活动供选择使用。",
              "能通过小组合作，有意识地应用化学、技术、工程及其他学科知识，完成实验探究及跨学科实践活动，能体现创新意识和勇于克服困难的品质。"
            ],
            "domain": "化学与社会·跨学科实践",
            "prerequisites": [
              "chem-m-acid-base-salt"
            ],
            "courses": [
              "chem-daily-life"
            ]
          }
        ]
      },
      {
        "subject": "history",
        "name": "初中历史",
        "nodes": [
          {
            "id": "hist-m-ancient-civilizations",
            "name": "古代亚非文明（古埃及/古巴比伦/古印度）",
            "points": [
              "世界古代史课程内容包括区域文明的多元发展，使学生了解人类文明从分散到整体的历程。",
              "通过了解古代主要文明区域，认识世界古代文明的多元特点，理解人类文明的共同价值。",
              "能够将事件、人物、现象等置于历史发展的特定或总体进程及具体的地理空间中加以考察。"
            ],
            "domain": "世界古代史",
            "courses": [
              "hist-m-ancient-civilizations"
            ]
          },
          {
            "id": "hist-m-greece-rome",
            "name": "古希腊与古罗马文明",
            "points": [
              "世界古代史包括古代区域文明的多元发展，以及古代帝国的产生、发展与衰落。",
              "通过了解古代希腊罗马文明，初步认识古代欧洲文明的发展特征。"
            ],
            "domain": "世界古代史",
            "prerequisites": [
              "hist-m-ancient-civilizations"
            ],
            "courses": [
              "hist-m-greece-rome"
            ]
          },
          {
            "id": "hist-m-medieval-europe",
            "name": "中世纪欧洲",
            "points": [
              "世界古代史内容包括区域文明的多元发展，重点展现古代文明的产生、发展与多元面貌。",
              "通过学习世界古代史，了解人类早期文明的产生、发展与多元面貌，认识古代文明的成就及其对后世的影响。"
            ],
            "domain": "世界古代史",
            "prerequisites": [
              "hist-m-greece-rome"
            ],
            "courses": [
              "history-medieval-europe"
            ]
          },
          {
            "id": "hist-m-renaissance",
            "name": "文艺复兴与宗教改革",
            "points": [
              "通过郑和下西洋、威继光抗倭等史事，了解明朝的对外关系；通过了解郑成功收复人台湾、清朝在台湾的建制、册封达赖和班禅以及设置驻藏大臣等中央政权在边疆地区的各种举措，认识西藏地区、新疆地区、南海诸岛、台湾及…",
              "通过印刷术、指南针、火药的应用和外传，认识中国古代的重要发明对世界文明发展的贡献。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-medieval-europe"
            ],
            "courses": [
              "hist-m-renaissance"
            ]
          },
          {
            "id": "hist-m-modern-world-formation",
            "name": "资本主义制度初步确立",
            "points": [
              "世界近代史：资本主义发展、社会主义运动和民族解放运动。",
              "了解人类文化的多样性，理解和尊重世界各国、各民族的文化传统，认识中国历史与世界历史相互关联。",
              "学生通过学习不同历史时期各个方面的史实，了解人类社会从分散到整体、从低级到高级的发展历程。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-renaissance"
            ],
            "courses": [
              "hist-m-modern-world-formation"
            ]
          },
          {
            "id": "hist-m-english-revolution",
            "name": "英国资产阶级革命",
            "points": [
              "世界近代史内容要求：了解资本主义发展、社会主义运动和民族解放运动的历史进程。",
              "课程内容结构示意图中，世界近代史部分主题为“资本主义发展、社会主义运动和民族解放运动”。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-renaissance"
            ],
            "courses": [
              "hist-m-english-revolution"
            ]
          },
          {
            "id": "hist-m-american-revolution",
            "name": "美国独立战争",
            "points": [
              "世界近代史：资本主义发展、社会主义运动和民族解放运动。",
              "了解人类文化的多样性，理解和尊重世界各国、各民族的文化传统，认识中国历史与世界历史相互关联。",
              "能够从历史发展的角度认识其地位和作用。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-english-revolution"
            ],
            "courses": [
              "hist-m-american-revolution"
            ]
          },
          {
            "id": "hist-m-french-revolution",
            "name": "法国大革命",
            "points": [
              "世界近代史的内容要求包括：资本主义发展、社会主义运动和民族解放运动。",
              "通过了解法国大革命，理解资本主义制度的确立和扩展，以及其对世界历史进程的影响。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-english-revolution"
            ],
            "courses": [
              "hist-m-french-revolution"
            ]
          },
          {
            "id": "hist-m-industrial-revolution",
            "name": "工业革命",
            "points": [
              "世界近代史内容要求：了解资本主义发展、社会主义运动和民族解放运动。",
              "课程内容结构示意图显示，世界近代史的主题包括资本主义发展、社会主义运动和民族解放运动。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-english-revolution"
            ],
            "courses": [
              "hist-m-industrial-revolution",
              "history-industrial-revolution",
              "hist-m-industrial-rev-demo"
            ]
          },
          {
            "id": "hist-m-industrial-revolution-modernization",
            "name": "工业革命与近代化",
            "points": [
              "世界近代史内容要求：了解资本主义发展、社会主义运动和民族解放运动。",
              "课程内容结构示意图：世界近代史对应“资本主义发展、社会主义运动和民族解放运动”。",
              "历史课程内容按照历史时序展示中外历史发展基本过程，把握不同历史时期的时代特征。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-industrial-revolution"
            ],
            "courses": [
              "hist-m-industrial-revolution-modernization"
            ]
          },
          {
            "id": "hist-m-ww1",
            "name": "第一次世界大战",
            "points": [
              "1.1 第一次世界大战与俄国十月革命 通过了解“三国同盟”和“三国协约”、萨拉热窝事件、凡尔合 战役等，分析第一次世界大战爆发的原因，了解其基本进程以及给人 类社会带来的巨大灾难;知道列宁领导的十月革…"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-industrial-revolution"
            ],
            "courses": [
              "hist-m-ww1"
            ]
          },
          {
            "id": "hist-m-russian-revolution",
            "name": "俄国十月革命",
            "points": [
              "1.1 第一次世界大战与俄国十月革命 通过了解“三国同盟”和“三国协约”、萨拉热窝事件、凡尔合 战役等，分析第一次世界大战爆发的原因，了解其基本进程以及给人 类社会带来的巨大灾难;知道列宁领导的十月革…"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-ww1"
            ],
            "courses": [
              "hist-m-russian-revolution"
            ]
          },
          {
            "id": "hist-m-ww2",
            "name": "第二次世界大战",
            "points": [
              "世界现代史部分应包含两次世界大战、十月革命与国际秩序的演变、冷战与世界格局的多极化、经济全球化与世界多极化等内容。",
              "通过了解两次世界大战，理解20世纪上半期国际秩序的变动；了解冷战时期的国际关系，认识战后世界格局的演变。",
              "能够了解世界现代史的基本线索和重要事件、人物、现象，知道重大史事发生的时间和地点、原因和结果，初步养成历史时序意识和历史空间感。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-ww1"
            ],
            "courses": [
              "history-ww2"
            ]
          },
          {
            "id": "hist-m-world-wars-cold-war",
            "name": "两次世界大战与冷战",
            "points": [
              "世界现代史部分应包含战争与革命、和平与发展等主题，了解两次世界大战与冷战等重大历史事件。",
              "通过了解两次世界大战、冷战等重大历史事件，认识战争与革命、和平与发展是20世纪世界历史的重要主题。",
              "能够初步学会在唯物史观指导下，分析两次世界大战与冷战等重大历史事件的原因、过程和影响。"
            ],
            "domain": "世界近现代史",
            "semester": "下",
            "prerequisites": [
              "hist-m-ww2"
            ],
            "courses": [
              "hist-m-world-wars-cold-war"
            ]
          },
          {
            "id": "hist-m-cold-war",
            "name": "冷战格局",
            "points": [
              "世界现代史部分应包含冷战与两极格局的内容，使学生了解二战后国际关系的基本格局。",
              "通过了解冷战的形成与两极格局的演变，认识其对世界局势的深远影响。",
              "引导学生分析冷战时期的重大事件，理解国际力量对比的变化及其历史意义。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-russian-revolution",
              "hist-m-ww2"
            ],
            "courses": [
              "hist-m-cold-war"
            ]
          },
          {
            "id": "hist-m-globalization",
            "name": "全球化与多极化",
            "points": [
              "通过世界多极化、经济全球化、社会信息化和文化多样化，了解 现代世界的基本特点; 知道人口、资源、环境、传染病、社会治理等 人类发展面临的共同问题;通过了解联合国、世界贸易组织等，认识 世界各国为解决全…"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-cold-war"
            ],
            "courses": [
              "hist-m-globalization"
            ]
          },
          {
            "id": "hist-m-decolonization",
            "name": "亚非拉民族解放运动",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-cold-war"
            ],
            "courses": [
              "hist-m-decolonization"
            ]
          },
          {
            "id": "hist-m-scientific-revolution",
            "name": "欧洲科学革命与启蒙运动",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-renaissance"
            ],
            "courses": [
              "hist-m-scientific-revolution"
            ]
          },
          {
            "id": "hist-m-united-nations",
            "name": "联合国与战后国际秩序",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-ww2"
            ],
            "courses": [
              "hist-m-united-nations"
            ]
          },
          {
            "id": "hist-m-ww2-asia-pacific",
            "name": "第二次世界大战（亚太战场）",
            "points": [
              "能够在具体时空背景中理解历史事件、制度与社会变迁。",
              "能够运用史料、地图、时间轴等材料解释历史现象之间的因果关系。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-m-ww1"
            ],
            "courses": [
              "hist-m-ww2-asia-pacific"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "初中道德与法治",
        "nodes": [
          {
            "id": "pol-m-g9-lo-u3",
            "name": "走向未来的少年",
            "points": [
              "【课标】传承中华优秀传统文化，建设美丽中国，坚定文化自信。",
              "【教材·下·走向未来的少年】少年的担当；我的毕业季；从这里出发"
            ],
            "domain": "我与国家和社会",
            "semester": "下",
            "prerequisites": [
              "pol-m-g9-lo-u2"
            ],
            "courses": [
              "pol-m-g9-lo-u3"
            ]
          },
          {
            "id": "pol-m-g9-up-u3",
            "name": "文明与家园",
            "points": [
              "【课标】传承中华优秀传统文化，建设美丽中国，坚定文化自信。",
              "【教材·上·文明与家园】守望精神家园；建设美丽中国"
            ],
            "domain": "我与国家和社会",
            "semester": "上",
            "prerequisites": [
              "pol-m-g9-up-u2"
            ],
            "courses": [
              "pol-m-g9-up-u3"
            ]
          },
          {
            "id": "pol-m-g9-up-u4",
            "name": "和谐与梦想",
            "points": [
              "【课标】了解世界发展趋势，树立人类命运共同体意识，做有国际视野的中国人。",
              "【教材·上·和谐与梦想】中华一家亲；中国人 中国梦"
            ],
            "domain": "我与国家和社会",
            "semester": "上",
            "prerequisites": [
              "pol-m-g9-up-u3"
            ],
            "courses": [
              "pol-m-g9-up-u4"
            ]
          },
          {
            "id": "pol-m-g9-lo-u1",
            "name": "我们共同的世界",
            "points": [
              "【课标】了解中国特色社会主义伟大事业的辉煌成就，增强民族自尊心、自信心和自豪感。",
              "【教材·下·我们共同的世界】同住地球村；构建人类命运共同体"
            ],
            "domain": "国情与世界视野",
            "semester": "下",
            "prerequisites": [
              "pol-m-g9-up-u4"
            ],
            "courses": [
              "pol-m-g9-lo-u1"
            ]
          },
          {
            "id": "pol-m-g9-lo-u2",
            "name": "世界舞台上的中国",
            "points": [
              "【课标】理解民主与法治，参与民主生活，树立宪法法律至上观念。",
              "【教材·下·世界舞台上的中国】与世界紧相连；与世界共发展"
            ],
            "domain": "国情与世界视野",
            "semester": "下",
            "prerequisites": [
              "pol-m-g9-lo-u1"
            ],
            "courses": [
              "pol-m-g9-lo-u2"
            ]
          },
          {
            "id": "pol-m-g9-up-u1",
            "name": "富强与创新",
            "points": [
              "【课标】了解中国特色社会主义伟大事业的辉煌成就，增强民族自尊心、自信心和自豪感。",
              "【教材·上·富强与创新】踏上强国之路；创新驱动发展"
            ],
            "domain": "国情与世界视野",
            "semester": "上",
            "prerequisites": [
              "pol-m-g8-lo-u4"
            ],
            "courses": [
              "pol-m-g9-up-u1"
            ]
          },
          {
            "id": "pol-m-g9-up-u2",
            "name": "民主与法治",
            "points": [
              "【课标】理解民主与法治，参与民主生活，树立宪法法律至上观念。",
              "【教材·上·民主与法治】追求民主价值；建设法治中国"
            ],
            "domain": "国情与世界视野",
            "semester": "上",
            "prerequisites": [
              "pol-m-g9-up-u1"
            ],
            "courses": [
              "pol-m-g9-up-u2"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "初中信息科技",
        "nodes": [
          {
            "id": "it-m-data-analysis",
            "name": "数据分析与可视化",
            "points": [
              "对数据进行清洗、统计与可视化，支撑决策。"
            ],
            "domain": "数据与算法",
            "prerequisites": [
              "it-m-data-structures-basic"
            ]
          },
          {
            "id": "it-m-ai-applications",
            "name": "人工智能典型应用",
            "points": [
              "了解机器学习、计算机视觉等典型应用场景。"
            ],
            "domain": "人工智能与智慧社会"
          },
          {
            "id": "it-m-ai-modeling",
            "name": "简单 AI 模型体验",
            "points": [
              "体验训练或调用简单 AI 模型，理解数据与模型的关系。"
            ],
            "domain": "人工智能与智慧社会",
            "prerequisites": [
              "it-m-ai-applications"
            ]
          },
          {
            "id": "it-m-digital-citizenship",
            "name": "信息社会责任与数字公民",
            "points": [
              "遵守法律法规与伦理规范，理性参与数字社会。"
            ],
            "domain": "人工智能与智慧社会"
          },
          {
            "id": "it-m-privacy-protection",
            "name": "隐私保护与数据安全",
            "points": [
              "理解个人信息保护原则，安全处理敏感数据。"
            ],
            "domain": "信息安全",
            "prerequisites": [
              "it-m-cybersecurity"
            ]
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "初中心理健康教育",
        "nodes": [
          {
            "id": "psych-m-g9-social-adapt",
            "name": "社会适应与责任意识",
            "points": [
              "逐步适应生活和社会各种变化，培养担当意识和社会责任感。",
              "积极促进亲社会行为，认识自己与社会、国家和世界的关系。"
            ],
            "domain": "生活适应",
            "prerequisites": [
              "psych-m-g9-career-explore"
            ],
            "courses": [
              "psych-m-g9-social-adapt"
            ]
          },
          {
            "id": "psych-m-g9-career-explore",
            "name": "升学择业与生涯探索",
            "points": [
              "把握升学选择的方向，培养职业规划意识，树立早期职业发展目标。",
              "在充分了解兴趣、能力、性格、特长和社会需要的基础上进行升学准备。"
            ],
            "domain": "生涯规划",
            "prerequisites": [
              "psych-m-g8-stress-coping"
            ],
            "courses": [
              "psych-m-g9-career-explore"
            ]
          },
          {
            "id": "psych-m-g9-mental-health",
            "name": "心理健康素养与求助",
            "points": [
              "了解心理健康基本知识，树立求助意识，掌握基本心理调适方法。",
              "为高中阶段学习生活做好心理适应准备。"
            ],
            "domain": "抗挫与适应",
            "prerequisites": [
              "psych-m-g9-social-adapt"
            ],
            "courses": [
              "psych-m-g9-mental-health"
            ]
          }
        ]
      }
    ],
    "10": [
      {
        "subject": "chinese",
        "name": "高中语文",
        "nodes": [
          {
            "id": "chn-h-idiom-usage-h",
            "name": "成语辨析与运用",
            "points": [
              "语言积累、梳理与探究任务群旨在培养学生丰富语言积累、梳理语言现象的习惯，在观察、探索语言文字现象的过程中发现语言文字运用规律。",
              "通过梳理和整合，将积累的语言材料和学习的语文知识结构化，将言语活动经验逐渐转化为具体的学习方法和策略，并能在语言实践中自觉地运用。",
              "能够辨识、分析、比较、归纳和概括基本的语言现象，并能有理有据地表达自己的观点和阐述自己的发现；运用基本的语言规律和逻辑规则，判别语言运用的正误。"
            ],
            "domain": "语言文字运用",
            "courses": [
              "chn-h-idiom-usage-h"
            ]
          },
          {
            "id": "chn-h-sentence-revision-h",
            "name": "病句修改与句式变换",
            "points": [
              "运用基本的语言规律和逻辑规则，判别语言运用的正误，准确、生动、有逻辑地表达自己的认识。",
              "语言积累、梳理与探究任务群旨在通过观察、探索语言文字现象，发现语言文字运用规律，并能在实践中运用。"
            ],
            "domain": "语言文字运用",
            "prerequisites": [
              "chn-h-idiom-usage-h"
            ],
            "courses": [
              "chn-h-sentence-revision-h"
            ]
          },
          {
            "id": "chn-h-info-reading",
            "name": "实用类文本（论述类/信息类）",
            "points": [
              "学习任务群的设计着眼于培养语言文字运用基础能力，充分顾及问题导向、跨文化、自主合作、个性化、创造性等因素，并关注语言文字运用的新现象和跨媒介运用的新特点。",
              "学习任务群以自主、合作、探究性学习为主要学习方式，凸显学生学习语文的根本途径。这些学习任务群追求语言、知识、技能和思想情感、文化修养等多方面、多层次目标发展的综合效应。"
            ],
            "domain": "现代文阅读",
            "courses": [
              "chn-h-info-reading"
            ]
          },
          {
            "id": "chn-h-literary-reading-h",
            "name": "文学类文本阅读",
            "points": [
              "文学阅读与写作（2.5学分）",
              "感受和体验文学作品的语言、形象和情感之美，能欣赏、鉴别和评价不同时代、不同风格的作品，具有正确的价值观、高尚的审美情趣和审美品位。",
              "从最使自己感动的故事、人物、场景、语言等方面入手，反复阅读品味，深入探究，欣赏语言表达的精彩之处，梳理小说的感人场景乃至整体的艺术架构，理清人物关系，感受、欣赏人物形象，探究人物的精神世界，体会小说的…"
            ],
            "domain": "现代文阅读",
            "prerequisites": [
              "chn-h-info-reading"
            ],
            "courses": [
              "chn-h-literary-reading-h"
            ]
          },
          {
            "id": "chn-h-practical-reading",
            "name": "非连续性实用文本",
            "points": [
              "必修课程7个：...'实用性阅读与交流'。",
              "学习任务群的设计着眼于培养语言文字运用基础能力，...覆盖历来语文课程所包含的古今'实用类'...等基本语篇类型。",
              "实用性阅读与交流（1学分）"
            ],
            "domain": "现代文阅读",
            "prerequisites": [
              "chn-h-info-reading"
            ],
            "courses": [
              "chn-h-practical-reading"
            ]
          },
          {
            "id": "chn-h-classical-vocab-h",
            "name": "文言实词",
            "points": [
              "语言积累与建构。积累较为丰富的语言材料和言语活动经验，形成良好的语感；在已经积累的语言材料间建立起有机的联系，在探究中理解、掌握祖国语言文字运用的基本规律。",
              "语言梳理与整合。通过梳理和整合，将积累的语言材料和学习的语文知识结构化，将言语活动经验逐渐转化为具体的学习方法和策略，并能在语言实践中自觉地运用。",
              "必修课程7个：“整本书阅读与研讨”“当代文化参与”“跨媒介阅读与交流”“语言积累、梳理与探究”“文学阅读与写作”“思辨性阅读与表达”“实用性阅读与交流”。"
            ],
            "domain": "古诗文阅读",
            "courses": [
              "chn-h-classical-vocab-h"
            ]
          },
          {
            "id": "chn-h-classical-function-words",
            "name": "文言虚词",
            "points": [
              "语言积累、梳理与探究任务群要求：积累文言文阅读经验，梳理文言词语，掌握其意义和用法。",
              "语言积累与建构目标：积累较为丰富的语言材料和言语活动经验，形成良好的语感；在探究中理解、掌握祖国语言文字运用的基本规律。",
              "语言梳理与整合目标：通过梳理和整合，将积累的语言材料学习的语文知识结构化，将言语活动经验逐渐转化为具体的学习方法和策略。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-h-classical-vocab-h"
            ],
            "courses": [
              "chn-h-classical-function-words"
            ]
          },
          {
            "id": "chn-h-classical-grammar-h",
            "name": "文言句式与语法",
            "points": [
              "语言积累、梳理与探究任务群要求：在自主修改病句和分析句子结构的过程中，体会汉语句子的结构特点和虚词用法，进一步领悟语法规律。",
              "语言积累、梳理与探究任务群要求：在运用口语和书面语表达的过程中，对比两种语体用词和造句的差别，体会口语与书面语的风格差异。",
              "语言积累、梳理与探究任务群要求：反思和总结自己写作时遣词造句的经验，建构初步的逻辑和修辞知识，提高语用能力，增强表达的个性化。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-h-classical-function-words"
            ],
            "courses": [
              "chn-h-classical-grammar-h"
            ]
          },
          {
            "id": "chn-h-poetry-imagery-h",
            "name": "古诗词意象与意境",
            "points": [
              "鉴赏文学作品。感受和体验文学作品的语言、形象和情感之美，能欣赏、鉴别和评价不同时代、不同风格的作品。",
              "审美鉴赏与创造是指学生在语文学习中，通过审美体验、评价等活动形成正确的审美意识、健康向上的审美情趣与鉴赏品位。",
              "增进对祖国语言文字的美感体验。感受祖国语言文字独特的美，增强热爱祖国语言文字的感情。"
            ],
            "domain": "古诗文阅读",
            "semester": "上",
            "prerequisites": [
              "chn-h-classical-vocab-h"
            ],
            "courses": [
              "chn-h-poetry-imagery-h"
            ]
          },
          {
            "id": "chn-h-poetry-expression-h",
            "name": "古诗词表现手法",
            "points": [
              "鉴赏文学作品。感受和体验文学作品的语言、形象和情感之美，能欣赏、鉴别和评价不同时代、不同风格的作品。",
              "美的表达与创造。能运用祖国语言文字表达自己的审美体验，表达自己的情感、态度和观念，表现和创造自己心中的美好形象。",
              "学习任务群的设计着眼于培养语言文字运用基础能力，充分顾及问题导向、跨文化、自主合作、个性化、创造性等因素。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-h-poetry-imagery-h"
            ],
            "courses": [
              "chn-h-poetry-expression-h"
            ]
          },
          {
            "id": "chn-h-essay-structure-h",
            "name": "作文审题立意与结构",
            "points": [
              "能凭借语感和对语言运用规律的把握，根据具体的语言情境和不同的对象，运用口头和书面语言文明得体地进行表达与交流。",
              "讲究语言文字表达的效果及美感，具有创新意识。",
              "学习任务群的设计着眼于培养语言文字运用基础能力，充分顾及问题导向、跨文化、自主合作、个性化、创造性等因素。"
            ],
            "domain": "写作",
            "courses": [
              "chn-h-essay-structure-h"
            ]
          },
          {
            "id": "chn-h-argumentative-essay",
            "name": "议论文写作",
            "points": [
              "思辨性阅读与表达（1.5学分）",
              "发展逻辑思维。能够辨识、分析、比较、归纳和概括基本的语言现象和文学现象，并能有理有据地表达自己的观点和阐述自己的发现；运用基本的语言规律和逻辑规则，判别语言运用的正误，准确、生动、有逻辑地表达自己的认…",
              "学习任务群的设计着眼于培养语言文字运用基础能力，充分顾及问题导向、跨文化、自主合作、个性化、创造性等因素，并关注语言文字运用的新现象和跨媒介运用的新特点。"
            ],
            "domain": "写作",
            "semester": "下",
            "prerequisites": [
              "chn-h-essay-structure-h",
              "chn-h-info-reading"
            ],
            "courses": [
              "chn-h-argumentative-essay"
            ]
          },
          {
            "id": "chn-h-countryside-china",
            "name": "《乡土中国》（学术论著阅读）",
            "points": [
              "在指定范围内选择阅读一部学术著作。通读全书，勾画圈点，争取读懂；梳理全书大纲小目及其关联，做出全书内容提要；把握书中的重要观点和作品的价值取向。",
              "通过反复阅读和思考，探究本书的语言特点和论述逻辑。",
              "本任务群在必修阶段安排1学分，18课时。应完成一部长篇小说和一部学术著作的阅读，重在引导学生建构整本书的阅读经验与方法。"
            ],
            "domain": "整本书阅读",
            "prerequisites": [
              "chn-h-info-reading"
            ],
            "courses": [
              "chn-h-countryside-china"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "高中数学",
        "nodes": [
          {
            "id": "math-h-sets",
            "name": "集合",
            "points": [
              "内容包括：集合的概念与表示、集合的基本关系、集合的基本运算。",
              "（1）集合的概念与表示 ①通过实例，了解集合的含义，理解元素与集合的属于关系。",
              "（3）集合的基本运算 ①理解两个集合的并集与交集的含义，能求两个集合的并集与交集。"
            ],
            "domain": "预备知识（集合·逻辑·不等式）",
            "courses": [
              "math-high-sets"
            ]
          },
          {
            "id": "math-h-sets-logic",
            "name": "集合运算",
            "points": [
              "内容包括：集合、常用逻辑用语、相等关系与不等关系、从函数观点看一元二次方程和一元二次不等式。",
              "集合的概念与表示：通过实例，了解集合的含义，理解元素与集合的属于关系。针对具体问题，能在自然语言和图形语言的基础上，用符号语言刻画集合。",
              "常用逻辑用语内容包括：必要条件、充分条件、充要条件，全称量词与存在量词，全称量词命题与存在量词命题的否定。"
            ],
            "domain": "预备知识（集合·逻辑·不等式）",
            "prerequisites": [
              "math-h-sets"
            ],
            "courses": [
              "math-h-sets-logic"
            ]
          },
          {
            "id": "math-h-propositions",
            "name": "常用逻辑用语",
            "points": [
              "通过对典型数学命题的梳理，理解充要条件的意义，理解数学定义与充要条件的关系。",
              "常用逻辑用语是数学语言的重要组成部分，是数学表达和交流的工具，是逻辑思维的基本语言。",
              "本单元的学习，可以帮助学生使用常用逻辑用语表达数学对象、进行数学推理，体会常用逻辑用语在表述数学内容和论证数学结论中的作用。"
            ],
            "domain": "预备知识（集合·逻辑·不等式）",
            "prerequisites": [
              "math-h-sets"
            ],
            "courses": [
              "math-high-propositions"
            ]
          },
          {
            "id": "math-h-inequalities",
            "name": "不等式性质",
            "points": [
              "梳理等式的性质，理解不等式的概念，掌握不等式的性质。",
              "掌握基本不等式√(ab)≤(a+b)/2（a,b≥0）。结合具体实例，能用基本不等式解决简单的最大值或最小值问题。",
              "经历从实际情境中抽象出一元二次不等式的过程，了解一元二次不等式的现实意义。能借助一元二次函数求解一元二次不等式，并能用集合表示一元二次不等式的解集。"
            ],
            "domain": "预备知识（集合·逻辑·不等式）",
            "prerequisites": [
              "math-h-sets"
            ],
            "courses": [
              "math-high-inequalities"
            ]
          },
          {
            "id": "math-h-basic-inequality",
            "name": "基本不等式",
            "points": [
              "掌握基本不等式√(ab)≤(a+b)/2（a,b≥0）。结合具体实例，能用基本不等式解决简单的最大值或最小值问题。",
              "内容包括：等式与不等式的性质、基本不等式。"
            ],
            "domain": "预备知识（集合·逻辑·不等式）",
            "prerequisites": [
              "math-h-inequalities"
            ],
            "courses": [
              "math-high-basic-inequality"
            ]
          },
          {
            "id": "math-h-linear-programming",
            "name": "线性规划",
            "points": [
              "线性规划：2017年版高中数学课程标准已将线性规划内容移出必修和选择性必修范围，不再作为高考内容。相关内容可参考不等式与优化问题，如用不等式组刻画约束条件、求目标函数最值等。"
            ],
            "domain": "预备知识（集合·逻辑·不等式）",
            "prerequisites": [
              "math-h-inequalities"
            ],
            "courses": [
              "math-high-linear-programming"
            ]
          },
          {
            "id": "math-h-functions-concept",
            "name": "函数概念",
            "points": [
              "内容包括：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。",
              "函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。"
            ],
            "domain": "函数",
            "prerequisites": [
              "math-h-sets"
            ],
            "courses": [
              "math-high-functions-concept"
            ]
          },
          {
            "id": "math-h-function-properties",
            "name": "函数性质（单调性/奇偶性）",
            "points": [
              "内容包括：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。",
              "主题二 函数：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。"
            ],
            "domain": "函数",
            "prerequisites": [
              "math-h-functions-concept"
            ],
            "courses": [
              "math-high-function-properties"
            ]
          },
          {
            "id": "math-h-power-function",
            "name": "幂函数",
            "points": [
              "内容包括：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。",
              "主题二函数：幂函数、指数函数、对数函数。"
            ],
            "domain": "函数",
            "prerequisites": [
              "math-h-function-properties"
            ],
            "courses": [
              "math-high-power-function"
            ]
          },
          {
            "id": "math-h-exponential-function",
            "name": "指数函数",
            "points": [
              "内容包括：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。",
              "主题二函数包括幂函数、指数函数、对数函数等内容的学习。"
            ],
            "domain": "函数",
            "prerequisites": [
              "math-h-function-properties"
            ],
            "courses": [
              "math-high-exponential-function"
            ]
          },
          {
            "id": "math-h-logarithmic-function",
            "name": "对数函数",
            "points": [
              "内容包括：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。",
              "幂函数、指数函数、对数函数是三类重要的基本初等函数，是进一步学习数学的基础。",
              "理解对数函数的概念，了解对数函数的单调性，掌握对数函数图象通过的特殊点。"
            ],
            "domain": "函数",
            "prerequisites": [
              "math-h-exponential-function"
            ],
            "courses": [
              "math-high-logarithmic-function"
            ]
          },
          {
            "id": "math-h-functions-advanced",
            "name": "函数综合性质",
            "points": [
              "内容包括：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。",
              "高中数学课程内容突出函数、几何与代数、概率与统计、数学建模活动与数学探究活动四条主线。",
              "用函数理解方程和不等式是数学的基本思想方法。本单元的学习，可以帮助学生用一元二次函数认识一元二次方程和一元二次不等式。"
            ],
            "domain": "函数",
            "prerequisites": [
              "math-h-logarithmic-function",
              "math-h-power-function"
            ],
            "courses": [
              "math-h-functions-advanced"
            ]
          },
          {
            "id": "math-h-function-models",
            "name": "函数模型及其应用",
            "points": [
              "数学建模是对现实问题进行数学抽象，用数学语言表达问题、用数学方法构建模型解决问题的素养。",
              "数学建模过程主要包括：在实际情境中从数学的视角发现问题、提出问题，分析问题、建立模型，确定参数、计算求解，检验结果、改进模型，最终解决实际问题。",
              "通过高中数学课程的学习，学生能获得进一步学习以及未来发展所必需的数学基础知识、基本技能、基本思想、基本活动经验；提高从数学角度发现和提出问题的能力、分析和解决问题的能力。"
            ],
            "domain": "函数",
            "prerequisites": [
              "math-h-functions-advanced"
            ],
            "courses": [
              "math-high-function-models"
            ]
          },
          {
            "id": "math-h-trig-ratios",
            "name": "任意角与三角函数定义",
            "points": [
              "内容包括：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。",
              "三角函数是基本初等函数，它是描述周期现象的重要数学模型，在数学和其他领域中具有重要作用。",
              "借助单位圆理解任意角三角函数（正弦、余弦、正切）的定义。"
            ],
            "domain": "三角函数",
            "prerequisites": [
              "math-h-function-properties"
            ],
            "courses": [
              "math-high-trig-ratios"
            ]
          },
          {
            "id": "math-h-trig-identities",
            "name": "三角恒等变换",
            "points": [
              "（４）三角恒等变换 ①经历推导两角差余弦公式的过程，知道两角差余弦公式的 意义。 ②能从两角差的余弦公式推导出两角和与差的正弦、余弦、正 切公式，二倍角的正弦、余弦、正切公式，了解它们的内在联系。 ③…"
            ],
            "domain": "三角函数",
            "prerequisites": [
              "math-h-trig-ratios"
            ],
            "courses": [
              "math-high-trig-identities"
            ]
          },
          {
            "id": "math-h-trig-graphs",
            "name": "三角函数图像与性质",
            "points": [
              "内容包括：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。",
              "三角函数是描述周期现象的重要数学模型，在数学和其他领域中都有重要应用。",
              "借助单位圆理解三角函数（正弦、余弦、正切）的定义，能画出这些三角函数的图象。"
            ],
            "domain": "三角函数",
            "prerequisites": [
              "math-h-trig-identities"
            ],
            "courses": [
              "math-high-trig-graphs"
            ]
          },
          {
            "id": "math-h-trigonometric-functions",
            "name": "三角函数综合应用",
            "points": [
              "内容包括：函数概念与性质、幂函数、指数函数、对数函数、三角函数、函数应用。",
              "三角函数是必修课程主题二“函数”中的一个单元。"
            ],
            "domain": "三角函数",
            "prerequisites": [
              "math-h-trig-graphs"
            ],
            "courses": [
              "math-h-trigonometric-functions"
            ]
          },
          {
            "id": "math-h-law-of-sines-cosines",
            "name": "正弦定理与余弦定理",
            "points": [
              "内容包括：平面向量及其应用、复数、立体几何初步。",
              "平面向量及其应用：借助向量和向量运算，探索三角形边长与角度的关系，掌握正弦定理、余弦定理。"
            ],
            "domain": "三角函数",
            "prerequisites": [
              "math-h-trig-graphs"
            ],
            "courses": [
              "math-high-law-of-sines-cosines"
            ]
          },
          {
            "id": "math-h-vector-basics",
            "name": "平面向量的概念与运算",
            "points": [
              "内容包括：平面向量及其应用"
            ],
            "domain": "向量",
            "courses": [
              "math-high-vector-basics"
            ]
          },
          {
            "id": "math-h-vector-coordinates",
            "name": "平面向量的坐标运算",
            "points": [
              "内容包括：平面向量及其应用、复数、立体几何初步。",
              "平面向量及其应用：借助实例和平面向量的几何表示，掌握平面向量加、减、数乘运算及运算规则，理解其几何意义。",
              "理解平面向量数量积的概念、物理背景及其几何意义，会计算平面向量的数量积。"
            ],
            "domain": "向量",
            "prerequisites": [
              "math-h-vector-basics"
            ],
            "courses": [
              "math-high-vector-coordinates"
            ]
          },
          {
            "id": "math-h-arithmetic-sequence",
            "name": "等差数列",
            "points": [
              "内容包括：等差数列的概念、等差数列的前n项和公式。",
              "掌握等差数列的通项公式与前n项和公式，能在具体的问题情境中识别等差数列。",
              "引导学生通过具体实例理解等差数列的概念，探索并掌握等差数列的通项公式与前n项和公式。"
            ],
            "domain": "数列",
            "prerequisites": [
              "math-h-functions-concept"
            ],
            "courses": [
              "math-high-arithmetic-sequence"
            ]
          },
          {
            "id": "math-h-geometric-sequence",
            "name": "等比数列",
            "points": [
              "（３）等比数列 ①通过生活中的实例，理解等比数列的概念和通项公式的意义。 ②探索并掌握等比数列的前狀项和公式，理解等比数列的通项 公式与前狀项和公式的关系。 ③能在具体的问题情境中，发现数列的等比关系…"
            ],
            "domain": "数列",
            "prerequisites": [
              "math-h-arithmetic-sequence"
            ],
            "courses": [
              "math-high-geometric-sequence"
            ]
          },
          {
            "id": "math-h-sequence-summation",
            "name": "数列求和",
            "points": [
              "１．数列 本单元的学习，可以帮助学生通过对日常生活中实际问题的分 析，了解数列的概念；探索并掌握等差数列和等比数列的变化规律， 建立通项公式和前狀项和公式；能运用等差数列、等比数列解决简 单的实际问题…"
            ],
            "domain": "数列",
            "prerequisites": [
              "math-h-geometric-sequence"
            ],
            "courses": [
              "math-high-sequence-summation"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "高中英语",
        "nodes": [
          {
            "id": "eng-h-word-formation-h",
            "name": "构词法（派生/合成/转化）",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "词汇知识包括词汇、词块、构词法等，学生应掌握构词法知识，如常用前缀、后缀、词根等，以扩大词汇量。"
            ],
            "domain": "词汇",
            "courses": [
              "eng-h-word-formation-h"
            ]
          },
          {
            "id": "eng-h-tense-system",
            "name": "时态与语态系统",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "语法知识是‘形式—意义—使用’的统一体，与语音、词汇、语篇和语用知识紧密相连，直接影响语言理解和表达的准确性和得体性。",
              "在语篇中理解和运用过去、现在和将来时的被动语态。"
            ],
            "domain": "语法",
            "courses": [
              "eng-h-tense-system"
            ]
          },
          {
            "id": "eng-h-noun-clauses",
            "name": "名词性从句",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "所有的语言学习活动都应该在一定的主题语境下进行，即学生围绕某一具体的主题语境，基于不同类型的语篇，在解决问题的过程中，运用语言技能获取、梳理、整合语言知识和文化知识，深化对语言的理解。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-h-tense-system"
            ],
            "courses": [
              "eng-h-noun-clauses"
            ]
          },
          {
            "id": "eng-h-attributive-clauses-h",
            "name": "定语从句",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "语法知识是‘形式—意义—使用’的统一体，与语音、词汇、语篇和语用知识紧密相连，直接影响语言理解和表达的准确性和得体性。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-h-tense-system"
            ],
            "courses": [
              "eng-h-attributive-clauses-h"
            ]
          },
          {
            "id": "eng-h-adverbial-clauses-h",
            "name": "状语从句",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "所有的语言学习活动都应该在一定的主题语境下进行，即学生围绕某一具体的主题语境，基于不同类型的语篇，在解决问题的过程中，运用语言技能获取、梳理、整合语言知识和文化知识。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-h-tense-system"
            ],
            "courses": [
              "eng-h-adverbial-clauses-h"
            ]
          },
          {
            "id": "eng-h-advanced-grammar",
            "name": "语法综合进阶",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "课程内容的六个要素是一个相互关联的有机整体，所有的语言学习活动都应该在一定的主题语境下进行。",
              "学生基于语篇，在分析问题和解决问题的过程中，促进自身语言知识学习、语言技能发展。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-h-adverbial-clauses-h"
            ],
            "courses": [
              "eng-h-advanced-grammar"
            ]
          },
          {
            "id": "eng-h-reading-detail-h",
            "name": "阅读细节题",
            "points": [
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看（viewing）、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。",
              "所有的语言学习活动都应该在一定的主题语境下进行，即学生围绕某一具体的主题语境，基于不同类型的语篇，在解决问题的过程中，运用语言技能获取、梳理、整合语言知识和文化知识，深化对语言的理解，重视对语篇的赏析…",
              "语言能力指在社会情境中，以听、说、读、看、写等方式理解和表达意义的能力，以及在学习和使用语言的过程中形成的语言意识和语感。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "eng-h-vocab-3500"
            ],
            "courses": [
              "eng-h-reading-detail-h"
            ]
          },
          {
            "id": "eng-h-reading-inference-h",
            "name": "阅读推理题",
            "points": [
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看（viewing）、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。",
              "思维品质指思维在逻辑性、批判性、创新性等方面所表现的能力和水平。思维品质的发展有助于提升学生分析和解决问题的能力，使他们能够从跨文化视角观察和认识世界，对事物作出正确的价值判断。",
              "思维品质目标：能辨析语言和文化中的具体现象，梳理、概括信息，建构新概念，分析、推断信息的逻辑关系，正确评判各种思想观点，创造性地表达自己的观点。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "eng-h-reading-detail-h"
            ],
            "courses": [
              "eng-h-reading-inference-h"
            ]
          },
          {
            "id": "eng-h-cloze-narrative",
            "name": "完形填空（记叙型）",
            "points": [
              "语篇类型包括口头和书面语篇以及不同的文体形式，如记叙文、说明文、议论文、应用文、访谈、对话等连续性文本。",
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。",
              "所有的语言学习活动都应该在一定的主题语境下进行，即学生围绕某一具体的主题语境，基于不同类型的语篇，在解决问题的过程中，运用语言技能获取、梳理、整合语言知识和文化知识。"
            ],
            "domain": "完形填空",
            "prerequisites": [
              "eng-h-vocab-3500"
            ],
            "courses": [
              "eng-h-cloze-narrative"
            ]
          },
          {
            "id": "eng-h-application-letter",
            "name": "应用文写作（书信/邮件）",
            "points": [
              "语篇类型包括口头和书面语篇以及不同的文体形式，如记叙文、说明文、议论文、应用文、访谈、对话等连续性文本。",
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。"
            ],
            "domain": "写作",
            "prerequisites": [
              "eng-h-tense-system"
            ],
            "courses": [
              "eng-h-application-letter"
            ]
          },
          {
            "id": "eng-h-essay-writing",
            "name": "议论文/记叙文写作",
            "points": [
              "语言能力指在社会情境中，以听、说、读、看、写等方式理解和表达意义的能力。",
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看（viewing）、写等。",
              "使学生基于已有的知识，依托不同类型的语篇，在分析问题和解决问题的过程中，促进自身语言知识学习、语言技能发展。"
            ],
            "domain": "写作",
            "prerequisites": [
              "eng-h-application-letter",
              "eng-h-advanced-grammar"
            ],
            "courses": [
              "eng-h-essay-writing"
            ]
          },
          {
            "id": "eng-h-listening-short-h",
            "name": "短对话听力",
            "points": [
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看（viewing）、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。",
              "语言能力指在社会情境中，以听、说、读、看、写等方式理解和表达意义的能力，以及在学习和使用语言的过程中形成的语言意识和语感。",
              "语篇类型包括口头和书面语篇以及不同的文体形式，如记叙文、说明文、议论文、应用文、访谈、对话等连续性文本。"
            ],
            "domain": "听力",
            "courses": [
              "eng-h-listening-short-h"
            ]
          }
        ]
      },
      {
        "subject": "physics",
        "name": "高中物理",
        "nodes": [
          {
            "id": "phy-h-motion-description",
            "name": "运动的描述",
            "points": [
              "理解位移、速度和加速度。通过实验，探究匀变速直线运动的特点，能用公式、图像等方法描述匀变速直线运动。",
              "能用位移、速度、加速度等物理量描述物体的直线运动，能用匀变速直线运动的规律解释或解决生活中的具体问题。",
              "通过瞬时速度和加速度概念的建构，体会物理问题研究中的极限方法和抽象思维方法。"
            ],
            "domain": "运动学",
            "semester": "上",
            "courses": [
              "phy-h-motion-description"
            ]
          },
          {
            "id": "phy-h-kinematics-linear",
            "name": "直线运动综合",
            "points": [
              "理解位移、速度和加速度。通过实验，探究匀变速直线运动的特点，能用公式、图像等方法描述匀变速直线运动。",
              "能用位移、速度、加速度等物理量描述物体的直线运动，能用匀变速直线运动的规律解释或解决生活中的具体问题。",
              "通过瞬时速度和加速度概念的建构，体会物理问题研究中的极限方法和抽象思维方法。"
            ],
            "domain": "运动学",
            "prerequisites": [
              "phy-h-motion-description"
            ],
            "courses": [
              "phy-h-kinematics-linear"
            ]
          },
          {
            "id": "phy-h-uniform-acceleration",
            "name": "匀变速直线运动",
            "points": [
              "通过实验，探究匀变速直线运动的特点，能用公式、图像等方法描述匀变速直线运动，理解匀变速直线运动的规律，能运用其解决实际问题。",
              "能用位移、速度、加速度等物理量描述物体的直线运动，能用匀变速直线运动的规律解释或解决生活中的具体问题。",
              "用打点计时器、频闪照相或其他实验工具研究匀变速直线运动的规律。"
            ],
            "domain": "运动学",
            "prerequisites": [
              "phy-h-motion-description"
            ],
            "courses": [
              "phy-h-uniform-acceleration"
            ]
          },
          {
            "id": "phy-h-free-fall",
            "name": "自由落体运动",
            "points": [
              "通过实验，认识自由落体运动规律。结合物理学史的相关内容，认识物理实验与科学推理在物理学研究中的作用。",
              "查阅资料，了解伽利略研究自由落体运动的实验和推理方法。",
              "观察质量相同、大小和形状不同的物体在空气中下落的现象，了解空气阻力对落体运动的影响。"
            ],
            "domain": "运动学",
            "prerequisites": [
              "phy-h-uniform-acceleration"
            ],
            "courses": [
              "phy-h-free-fall"
            ]
          },
          {
            "id": "phy-h-circular-motion",
            "name": "圆周运动",
            "points": [
              "会用线速度、角速度、周期描述匀速圆周运动。知道匀速圆周运动向心加速度的大小和方向。",
              "通过实验，探究并了解匀速圆周运动向心力大小与半径、角速度、质量的关系。",
              "能用牛顿第二定律分析匀速圆周运动的向心力。了解生产生活中的离心现象及其产生的原因。"
            ],
            "domain": "运动学",
            "prerequisites": [
              "phy-h-uniform-acceleration"
            ],
            "courses": [
              "phy-h-circular-motion"
            ]
          },
          {
            "id": "phy-h-common-forces",
            "name": "常见的力",
            "points": [
              "认识重力、弹力与摩擦力。通过实验，了解胡克定律。知道滑动摩擦和静摩擦现象，能用动摩擦因数计算滑动摩擦力的大小。",
              "能对物体的受力和运动情况进行分析，得出结论。能从物理学的运动与相互作用的视角分析自然与生活中的有关简单问题。"
            ],
            "domain": "相互作用与牛顿定律",
            "prerequisites": [
              "phy-h-motion-description"
            ],
            "courses": [
              "phy-h-common-forces"
            ]
          },
          {
            "id": "phy-h-force-decomposition",
            "name": "力的合成与分解",
            "points": [
              "通过实验，了解力的合成与分解，知道矢量和标量。能用共点力的平衡条件分析生产生活中的问题。",
              "能对物体的受力和运动情况进行分析，得出结论。能从物理学的运动与相互作用的视角分析自然与生活中的有关简单问题。"
            ],
            "domain": "相互作用与牛顿定律",
            "semester": "上",
            "prerequisites": [
              "phy-h-common-forces"
            ],
            "courses": [
              "phy-h-force-decomposition"
            ]
          },
          {
            "id": "phy-h-newton-laws",
            "name": "牛顿运动定律",
            "points": [
              "通过实验，探究物体运动的加速度与物体受力、物体质量的关系。理解牛顿运动定律，能用牛顿运动定律解释生产生活中的有关现象、解决有关问题。",
              "能对物体的受力和运动情况进行分析，得出结论。能从物理学的运动与相互作用的视角分析自然与生活中的有关简单问题。",
              "通过探究物体间相互作用与运动状态变化的关系等实验，引导学生运用控制变量等研究方法设计实验方案，学会分析和处理实验数据的方法，提高科学探究能力。"
            ],
            "domain": "相互作用与牛顿定律",
            "semester": "上",
            "prerequisites": [
              "phy-h-force-decomposition",
              "phy-h-uniform-acceleration"
            ],
            "courses": [
              "phy-h-newton-laws"
            ]
          },
          {
            "id": "phy-h-projectile-motion",
            "name": "抛体运动",
            "points": [
              "通过实验，探究并认识平抛运动的规律。会用运动合成与分解的方法分析平抛运动。",
              "体会将复杂运动分解为简单运动的物理思想。能分析生产生活中的抛体运动。"
            ],
            "domain": "相互作用与牛顿定律",
            "prerequisites": [
              "phy-h-newton-laws"
            ],
            "courses": [
              "phy-h-projectile-motion"
            ]
          },
          {
            "id": "phy-h-universal-gravitation",
            "name": "万有引力定律",
            "points": [
              "通过史实，了解万有引力定律的发现过程。知道万有引力定律。认识发现万有引力定律的重要意义。",
              "以万有引力定律为例，了解统一性观念在科学认识中的重要意义。",
              "会计算人造地球卫星的环绕速度。知道第二宇宙速度和第三宇宙速度。"
            ],
            "domain": "相互作用与牛顿定律",
            "prerequisites": [
              "phy-h-newton-laws",
              "phy-h-circular-motion"
            ],
            "courses": [
              "phy-h-universal-gravitation"
            ]
          },
          {
            "id": "phy-h-gravitation",
            "name": "引力综合",
            "points": [
              "通过史实，了解万有引力定律的发现过程。知道万有引力定律。认识发现万有引力定律的重要意义。",
              "会计算人造地球卫星的环绕速度。知道第二宇宙速度和第三宇宙速度。",
              "以万有引力定律为例，了解统一性观念在科学认识中的重要意义。"
            ],
            "domain": "相互作用与牛顿定律",
            "prerequisites": [
              "phy-h-universal-gravitation"
            ],
            "courses": [
              "phy-h-gravitation"
            ]
          },
          {
            "id": "phy-h-satellite-motion",
            "name": "卫星运动与航天",
            "points": [
              "会计算人造地球卫星的环绕速度。知道第二宇宙速度和第三宇宙速度。",
              "通过史实，了解万有引力定律的发现过程。知道万有引力定律。认识发现万有引力定律的重要意义。",
              "能用牛顿第二定律分析匀速圆周运动的向心力。了解生产生活中的离心现象及其产生的原因。"
            ],
            "domain": "相互作用与牛顿定律",
            "prerequisites": [
              "phy-h-universal-gravitation"
            ],
            "courses": [
              "phy-h-satellite-motion"
            ]
          },
          {
            "id": "phy-h-work-concept",
            "name": "功与功率",
            "points": [
              "理解功和功率。了解生产生活中常见机械的功率大小及其意义。",
              "分析物体移动的方向与所受力的方向不在一条直线上时，该力所做的功。",
              "分析汽车发动机的功率一定时，牵引力与速度的关系。"
            ],
            "domain": "功与能",
            "prerequisites": [
              "phy-h-newton-laws"
            ],
            "courses": [
              "phy-h-work-concept"
            ]
          },
          {
            "id": "phy-h-work-energy",
            "name": "功能关系综合",
            "points": [
              "理解功和功率。了解生产生活中常见机械的功率大小及其意义。",
              "理解动能和动能定理。能用动能定理解释生产生活中的现象。",
              "理解重力势能，知道重力势能的变化与重力做功的关系。定性了解弹性势能。"
            ],
            "domain": "功与能",
            "prerequisites": [
              "phy-h-work-concept"
            ],
            "courses": [
              "phy-h-work-energy"
            ]
          },
          {
            "id": "phy-h-kinetic-energy-theorem",
            "name": "动能定理",
            "points": [
              "理解动能和动能定理。能用动能定理解释生产生活中的现象。",
              "根据牛顿第二定律推导出动能定理。"
            ],
            "domain": "功与能",
            "prerequisites": [
              "phy-h-work-concept"
            ],
            "courses": [
              "phy-h-kinetic-energy-theorem"
            ]
          },
          {
            "id": "phy-h-potential-energy",
            "name": "势能（重力/弹性）",
            "points": [
              "理解重力势能，知道重力势能的变化与重力做功的关系。定性了解弹性势能。",
              "通过实验，验证机械能守恒定律。理解机械能守恒定律，体会守恒观念对认识物理规律的重要性。"
            ],
            "domain": "功与能",
            "prerequisites": [
              "phy-h-work-concept"
            ],
            "courses": [
              "phy-h-potential-energy"
            ]
          },
          {
            "id": "phy-h-energy-conservation-mech",
            "name": "机械能守恒定律",
            "points": [
              "通过实验，验证机械能守恒定律。理解机械能守恒定律，体会守恒观念对认识物理规律的重要性。",
              "能用机械能守恒定律分析生产生活中的有关问题。"
            ],
            "domain": "功与能",
            "prerequisites": [
              "phy-h-kinetic-energy-theorem",
              "phy-h-potential-energy"
            ],
            "courses": [
              "phy-h-energy-conservation-mech"
            ]
          }
        ]
      },
      {
        "subject": "chemistry",
        "name": "高中化学",
        "nodes": [
          {
            "id": "chem-h-substance-classification-h",
            "name": "物质的分类",
            "points": [
              "认识元素可以组成不同种类的物质，根据物质的组成和性质可以对物质进行分类。",
              "能从不同层次认识物质的多样性，并对物质进行分类。"
            ],
            "domain": "物质的分类与化学用语",
            "semester": "上",
            "courses": [
              "chem-h-substance-classification-h"
            ]
          },
          {
            "id": "chem-h-dispersion-system",
            "name": "分散系（溶液/胶体）",
            "points": [
              "认识胶体是一种常见的分散系。",
              "实验及探究活动：胶体的丁达尔实验；"
            ],
            "domain": "物质的分类与化学用语",
            "prerequisites": [
              "chem-h-substance-classification-h"
            ],
            "courses": [
              "chem-h-dispersion-system"
            ]
          },
          {
            "id": "chem-h-mole-concept",
            "name": "物质的量（摩尔）",
            "points": [
              "了解物质的量及其相关物理量的含义和应用，体会定量研究对化学科学的重要作用。",
              "能基于物质的量认识物质组成及其化学变化，运用物质的量、摩尔质量、气体摩尔体积、物质的量浓度之间的相互关系进行简单计算。",
              "学生必做实验：配制一定物质的量浓度的溶液。"
            ],
            "domain": "物质的分类与化学用语",
            "courses": [
              "chem-h-mole-concept"
            ]
          },
          {
            "id": "chem-h-gas-molar-volume",
            "name": "气体摩尔体积",
            "points": [
              "了解物质的量及其相关物理量的含义和应用，体会定量研究对化学科学的重要作用。",
              "能基于物质的量认识物质组成及其化学变化，运用物质的量、摩尔质量、气体摩尔体积、物质的量浓度之间的相互关系进行简单计算。"
            ],
            "domain": "物质的分类与化学用语",
            "prerequisites": [
              "chem-h-mole-concept"
            ],
            "courses": [
              "chem-h-gas-molar-volume"
            ]
          },
          {
            "id": "chem-h-solution-concentration-h",
            "name": "物质的量浓度",
            "points": [
              "了解物质的量及其相关物理量的含义和应用，体会定量研究对化学科学的重要作用。",
              "能基于物质的量认识物质组成及其化学变化，运用物质的量、摩尔质量、气体摩尔体积、物质的量浓度之间的相互关系进行简单计算。",
              "实验及探究活动：配制一定物质的量浓度的溶液。"
            ],
            "domain": "物质的分类与化学用语",
            "prerequisites": [
              "chem-h-mole-concept"
            ],
            "courses": [
              "chem-h-solution-concentration-h"
            ]
          },
          {
            "id": "chem-h-electrolyte-concept",
            "name": "电解质与非电解质",
            "points": [
              "认识酸、碱、盐等电解质在水溶液中或熔融状态下能发生电离。",
              "通过实验事实认识离子反应及其发生的条件，了解常见离子的检验方法。",
              "实验及探究活动：电解质的电离；探究溶液中离子反应的实质及发生条件（测定电流或溶液电导率的变化）。"
            ],
            "domain": "离子反应与电解质",
            "prerequisites": [
              "chem-h-substance-classification-h"
            ],
            "courses": [
              "ext-58712846-conductivity-principle"
            ]
          },
          {
            "id": "chem-h-ionic-reactions-electrolyte",
            "name": "电解质与离子反应综合",
            "points": [
              "认识酸、碱、盐等电解质在水溶液中或熔融状态下能发生电离。",
              "通过实验事实认识离子反应及其发生的条件，了解常见离子的检验方法。",
              "实验及探究活动：电解质的电离；探究溶液中离子反应的实质及发生条件（测定电流或溶液电导率的变化）。"
            ],
            "domain": "离子反应与电解质",
            "prerequisites": [
              "chem-h-electrolyte-concept"
            ],
            "courses": [
              "chem-h-ionic-reactions-electrolyte"
            ]
          },
          {
            "id": "chem-h-ionic-equation",
            "name": "离子方程式",
            "points": [
              "认识酸、碱、盐等电解质在水溶液中或熔融状态下能发生电离。",
              "通过实验事实认识离子反应及其发生的条件，了解常见离子的检验方法。"
            ],
            "domain": "离子反应与电解质",
            "prerequisites": [
              "chem-h-electrolyte-concept"
            ],
            "courses": [
              "chem-h-ionic-equation"
            ]
          },
          {
            "id": "chem-h-ion-identification",
            "name": "离子检验与共存",
            "points": [
              "通过实验事实认识离子反应及其发生的条件，了解常见离子的检验方法。",
              "能根据物质的特征反应和干扰因素选取适当的检验试剂。",
              "常见离子的检验方法（如补铁剂中的铁元素）。"
            ],
            "domain": "离子反应与电解质",
            "prerequisites": [
              "chem-h-ionic-equation"
            ],
            "courses": [
              "chem-h-ion-identification"
            ]
          },
          {
            "id": "chem-h-oxidation-reduction",
            "name": "氧化还原反应概念",
            "points": [
              "认识有化合价变化的反应是氧化还原反应，了解氧化还原反应的本质是电子的转移，知道常见的氧化剂和还原剂。",
              "氧化还原反应本质的探究；过氧化氢的氧化性、还原性的探究。"
            ],
            "domain": "氧化还原反应",
            "prerequisites": [
              "chem-h-ionic-equation"
            ],
            "courses": [
              "chem-oxidation-reduction"
            ]
          },
          {
            "id": "chem-h-redox-equation",
            "name": "氧化还原方程式配平",
            "points": [
              "认识有化合价变化的反应是氧化还原反应，了解氧化还原反应的本质是电子的转移，知道常见的氧化剂和还原剂。",
              "氧化还原反应本质的探究；过氧化氢的氧化性、还原性的探究；"
            ],
            "domain": "氧化还原反应",
            "prerequisites": [
              "chem-h-oxidation-reduction"
            ],
            "courses": [
              "chem-h-redox-equation"
            ]
          },
          {
            "id": "chem-h-sodium-compounds",
            "name": "钠及其化合物",
            "points": [
              "结合真实情境中的应用实例或通过实验探究，了解钠、铁及其重要化合物的主要性质，了解这些物质在生产、生活中的应用。",
              "实验及探究活动：金属钠的性质；碳酸钠与碳酸氢钠性质的比较；"
            ],
            "domain": "元素化合物",
            "prerequisites": [
              "chem-h-ionic-equation",
              "chem-h-oxidation-reduction"
            ],
            "courses": [
              "chem-h-sodium-compounds"
            ]
          },
          {
            "id": "chem-h-aluminum-compounds",
            "name": "铝及其化合物",
            "points": [
              "结合真实情境中的应用实例或通过实验探究，了解钠、铁及其重要化合物的主要性质，了解这些物质在生产、生活中的应用。",
              "铁及其化合物的性质实验；氢氧化亚铁的制备；"
            ],
            "domain": "元素化合物",
            "prerequisites": [
              "chem-h-sodium-compounds"
            ],
            "courses": [
              "chem-h-aluminum-compounds"
            ]
          },
          {
            "id": "chem-h-iron-compounds",
            "name": "铁及其化合物",
            "points": [
              "结合真实情境中的应用实例或通过实验探究，了解钠、铁及其重要化合物的主要性质，了解这些物质在生产、生活中的应用。",
              "铁及其化合物的性质实验；氢氧化亚铁的制备；"
            ],
            "domain": "元素化合物",
            "prerequisites": [
              "chem-h-aluminum-compounds",
              "chem-h-redox-equation"
            ],
            "courses": [
              "chem-h-iron-compounds"
            ]
          },
          {
            "id": "chem-h-silicon-compounds",
            "name": "硅及其化合物",
            "points": [
              "结合真实情境中的应用实例或通过实验探究，了解氯、氮、硫及其重要化合物的主要性质，认识这些物质在生产中的应用和对生态环境的影响。",
              "认识元素可以组成不同种类的物质，根据物质的组成和性质可以对物质进行分类；同类物质具有相似的性质，一定条件下各类物质可以相互转化。",
              "紧密联系生产和生活实际，创设丰富多样的真实问题情境。"
            ],
            "domain": "元素化合物",
            "prerequisites": [
              "chem-h-ionic-equation"
            ],
            "courses": [
              "chem-h-silicon-compounds"
            ]
          },
          {
            "id": "chem-h-chlorine-compounds",
            "name": "氯及其化合物",
            "points": [
              "结合真实情境中的应用实例或通过实验探究，了解氯、氮、硫及其重要化合物的主要性质，认识这些物质在生产中的应用和对生态环境的影响。",
              "氯气的制备及性质；氯水的性质及成分探究；"
            ],
            "domain": "元素化合物",
            "prerequisites": [
              "chem-h-redox-equation"
            ],
            "courses": [
              "chem-titration-agno3"
            ]
          },
          {
            "id": "chem-h-sulfur-nitrogen",
            "name": "硫和氮及其化合物",
            "points": [
              "结合真实情境中的应用实例或通过实验探究，了解氯、氮、硫及其重要化合物的主要性质，认识这些物质在生产中的应用和对生态环境的影响。",
              "不同价态含硫物质的转化。",
              "氮氧化物的性质与转化；浓、稀硝酸的性质；氨气的制备及性质；铵盐的性质。"
            ],
            "domain": "元素化合物",
            "prerequisites": [
              "chem-h-chlorine-compounds"
            ],
            "courses": [
              "chem-h-sulfur-nitrogen"
            ]
          },
          {
            "id": "chem-h-atom-structure-h",
            "name": "原子结构",
            "points": [
              "认识化学是在原子、分子水平上研究物质的组成、结构、性质、转化及其应用的一门基础学科，其特征是认识物质和创造物质。",
              "能从元素和原子、分子水平认识物质的组成、结构、性质和变化，形成“结构决定性质”的观念。",
              "有关理论、模型不断发展的史实：苯分子结构、原子结构模型、氧化还原反应理论等。"
            ],
            "domain": "原子结构与周期律",
            "semester": "上",
            "courses": [
              "chem-h-atom-structure-h"
            ]
          },
          {
            "id": "chem-h-periodic-law",
            "name": "元素周期律",
            "points": [
              "主题1：化学科学与实验探究【教学提示】情境素材建议：有关化学发现的故事：元素周期律的发展等。",
              "素养1 宏观辨识与微观探析：能从元素和原子、分子水平认识物质的组成、结构、性质和变化，形成“结构决定性质”的观念。",
              "课程目标1：能从物质的微观层面理解其组成、结构和性质的联系，形成“结构决定性质，性质决定应用”的观念。"
            ],
            "domain": "原子结构与周期律",
            "prerequisites": [
              "chem-h-atom-structure-h"
            ],
            "courses": [
              "chem-h-periodic-law"
            ]
          },
          {
            "id": "chem-h-periodic-table-h",
            "name": "元素周期表",
            "points": [
              "认识元素可以组成不同种类的物质，根据物质的组成和性质可以对物质进行分类；同类物质具有相似的性质。",
              "能从元素和原子、分子水平认识物质的组成、结构、性质和变化，形成“结构决定性质”的观念。"
            ],
            "domain": "原子结构与周期律",
            "semester": "上",
            "prerequisites": [
              "chem-h-periodic-law"
            ],
            "courses": [
              "chem-h-periodic-table-h"
            ]
          },
          {
            "id": "chem-h-chemical-bond",
            "name": "化学键",
            "points": [
              "认识化学是在原子、分子水平上研究物质的组成、结构、性质、转化及其应用的一门基础学科。",
              "能从元素和原子、分子水平认识物质的组成、结构、性质和变化，形成“结构决定性质”的观念。"
            ],
            "domain": "原子结构与周期律",
            "semester": "下",
            "prerequisites": [
              "chem-h-periodic-table-h"
            ],
            "courses": [
              "chem-h-chemical-bond"
            ]
          }
        ]
      },
      {
        "subject": "biology",
        "name": "高中生物",
        "nodes": [
          {
            "id": "bio-h-cell-structure",
            "name": "细胞总论",
            "points": [
              "1.2.2 阐明细胞内具有多个相对独立的结构，担负着物质运输、合成与分解、能量转换和信息传递等生命活动",
              "1.3.1 说明有些生物体只有一个细胞，而有的由很多细胞构成，这些细胞形态和功能多样，但都具有相似的基本结构",
              "建构并使用细胞模型，阐明细胞各部分结构通过分工与合作，形成相互协调的有机整体，实现细胞水平的各项生命活动"
            ],
            "domain": "细胞的结构",
            "courses": [
              "bio-h-cell-structure"
            ]
          },
          {
            "id": "bio-h-elements-compounds",
            "name": "组成细胞的元素与化合物",
            "points": [
              "说出细胞主要由C、H、O、N、P、S等元素构成，它们以碳链为骨架形成复杂的生物大分子",
              "概述糖类有多种类型，它们既是细胞的重要结构成分，又是生命活动的主要能源物质",
              "阐明蛋白质通常由20种氨基酸分子组成，它的功能取决于氨基酸序列及其形成的空间结构，细胞的功能主要由蛋白质完成"
            ],
            "domain": "细胞的结构",
            "prerequisites": [
              "bio-h-cell-structure"
            ],
            "courses": [
              "bio-h-elements-compounds"
            ]
          },
          {
            "id": "bio-h-protein-nucleic-acid",
            "name": "蛋白质与核酸",
            "points": [
              "阐明蛋白质通常由20种氨基酸分子组成，它的功能取决于氨基酸序列及其形成的空间结构，细胞的功能主要由蛋白质完成",
              "概述核酸由核苷酸聚合而成，是储存与传递遗传信息的生物大分子"
            ],
            "domain": "细胞的结构",
            "prerequisites": [
              "bio-h-elements-compounds"
            ],
            "courses": [
              "bio-h-protein-nucleic-acid"
            ]
          },
          {
            "id": "bio-h-sugar-lipid",
            "name": "糖类与脂质",
            "points": [
              "概述糖类有多种类型，它们既是细胞的重要结构成分，又是生命活动的主要能源物质",
              "举例说出不同种类的脂质对维持细胞结构和功能有重要作用"
            ],
            "domain": "细胞的结构",
            "prerequisites": [
              "bio-h-elements-compounds"
            ],
            "courses": [
              "bio-h-sugar-lipid"
            ]
          },
          {
            "id": "bio-h-cell-membrane",
            "name": "细胞膜结构",
            "points": [
              "1.2.1 概述细胞都由质膜包裹，质膜将细胞与其生活环境分开，能控制物质进出，并参与细胞间的信息交流",
              "建构并使用细胞模型，阐明细胞各部分结构通过分工与合作，形成相互协调的有机整体，实现细胞水平的各项生命活动",
              "尝试制作真核细胞的结构模型"
            ],
            "domain": "细胞的结构",
            "prerequisites": [
              "bio-h-protein-nucleic-acid",
              "bio-h-sugar-lipid"
            ],
            "courses": [
              "bio-h-cell-membrane"
            ]
          },
          {
            "id": "bio-h-organelles",
            "name": "细胞器",
            "points": [
              "阐明细胞内具有多个相对独立的结构，担负着物质运输、合成与分解、能量转换和信息传递等生命活动",
              "举例说明细胞各部分结构之间相互联系、协调一致，共同执行细胞的各项生命活动",
              "建构并使用细胞模型，阐明细胞各部分结构通过分工与合作，形成相互协调的有机整体，实现细胞水平的各项生命活动"
            ],
            "domain": "细胞的结构",
            "prerequisites": [
              "bio-h-cell-membrane"
            ],
            "courses": [
              "bio-h-organelles"
            ]
          },
          {
            "id": "bio-h-endomembrane-system",
            "name": "生物膜系统",
            "points": [
              "阐明细胞内具有多个相对独立的结构，担负着物质运输、合成与分解、能量转换和信息传递等生命活动",
              "举例说明细胞各部分结构之间相互联系、协调一致，共同执行细胞的各项生命活动"
            ],
            "domain": "细胞的结构",
            "prerequisites": [
              "bio-h-organelles"
            ],
            "courses": [
              "bio-h-endomembrane-system"
            ]
          },
          {
            "id": "bio-h-nucleus",
            "name": "细胞核",
            "points": [
              "1.2.3 阐明遗传信息主要储存在细胞核中",
              "建构并使用细胞模型，阐明细胞各部分结构通过分工与合作，形成相互协调的有机整体，实现细胞水平的各项生命活动"
            ],
            "domain": "细胞的结构",
            "prerequisites": [
              "bio-h-organelles"
            ],
            "courses": [
              "bio-h-nucleus"
            ]
          },
          {
            "id": "bio-h-prokaryote-eukaryote",
            "name": "原核细胞与真核细胞",
            "points": [
              "描述原核细胞与真核细胞的最大区别是原核细胞没有由核膜包被的细胞核",
              "观察多种多样的细胞，说明这些细胞具有多种形态和功能，但同时又都具有相似的基本结构"
            ],
            "domain": "细胞的结构",
            "prerequisites": [
              "bio-h-nucleus"
            ],
            "courses": [
              "bio-h-prokaryote-eukaryote"
            ]
          },
          {
            "id": "bio-h-cell-metabolism",
            "name": "细胞代谢总论",
            "points": [
              "阐明ATP是驱动细胞生命活动的直接能源物质。",
              "说明植物细胞的叶绿体从太阳光中捕获能量，这些能量在二氧化碳和水转变为糖与氧气的过程中，转换并储存为糖分子中的化学能。",
              "说明生物通过细胞呼吸将储存在有机分子中的能量转化为生命活动可以利用的能量。"
            ],
            "domain": "细胞代谢",
            "prerequisites": [
              "bio-h-cell-membrane"
            ],
            "courses": [
              "bio-h-cell-metabolism"
            ]
          },
          {
            "id": "bio-h-transport-across-membrane",
            "name": "物质跨膜运输",
            "points": [
              "阐明质膜具有选择透过性",
              "举例说明有些物质顺浓度梯度进出细胞，不需要额外提供能量；有些物质逆浓度梯度进出细胞，需要能量和载体蛋白",
              "举例说明大分子物质可以通过胞吞、胞吐进出细胞"
            ],
            "domain": "细胞代谢",
            "prerequisites": [
              "bio-h-cell-membrane"
            ],
            "courses": [
              "bio-h-transport-across-membrane"
            ]
          },
          {
            "id": "bio-h-enzyme",
            "name": "酶",
            "points": [
              "2.2.1 说明绝大多数酶是一类能催化生化反应的蛋白质，酶活性受到环境因素（如pH和温度等）的影响",
              "探究酶催化的专一性、高效性及影响酶活性的因素"
            ],
            "domain": "细胞代谢",
            "prerequisites": [
              "bio-h-transport-across-membrane"
            ],
            "courses": [
              "bio-h-enzyme"
            ]
          },
          {
            "id": "bio-h-atp",
            "name": "ATP 与能量代谢",
            "points": [
              "解释ATP是驱动细胞生命活动的直接能源物质",
              "从物质与能量视角，探索光合作用与呼吸作用，阐明细胞生命活动过程中贯穿着物质与能量的变化"
            ],
            "domain": "细胞代谢",
            "prerequisites": [
              "bio-h-enzyme"
            ],
            "courses": [
              "bio-h-atp"
            ]
          },
          {
            "id": "bio-h-cellular-respiration",
            "name": "细胞呼吸",
            "points": [
              "说明生物通过细胞呼吸将储存在有机分子中的能量转化为生命活动可以利用的能量",
              "从物质与能量视角，探索光合作用与呼吸作用，阐明细胞生命活动过程中贯穿着物质与能量的变化"
            ],
            "domain": "细胞代谢",
            "prerequisites": [
              "bio-h-atp"
            ],
            "courses": [
              "bio-h-cellular-respiration"
            ]
          },
          {
            "id": "bio-h-photosynthesis",
            "name": "光合作用",
            "points": [
              "说明植物细胞的叶绿体从太阳光中捕获能量，这些能量在二氧化碳和水转变为糖与氧气的过程中，转换并储存为糖分子中的化学能",
              "从物质与能量视角，探索光合作用与呼吸作用，阐明细胞生命活动过程中贯穿着物质与能量的变化",
              "探究不同环境因素对光合作用的影响"
            ],
            "domain": "细胞代谢",
            "prerequisites": [
              "bio-h-atp"
            ],
            "courses": [
              "bio-h-photosynthesis"
            ]
          },
          {
            "id": "bio-h-photosynthesis-respiration-relation",
            "name": "光合与呼吸的关系",
            "points": [
              "从物质与能量视角，探索光合作用与呼吸作用，阐明细胞生命活动过程中贯穿着物质与能量的变化",
              "说明植物细胞的叶绿体从太阳光中捕获能量，这些能量在二氧化碳和水转变为糖与氧气的过程中，转换并储存为糖分子中的化学能",
              "说明生物通过细胞呼吸将储存在有机分子中的能量转化为生命活动可以利用的能量"
            ],
            "domain": "细胞代谢",
            "prerequisites": [
              "bio-h-cellular-respiration",
              "bio-h-photosynthesis"
            ],
            "courses": [
              "bio-h-photosynthesis-respiration-relation"
            ]
          },
          {
            "id": "bio-h-cell-division",
            "name": "细胞分裂综合",
            "points": [
              "2.3.1 描述细胞通过不同的方式进行分裂，其中有丝分裂保证了遗传信息在亲代和子代细胞中的一致性",
              "观察处于细胞周期不同阶段的细胞，结合有丝分裂模型，描述细胞增殖的主要特征",
              "制作和观察根尖细胞有丝分裂简易装片，或观察其永久装片"
            ],
            "domain": "细胞的生命历程",
            "prerequisites": [
              "bio-h-nucleus"
            ],
            "courses": [
              "bio-h-cell-division-demo"
            ]
          },
          {
            "id": "bio-h-cell-cycle",
            "name": "细胞周期",
            "points": [
              "2.3.1 描述细胞通过不同的方式进行分裂，其中有丝分裂保证了遗传信息在亲代和子代细胞中的一致性",
              "观察处于细胞周期不同阶段的细胞，结合有丝分裂模型，描述细胞增殖的主要特征"
            ],
            "domain": "细胞的生命历程",
            "prerequisites": [
              "bio-h-photosynthesis-respiration-relation"
            ],
            "courses": [
              "bio-h-cell-cycle"
            ]
          },
          {
            "id": "bio-h-mitosis",
            "name": "有丝分裂",
            "points": [
              "描述细胞通过不同的方式进行分裂，其中有丝分裂保证了遗传信息在亲代和子代细胞中的一致性。",
              "观察处于细胞周期不同阶段的细胞，结合有丝分裂模型，描述细胞增殖的主要特征。",
              "制作和观察根尖细胞有丝分裂简易装片，或观察其永久装片。"
            ],
            "domain": "细胞的生命历程",
            "prerequisites": [
              "bio-h-cell-cycle"
            ],
            "courses": [
              "bio-h-mitosis"
            ]
          },
          {
            "id": "bio-h-meiosis",
            "name": "减数分裂",
            "points": [
              "本模块选取的减数分裂和受精作用、DNA分子的结构和功能、遗传和变异的基本原理及应用等知识，主要是从细胞水平和分子水平阐述生命的延续性",
              "描述细胞通过不同的方式进行分裂，其中有丝分裂保证了遗传信息在亲代和子代细胞中的一致性"
            ],
            "domain": "细胞的生命历程",
            "prerequisites": [
              "bio-h-mitosis"
            ],
            "courses": [
              "bio-meiosis"
            ]
          },
          {
            "id": "bio-h-cell-differentiation",
            "name": "细胞分化",
            "points": [
              "说明在个体发育过程中，细胞在形态、结构和功能方面发生特异性的分化，形成了复杂的多细胞生物体。",
              "观察处于细胞周期不同阶段的细胞，结合有丝分裂模型，描述细胞增殖的主要特征，并举例说明细胞的分化、衰老、死亡等生命现象。"
            ],
            "domain": "细胞的生命历程",
            "prerequisites": [
              "bio-h-mitosis"
            ],
            "courses": [
              "bio-h-cell-differentiation"
            ]
          },
          {
            "id": "bio-h-stem-cell",
            "name": "干细胞",
            "points": [
              "2.3.2 说明在个体发育过程中，细胞在形态、结构和功能方面发生特异性的分化，形成了复杂的多细胞生物体",
              "观察处于细胞周期不同阶段的细胞，结合有丝分裂模型，描述细胞增殖的主要特征，并举例说明细胞的分化、衰老、死亡等生命现象"
            ],
            "domain": "细胞的生命历程",
            "prerequisites": [
              "bio-h-cell-differentiation"
            ],
            "courses": [
              "bio-h-stem-cell"
            ]
          },
          {
            "id": "bio-h-cell-aging-apoptosis",
            "name": "细胞衰老与凋亡",
            "points": [
              "描述在正常情况下，细胞衰老和死亡是一种自然的生理过程",
              "观察处于细胞周期不同阶段的细胞，结合有丝分裂模型，描述细胞增殖的主要特征，并举例说明细胞的分化、衰老、死亡等生命现象"
            ],
            "domain": "细胞的生命历程",
            "prerequisites": [
              "bio-h-stem-cell"
            ],
            "courses": [
              "bio-h-cell-aging-apoptosis"
            ]
          },
          {
            "id": "bio-h-cancer-cell",
            "name": "癌细胞与癌症防治",
            "points": [
              "2.3.3 描述在正常情况下，细胞衰老和死亡是一种自然的生理过程",
              "观察处于细胞周期不同阶段的细胞，结合有丝分裂模型，描述细胞增殖的主要特征，并举例说明细胞的分化、衰老、死亡等生命现象"
            ],
            "domain": "细胞的生命历程",
            "prerequisites": [
              "bio-h-cell-aging-apoptosis"
            ],
            "courses": [
              "bio-h-cancer-cell"
            ]
          },
          {
            "id": "bio-h-genetics-mendel",
            "name": "孟德尔遗传综合",
            "points": [
              "概述DNA分子上的遗传信息通过RNA指导蛋白质的合成，遗传信息控制生物性状，并代代相传。",
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。"
            ],
            "domain": "孟德尔遗传定律",
            "prerequisites": [
              "bio-h-meiosis"
            ],
            "courses": [
              "bio-h-genetics-mendel"
            ]
          },
          {
            "id": "bio-h-mendel-law-1",
            "name": "分离定律",
            "points": [
              "概述DNA分子上的遗传信息通过RNA指导蛋白质的合成",
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容"
            ],
            "domain": "孟德尔遗传定律",
            "prerequisites": [
              "bio-h-meiosis"
            ],
            "courses": [
              "bio-h-mendel-law-1"
            ]
          },
          {
            "id": "bio-h-mendel-law-2",
            "name": "自由组合定律",
            "points": [
              "概述DNA分子上的遗传信息通过RNA指导蛋白质的合成，遗传信息控制生物性状，并代代相传。",
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。"
            ],
            "domain": "孟德尔遗传定律",
            "prerequisites": [
              "bio-h-mendel-law-1"
            ],
            "courses": [
              "bio-h-mendel-law-2"
            ]
          },
          {
            "id": "bio-h-sex-linked-inheritance",
            "name": "伴性遗传",
            "points": [
              "3.2.3 举例说明性染色体上的基因传递和性别相关联",
              "阐明有性生殖中基因的分离和自由组合使得子代的基因型和表型有多种可能，并可由此预测子代的遗传性状"
            ],
            "domain": "孟德尔遗传定律",
            "prerequisites": [
              "bio-h-mendel-law-2"
            ],
            "courses": [
              "bio-h-sex-linked-inheritance"
            ]
          },
          {
            "id": "bio-h-human-genetics",
            "name": "人类遗传病",
            "points": [
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。",
              "本模块选取的减数分裂和受精作用、DNA分子的结构和功能、遗传和变异的基本原理及应用等知识，主要是从细胞水平和分子水平阐述生命的延续性。"
            ],
            "domain": "孟德尔遗传定律",
            "prerequisites": [
              "bio-h-sex-linked-inheritance"
            ],
            "courses": [
              "bio-h-human-genetics"
            ]
          },
          {
            "id": "bio-h-dna-gene",
            "name": "DNA 与基因综合",
            "points": [
              "概述DNA分子是由四种脱氧核苷酸构成，通常由两条碱基互补配对的反向平行长链形成双螺旋结构，碱基的排列顺序编码了遗传信息",
              "概述DNA分子通过半保留方式进行复制",
              "概述DNA分子上的遗传信息通过RNA指导蛋白质的合成"
            ],
            "domain": "基因的分子基础",
            "prerequisites": [
              "bio-h-human-genetics"
            ],
            "courses": [
              "bio-h-dna-gene"
            ]
          },
          {
            "id": "bio-h-dna-is-genetic-material",
            "name": "DNA 是遗传物质",
            "points": [
              "概述多数生物的基因是DNA分子的功能片段，有些病毒的基因在RNA分子上",
              "概述DNA分子是由四种脱氧核苷酸构成，通常由两条碱基互补配对的反向平行长链形成双螺旋结构，碱基的排列顺序编码了遗传信息"
            ],
            "domain": "基因的分子基础",
            "prerequisites": [
              "bio-h-human-genetics"
            ],
            "courses": [
              "bio-h-dna-is-genetic-material"
            ]
          },
          {
            "id": "bio-h-dna-structure",
            "name": "DNA 分子结构",
            "points": [
              "概述DNA分子是由四种脱氧核苷酸构成，通常由两条碱基互补配对的反向平行长链形成双螺旋结构，碱基的排列顺序编码了遗传信息",
              "亲代传递给子代的遗传信息主要编码在DNA分子上"
            ],
            "domain": "基因的分子基础",
            "prerequisites": [
              "bio-h-dna-is-genetic-material"
            ],
            "courses": [
              "bio-h-dna-structure"
            ]
          },
          {
            "id": "bio-h-dna-replication",
            "name": "DNA 复制",
            "points": [
              "概述DNA分子通过半保留方式进行复制",
              "概述DNA分子是由四种脱氧核苷酸构成，通常由两条碱基互补配对的反向平行长链形成双螺旋结构，碱基的排列顺序编码了遗传信息"
            ],
            "domain": "基因的分子基础",
            "prerequisites": [
              "bio-h-dna-structure"
            ],
            "courses": [
              "bio-h-dna-replication"
            ]
          },
          {
            "id": "bio-h-gene-concept",
            "name": "基因的概念与表达",
            "points": [
              "概述多数生物的基因是DNA分子的功能片段，有些病毒的基因在RNA分子上",
              "概述DNA分子是由四种脱氧核苷酸构成，通常由两条碱基互补配对的反向平行长链形成双螺旋结构，碱基的排列顺序编码了遗传信息"
            ],
            "domain": "基因的分子基础",
            "prerequisites": [
              "bio-h-dna-replication"
            ],
            "courses": [
              "bio-h-gene-concept"
            ]
          },
          {
            "id": "bio-h-gene-to-protein",
            "name": "从基因到蛋白质",
            "points": [
              "概述DNA分子上的遗传信息通过RNA指导蛋白质的合成",
              "概述多数生物的基因是DNA分子的功能片段，有些病毒的基因在RNA分子上",
              "概述DNA分子是由四种脱氧核苷酸构成，通常由两条碱基互补配对的反向平行长链形成双螺旋结构，碱基的排列顺序编码了遗传信息"
            ],
            "domain": "基因的分子基础",
            "prerequisites": [
              "bio-h-gene-concept"
            ],
            "courses": [
              "bio-h-gene-to-protein"
            ]
          },
          {
            "id": "bio-h-gene-regulation",
            "name": "基因表达调控",
            "points": [
              "概述DNA分子上的遗传信息通过RNA指导蛋白质的合成",
              "概述多数生物的基因是DNA分子的功能片段，有些病毒的基因在RNA分子上"
            ],
            "domain": "基因的分子基础",
            "prerequisites": [
              "bio-h-gene-to-protein"
            ],
            "courses": [
              "bio-h-gene-regulation"
            ]
          },
          {
            "id": "bio-h-genetic-variation",
            "name": "遗传变异综合",
            "points": [
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。",
              "生物通过生殖、发育和遗传实现生命的延续和种族的繁衍，通过进化形成物种多样性和适应性，进化的本质是遗传物质的改变。",
              "选取的现代生物进化理论和物种形成等知识，主要是为了阐明生物进化的过程和原因。"
            ],
            "domain": "变异与进化",
            "prerequisites": [
              "bio-h-gene-regulation"
            ],
            "courses": [
              "bio-h-genetic-variation"
            ]
          },
          {
            "id": "bio-h-gene-mutation",
            "name": "基因突变",
            "points": [
              "概念3 遗传信息控制生物性状，并代代相传 3.1 亲代传递给子代的遗传信息主要编码在DNA分子上",
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。"
            ],
            "domain": "变异与进化",
            "prerequisites": [
              "bio-h-gene-regulation"
            ],
            "courses": [
              "bio-h-gene-mutation"
            ]
          },
          {
            "id": "bio-h-chromosome-variation",
            "name": "染色体变异",
            "points": [
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。",
              "本模块选取的减数分裂和受精作用、DNA分子的结构和功能、遗传和变异的基本原理及应用等知识，主要是从细胞水平和分子水平阐述生命的延续性；"
            ],
            "domain": "变异与进化",
            "prerequisites": [
              "bio-h-gene-mutation"
            ],
            "courses": [
              "bio-h-chromosome-variation"
            ]
          },
          {
            "id": "bio-h-breeding",
            "name": "育种",
            "points": [
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。",
              "本模块选取的减数分裂和受精作用、DNA分子的结构和功能、遗传和变异的基本原理及应用等知识，主要是从细胞水平和分子水平阐述生命的延续性；"
            ],
            "domain": "变异与进化",
            "prerequisites": [
              "bio-h-chromosome-variation"
            ],
            "courses": [
              "bio-h-breeding"
            ]
          },
          {
            "id": "bio-h-evolution-evidence",
            "name": "生物进化的证据",
            "points": [
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。",
              "选取的现代生物进化理论和物种形成等知识，主要是为了阐明生物进化的过程和原因。"
            ],
            "domain": "变异与进化",
            "prerequisites": [
              "bio-h-breeding"
            ],
            "courses": [
              "bio-h-evolution-evidence"
            ]
          },
          {
            "id": "bio-h-natural-selection",
            "name": "自然选择与适应",
            "points": [
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。",
              "选取的现代生物进化理论和物种形成等知识，主要是为了阐明生物进化的过程和原因。"
            ],
            "domain": "变异与进化",
            "prerequisites": [
              "bio-h-evolution-evidence"
            ],
            "courses": [
              "bio-h-natural-selection"
            ]
          },
          {
            "id": "bio-h-speciation",
            "name": "物种形成",
            "points": [
              "选取的现代生物进化理论和物种形成等知识，主要是为了阐明生物进化的过程和原因。",
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。"
            ],
            "domain": "变异与进化",
            "prerequisites": [
              "bio-h-natural-selection"
            ],
            "courses": [
              "bio-h-speciation"
            ]
          }
        ]
      },
      {
        "subject": "geography",
        "name": "高中地理",
        "nodes": [
          {
            "id": "geo-h-earth-in-universe",
            "name": "地球的宇宙环境",
            "points": [
              "运用资料，描述地球所处的宇宙环境，说明太阳对地球的影响。",
              "了解基本的地球科学知识，理解一些自然地理现象的过程与原理。"
            ],
            "domain": "地球与宇宙环境",
            "courses": [
              "geo-h-earth-in-universe"
            ]
          },
          {
            "id": "geo-h-earth-rotation",
            "name": "地球的自转（地方时/地转偏向力）",
            "points": [
              "结合实例，说明地球运动的地理意义。",
              "结合地球运动、自然环境要素的物质运动和能量交换，以及自然地理基本过程，分析现实世界的一些自然现象、过程及其对人类活动的影响。"
            ],
            "domain": "地球与宇宙环境",
            "prerequisites": [
              "geo-h-earth-in-universe"
            ],
            "courses": [
              "geo-h-earth-rotation"
            ]
          },
          {
            "id": "geo-h-earth-revolution",
            "name": "地球的公转（黄赤交角/正午太阳高度）",
            "points": [
              "结合实例，说明地球运动的地理意义。",
              "结合地球运动、自然环境要素的物质运动和能量交换，以及自然地理基本过程，分析现实世界的一些自然现象、过程及其对人类活动的影响。"
            ],
            "domain": "地球与宇宙环境",
            "prerequisites": [
              "geo-h-earth-rotation"
            ],
            "courses": [
              "geo-h-earth-revolution"
            ]
          },
          {
            "id": "geo-h-earth-motion",
            "name": "地球运动综合",
            "points": [
              "结合实例，说明地球运动的地理意义。",
              "结合地球运动、自然环境要素的物质运动和能量交换，以及自然地理基本过程，分析现实世界的一些自然现象、过程及其对人类活动的影响。"
            ],
            "domain": "地球与宇宙环境",
            "prerequisites": [
              "geo-h-earth-revolution"
            ],
            "courses": [
              "geo-h-earth-motion"
            ]
          },
          {
            "id": "geo-h-earth-structure",
            "name": "地球的内部圈层与结构",
            "points": [
              "运用示意图，说明地球的圈层结构。",
              "能够运用地球科学的基础知识，说明一些自然现象之间的关系和变化过程。"
            ],
            "domain": "地球与宇宙环境",
            "prerequisites": [
              "geo-h-earth-in-universe"
            ],
            "courses": [
              "geo-h-earth-structure"
            ]
          },
          {
            "id": "geo-h-atmosphere",
            "name": "大气圈综合",
            "points": [
              "运用示意图等，说明大气受热过程与热力环流原理, 并解释相关现象。",
              "运用示意图，分析锋、低压（气旋）、高压（反气旋）等天气系统，并运用简易天气图，解释常见天气现象的成因。",
              "运用示意图，说明气压带、风带的分布，并分析气压带、风带对气候形成的作用，以及气候对自然地理景观形成的影响。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-earth-rotation"
            ],
            "courses": [
              "geo-h-atmosphere"
            ]
          },
          {
            "id": "geo-h-atmospheric-heating",
            "name": "大气的受热过程",
            "points": [
              "运用示意图等，说明大气受热过程与热力环流原理, 并解释相关现象。",
              "能够运用地球科学的基础知识，说明一些自然现象之间的关系和变化过程（综合思维）。",
              "以认识自然地理要素及其与人类活动的关系为线索组织教学。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-atmosphere"
            ],
            "courses": [
              "geo-h-atmospheric-heating"
            ]
          },
          {
            "id": "geo-h-atmospheric-circulation",
            "name": "大气环流（三圈环流）",
            "points": [
              "运用示意图，说明气压带、风带的分布，并分析气压带、风带对气候形成的作用，以及气候对自然地理景观形成的影响。",
              "能够运用地球运动、自然环境的整体性等知识，说明自然环境与人类活动之间的关系，以及尊重自然规律的重要性。",
              "以自然环境系统及其要素发展、演变过程对人类活动的影响为线索组织教学。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-atmospheric-heating"
            ],
            "courses": [
              "geo-h-atmospheric-circulation"
            ]
          },
          {
            "id": "geo-h-global-circulation",
            "name": "全球性大气环流",
            "points": [
              "运用示意图，说明气压带、风带的分布，并分析气压带、风带对气候形成的作用，以及气候对自然地理景观形成的影响。",
              "能够运用地球运动、自然环境的整体性等知识，说明自然环境与人类活动之间的关系，以及尊重自然规律的重要性。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-atmospheric-circulation"
            ],
            "courses": [
              "geo-h-global-circulation"
            ]
          },
          {
            "id": "geo-h-weather-system",
            "name": "常见天气系统",
            "points": [
              "运用示意图，分析锋、低压（气旋）、高压（反气旋）等天气系统，并运用简易天气图，解释常见天气现象的成因。",
              "能够运用地球运动、自然环境的整体性等知识，说明自然环境与人类活动之间的关系，以及尊重自然规律的重要性。",
              "以自然环境系统及其要素发展、演变过程对人类活动的影响为线索组织教学。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-global-circulation"
            ],
            "courses": [
              "geo-h-weather-system"
            ]
          },
          {
            "id": "geo-h-monsoon-system",
            "name": "季风系统",
            "points": [
              "运用示意图，说明气压带、风带的分布，并分析气压带、风带对气候形成的作用，以及气候对自然地理景观形成的影响。",
              "运用示意图，分析锋、低压（气旋）、高压（反气旋）等天气系统，并运用简易天气图，解释常见天气现象的成因。",
              "以自然环境系统及其要素发展、演变过程对人类活动的影响为线索组织教学。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-global-circulation"
            ],
            "courses": [
              "geo-h-monsoon-system",
              "geo-monsoon"
            ]
          },
          {
            "id": "geo-h-climate-types",
            "name": "气候类型与分布",
            "points": [
              "运用示意图，说明气压带、风带的分布，并分析气压带、风带对气候形成的作用，以及气候对自然地理景观形成的影响。",
              "运用图表并结合实例，分析自然环境的整体性和地域分异规律。",
              "能够运用自然环境的整体性和地域分异规律，认识区域的自然环境，掌握因地制宜等基本地理思想方法（区域认知）。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-weather-system"
            ],
            "courses": [
              "geo-h-climate-types"
            ]
          },
          {
            "id": "geo-h-climate-change",
            "name": "全球气候变化",
            "points": [
              "运用碳循环和温室效应原理，分析碳排放对环境的影响，说明碳减排国际合作的重要性。",
              "综合分析各种区域性或全球性资源和环境问题对国家安全的影响。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-climate-types"
            ],
            "courses": [
              "geo-h-climate-change"
            ]
          },
          {
            "id": "geo-h-hydrosphere",
            "name": "水圈综合",
            "points": [
              "运用示意图，说明水循环的过程及其地理意义。",
              "运用世界洋流分布图，说明世界洋流的分布规律，并举例说明洋流对地理环境和人类活动的影响。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-atmospheric-heating"
            ],
            "courses": [
              "geo-h-hydrosphere"
            ]
          },
          {
            "id": "geo-h-water-cycle",
            "name": "水循环",
            "points": [
              "运用示意图，说明水循环的过程及其地理意义。",
              "能够运用地球科学的基础知识，说明一些自然现象之间的关系和变化过程（综合思维）。",
              "以认识自然地理要素及其与人类活动的关系为线索组织教学。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-hydrosphere"
            ],
            "courses": [
              "geo-h-water-cycle"
            ]
          },
          {
            "id": "geo-h-ocean-current",
            "name": "洋流",
            "points": [
              "运用世界洋流分布图，说明世界洋流的分布规律，并举例说明洋流对地理环境和人类活动的影响。",
              "能够运用地球运动、自然环境的整体性等知识，说明自然环境与人类活动之间的关系，以及尊重自然规律的重要性。",
              "以自然环境系统及其要素发展、演变过程对人类活动的影响为线索组织教学。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-water-cycle",
              "geo-h-global-circulation"
            ],
            "courses": [
              "geo-h-ocean-current"
            ]
          },
          {
            "id": "geo-h-river-features",
            "name": "河流特征与开发利用",
            "points": [
              "绘制示意图，解释各类陆地水体之间的相互关系。",
              "运用世界洋流分布图，说明世界洋流的分布规律，并举例说明洋流对地理环境和人类活动的影响。",
              "运用示意图，说明水循环的过程及其地理意义。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-water-cycle"
            ],
            "courses": [
              "geo-h-river-features"
            ]
          },
          {
            "id": "geo-h-plate-tectonics",
            "name": "板块构造理论",
            "points": [
              "运用示意图，说明岩石圈物质循环过程。",
              "结合实例，解释内力和外力对地表形态变化的影响，并说明人类活动与地表形态的关系。",
              "能够运用地球运动、自然环境的整体性等知识，说明自然环境与人类活动之间的关系，以及尊重自然规律的重要性。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-earth-structure"
            ],
            "courses": [
              "geo-h-plate-tectonics"
            ]
          },
          {
            "id": "geo-h-crustal-movement",
            "name": "地壳运动",
            "points": [
              "结合实例，解释内力和外力对地表形态变化的影响，并说明人类活动与地表形态的关系。",
              "运用示意图，说明岩石圈物质循环过程。",
              "以自然环境系统及其要素发展、演变过程对人类活动的影响为线索组织教学。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-plate-tectonics"
            ],
            "courses": [
              "geo-h-crustal-movement"
            ]
          },
          {
            "id": "geo-h-landforms",
            "name": "主要地貌类型",
            "points": [
              "结合实例，解释内力和外力对地表形态变化的影响，并说明人类活动与地表形态的关系。",
              "运用示意图，说明岩石圈物质循环过程。",
              "能够运用地球运动、自然环境的整体性等知识，说明自然环境与人类活动之间的关系，以及尊重自然规律的重要性。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-crustal-movement"
            ],
            "courses": [
              "geo-h-landforms"
            ]
          },
          {
            "id": "geo-h-vegetation-soil",
            "name": "植被与土壤",
            "points": [
              "1.9 通过野外观察或运用土壤标本，说明土壤的主要形成因素。",
              "1.10 通过野外观察或运用视频、图像，识别主要植被，说明其与自然环境的关系。",
              "能够运用地球科学的基础知识，说明一些自然现象之间的关系和变化过程（综合思维）。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-climate-types"
            ],
            "courses": [
              "geo-h-vegetation-soil"
            ]
          },
          {
            "id": "geo-h-natural-integrity",
            "name": "自然地理环境整体性",
            "points": [
              "运用图表并结合实例，分析自然环境的整体性和地域分异规律。",
              "能够运用自然环境的整体性和地域分异规律，认识区域的自然环境，掌握因地制宜等基本地理思想方法。",
              "以自然环境系统及其要素发展、演变过程对人类活动的影响为线索组织教学。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-vegetation-soil",
              "geo-h-landforms"
            ],
            "courses": [
              "geo-h-natural-integrity"
            ]
          },
          {
            "id": "geo-h-natural-zones",
            "name": "自然地理环境差异性（自然带）",
            "points": [
              "运用图表并结合实例，分析自然环境的整体性和地域分异规律。",
              "能够运用自然环境的整体性和地域分异规律，认识区域的自然环境，掌握因地制宜等基本地理思想方法。",
              "以自然环境系统及其要素发展、演变过程对人类活动的影响为线索组织教学。引导学生关注自然环境各要素的特征、演变过程及自然环境的整体性和差异性。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-natural-integrity"
            ],
            "courses": [
              "geo-h-natural-zones",
              "geo-h-natural-zones-demo"
            ]
          },
          {
            "id": "geo-h-natural-disaster",
            "name": "自然灾害",
            "points": [
              "运用资料，说明常见自然灾害的成因，了解避灾、防灾的措施。",
              "能够在一定程度上合理描述和解释特定区域的自然现象，并说明其对人类的影响。",
              "指导学生运用体验、观察、观测、实验、野外考察等方式开展地理实践活动。"
            ],
            "domain": "自然地理（大气·水·地貌·整体性）",
            "prerequisites": [
              "geo-h-crustal-movement",
              "geo-h-weather-system"
            ],
            "courses": [
              "geo-h-natural-disaster"
            ]
          }
        ]
      },
      {
        "subject": "history",
        "name": "高中历史",
        "nodes": [
          {
            "id": "ancient-china-h",
            "name": "中国古代史：文明起源与制度演进总览",
            "points": [
              "在时空框架中梳理中国古代史主线：文明起源、早期国家、先秦变局、秦汉统一与制度演进。",
              "运用制度、经济、疆域、思想四类证据解释统一多民族封建国家的形成与长期维系。"
            ],
            "domain": "中国古代史",
            "courses": [
              "ancient-china-h"
            ]
          },
          {
            "id": "hist-h-ancient-civ",
            "name": "中华文明起源（史前·新石器）",
            "points": [
              "通过了解石器时代中国境内有代表性的文化遗存，认识它们与中华文明起源以及私有制、阶级和国家产生的关系。",
              "早期中华文明：通过了解石器时代中国境内有代表性的文化遗存，认识它们与中华文明起源以及私有制、阶级和国家产生的关系。"
            ],
            "domain": "中国古代史",
            "courses": [
              "hist-h-ancient-civ"
            ]
          },
          {
            "id": "hist-h-early-state",
            "name": "中华文明的起源与早期国家",
            "points": [
              "通过了解石器时代中国境内有代表性的文化遗存，认识它们与中华文明起源以及私有制、阶级和国家产生的关系。",
              "通过甲骨文、青铜铭文及其他文献记载，了解私有制、阶级和早期国家的特征。"
            ],
            "domain": "中国古代史",
            "semester": "上",
            "prerequisites": [
              "hist-h-ancient-civ"
            ],
            "courses": [
              "hist-h-early-state"
            ]
          },
          {
            "id": "hist-h-pre-qin",
            "name": "先秦（夏商周·春秋战国）",
            "points": [
              "通过了解夏商周的更替，认识中华文明的早期发展特征。",
              "通过了解春秋战国时期的经济发展和政治变动，理解战国变法运动的必然性。",
              "通过了解百家争鸣的局面，认识这一时期的思想繁荣及其对后世的深远影响。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-h-early-state"
            ],
            "courses": [
              "hist-h-pre-qin"
            ]
          },
          {
            "id": "hist-h-feudal-system",
            "name": "秦汉统一与中央集权制度",
            "points": [
              "通过了解秦朝的统一业绩和汉朝削藩、开疆拓土、尊崇儒术等举措，认识统一多民族封建国家的建立及巩固在中国历史上的意义。",
              "通过了解秦汉时期的社会矛盾和农民起义，认识秦朝崩溃和两汉衰亡的原因。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-h-pre-qin"
            ],
            "courses": [
              "hist-h-feudal-system"
            ]
          },
          {
            "id": "hist-h-qin-han-empire",
            "name": "秦汉帝国",
            "points": [
              "通过了解秦朝的统一业绩和汉朝削藩、开疆拓土、尊崇儒术等举措，认识统一多民族封建国家的建立及巩固在中国历史上的意义。",
              "通过了解秦汉时期的社会矛盾和农民起义，认识秦朝崩溃和两汉衰亡的原因。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-h-feudal-system"
            ],
            "courses": [
              "hist-h-qin-han-empire"
            ]
          },
          {
            "id": "hist-h-imperial-system",
            "name": "隋唐至明清政治制度演变",
            "points": [
              "通过了解三国两晋南北朝政权更迭的历史脉络，隋唐时期封建社会的高度繁荣，认识三国两晋南北朝至隋唐时期的制度变化与创新。",
              "通过了解明清时期封建专制的发展、世界的变化对中国的影响，认识中国社会面临的危机。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-h-qin-han-empire"
            ],
            "courses": [
              "hist-sui-tang-ming-qing-political"
            ]
          },
          {
            "id": "hist-h-wei-jin-tang",
            "name": "三国两晋南北朝与隋唐",
            "points": [
              "通过了解三国两晋南北朝政权更迭的历史脉络，隋唐时期封建社会的高度繁荣，认识三国两晋南北朝至隋唐时期的制度变化与创新、民族交融、区域开发和思想文化领域的新成就。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-h-imperial-system"
            ],
            "courses": [
              "hist-h-wei-jin-tang"
            ]
          },
          {
            "id": "hist-h-song-yuan-ming-qing-h",
            "name": "宋元明清",
            "points": [
              "通过了解两宋的政治和军事，认识这一时期在政治、经济、文化与社会等方面的新变化；通过了解辽夏金元诸政权的建立、发展和相关制度建设，认识北方少数民族政权在统一多民族封建国家发展中的重要作用。",
              "通过了解明清时期统一全国和经略边疆的相关举措，知道南海诸岛、台湾及其包括钓鱼岛在内的附属岛屿是中国版图一部分，认识这一时期统一多民族国家版图奠定的重要意义；了解明清时期社会经济、思想文化的重要变化。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-h-wei-jin-tang"
            ],
            "courses": [
              "hist-h-song-yuan-ming-qing-h"
            ]
          },
          {
            "id": "hist-h-ancient-economy",
            "name": "古代经济（农业/手工业/商业）",
            "points": [
              "通过了解春秋战国时期的经济发展和政治变动，理解战国时期变法运动的必然性。",
              "通过了解明清时期社会经济、思想文化的重要变化；通过了解明清时期封建专制的发展、世界的变化对中国的影响，认识中国社会面临的危机。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-h-song-yuan-ming-qing-h"
            ],
            "courses": [
              "hist-h-ancient-economy"
            ]
          },
          {
            "id": "hist-h-ancient-culture",
            "name": "中国古代思想文化",
            "points": [
              "通过了解甲骨文、青铜铭文及其他文献记载，了解私有制、阶级和早期国家的特征。",
              "通过了解春秋战国时期的经济发展和政治变动，理解战国时期变法运动的必然性；了解老子、孔子学说；通过孟子、荀子、庄子等了解“百家争鸣”的局面及其意义。",
              "了解并认同中华优秀传统文化、革命文化、社会主义先进文化，了解中国各个历史时期的英雄人物，传承民族气节、崇尚英雄气概，认识中华文明的历史价值和现实意义。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-h-song-yuan-ming-qing-h"
            ],
            "courses": [
              "hist-h-ancient-culture"
            ]
          },
          {
            "id": "hist-h-ancient-thought",
            "name": "古代思想文化（儒/道/法/佛）",
            "points": [
              "通过了解春秋战国时期的经济发展和政治变动，理解战国时期变法运动的必然性；了解老子、孔子学说；通过孟子、荀子、庄子等了解“百家争鸣”的局面及其意义。",
              "了解并认同中华优秀传统文化、革命文化、社会主义先进文化，了解中国各个历史时期的英雄人物，传承民族气节、崇尚英雄气概，认识中华文明的历史价值和现实意义。"
            ],
            "domain": "中国古代史",
            "prerequisites": [
              "hist-h-ancient-culture"
            ],
            "courses": [
              "hist-h-ancient-thought"
            ]
          },
          {
            "id": "hist-h-opium-war-h",
            "name": "鸦片战争与近代中国",
            "points": [
              "认识列强侵华对中国社会的影响，概述晚清时期中国人民反抗外来侵略的斗争事迹，理解其性质和意义；认识社会各阶级为挽救危局所作的努力及存在的局限性。",
              "通过了解明清时期封建专制的发展、世界的变化对中国的影响，认识中国社会面临的危机。"
            ],
            "domain": "中国近现代史",
            "prerequisites": [
              "hist-h-ancient-thought"
            ],
            "courses": [
              "hist-h-opium-war-h"
            ]
          },
          {
            "id": "hist-h-semi-colonial",
            "name": "半殖民地半封建社会的形成",
            "points": [
              "认识列强侵华对中国社会的影响，概述晚清时期中国人民反抗外来侵略的斗争事迹，理解其性质和意义；认识社会各阶级为挽救危局所作的努力及存在的局限性。",
              "通过了解鸦片战争、甲午中日战争、八国联军侵华等重大事件，理解近代中国半殖民地半封建社会形成的历史进程。"
            ],
            "domain": "中国近现代史",
            "prerequisites": [
              "hist-h-opium-war-h"
            ],
            "courses": [
              "hist-h-semi-colonial"
            ]
          },
          {
            "id": "hist-h-reform-revolution-h",
            "name": "戊戌变法与辛亥革命",
            "points": [
              "认识列强侵华对中国社会的影响，概述晚清时期中国人民反抗外来侵略的斗争事迹，理解其性质和意义；认识社会各阶级为挽救危局所作的努力及存在的局限性。",
              "了解孙中山三民主义的基本内容，理解辛亥革命与中华民国建立对中国结束帝制、建立民国的意义及局限性；了解北洋军阀的统治及特点。"
            ],
            "domain": "中国近现代史",
            "prerequisites": [
              "hist-h-semi-colonial"
            ],
            "courses": [
              "hist-h-reform-revolution-h"
            ]
          },
          {
            "id": "hist-h-xinhai-modern",
            "name": "辛亥革命与民国建立",
            "points": [
              "了解孙中山三民主义的基本内容，理解辛亥革命与中华民国建立对中国结束帝制、建立民国的意义及局限性。",
              "了解北洋军阀的统治及特点。"
            ],
            "domain": "中国近现代史",
            "prerequisites": [
              "hist-h-reform-revolution-h"
            ],
            "courses": [
              "hist-h-xinhai-modern"
            ]
          },
          {
            "id": "hist-h-new-democracy",
            "name": "新民主主义革命",
            "points": [
              "认识五四爱国运动的历史意义，认识马克思主义在中国的传播与中国共产党成立对中国革命的深远影响；认识国共合作领导国民革命的历史作用；了解南京国民政府的成立；认识中国共产党开辟革命新道路的意义；认识红军长征…",
              "通过了解全面内战的爆发及人民解放战争的进程，分析国民党政权在大陆统治灭亡的原因，探讨中国共产党领导人民取得中国革命胜利的原因和意义。"
            ],
            "domain": "中国近现代史",
            "semester": "下",
            "prerequisites": [
              "hist-h-xinhai-modern"
            ],
            "courses": [
              "hist-h-new-democracy"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "高中思想政治",
        "nodes": [
          {
            "id": "pol-h-req1",
            "name": "中国特色社会主义",
            "points": [
              "【课标】理解社会主义从空想到科学、从理论到实践的发展，坚定中国特色社会主义信念。",
              "【课标】理解只有社会主义才能救中国，只有中国特色社会主义才能发展中国。",
              "【课标】理解新时代坚持和发展中国特色社会主义的总任务，学习贯彻习近平新时代中国特色社会主义思想。"
            ],
            "domain": "中国特色社会主义"
          },
          {
            "id": "pol-h-req2",
            "name": "经济与社会",
            "points": [
              "【课标】理解我国生产资料所有制与社会主义市场经济体制，把握“两个毫不动摇”。",
              "【课标】贯彻新发展理念，建设现代化经济体系，推动高质量发展。",
              "【课标】理解个人收入分配与社会保障制度，践行社会责任促进社会进步。"
            ],
            "domain": "经济与社会",
            "prerequisites": [
              "pol-h-req1"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "高中信息技术",
        "nodes": [
          {
            "id": "it-h-programming-basics",
            "name": "程序设计基础（变量/数据类型）",
            "points": [
              "从生活实例出发，概述算法的概念与特征，运用恰当的描述方法和控制结构表示简单算法。",
              "掌握一种程序设计语言的基本知识，使用程序设计语言实现简单算法。",
              "依据解决问题的需要，设计和表示简单算法；掌握一种程序设计语言的基本知识，利用程序设计语言实现简单算法，解决实际问题。"
            ],
            "domain": "程序设计与数据结构",
            "courses": [
              "it-h-programming-basics"
            ]
          },
          {
            "id": "it-h-control-structures",
            "name": "程序控制结构（顺序/分支/循环）",
            "points": [
              "从生活实例出发，概述算法的概念与特征，运用恰当的描述方法和控制结构表示简单算法。",
              "创设程序设计的活动情境，组织学生在解决问题的过程中探究顺序结构、选择结构和循环结构的特点。"
            ],
            "domain": "程序设计与数据结构",
            "prerequisites": [
              "it-h-programming-basics"
            ],
            "courses": [
              "it-h-control-structures"
            ]
          },
          {
            "id": "it-h-functions-modules",
            "name": "函数与模块化",
            "points": [
              "掌握一种程序设计语言的基本知识，使用程序设计语言实现简单算法。",
              "依据解决问题的需要，设计和表示简单算法；掌握一种程序设计语言的基本知识，利用程序设计语言实现简单算法，解决实际问题。",
              "创设程序设计的活动情境，组织学生在解决问题的过程中探究顺序结构、选择结构和循环结构的特点。"
            ],
            "domain": "程序设计与数据结构",
            "prerequisites": [
              "it-h-control-structures"
            ],
            "courses": [
              "it-h-functions-modules"
            ]
          },
          {
            "id": "it-h-data-structures",
            "name": "数据结构（列表/栈/队列/树/图）",
            "points": [
              "从生活实例出发，概述算法的概念与特征，运用恰当的描述方法和控制结构表示简单算法。",
              "掌握一种程序设计语言的基本知识，使用程序设计语言实现简单算法。",
              "依据解决问题的需要，设计和表示简单算法；掌握一种程序设计语言的基本知识，利用程序设计语言实现简单算法，解决实际问题。"
            ],
            "domain": "程序设计与数据结构",
            "prerequisites": [
              "it-h-functions-modules"
            ],
            "courses": [
              "it-h-data-structures"
            ]
          },
          {
            "id": "it-h-algorithm-concept",
            "name": "算法概念与复杂度",
            "points": [
              "从生活实例出发，概述算法的概念与特征，运用恰当的描述方法和控制结构表示简单算法。",
              "掌握一种程序设计语言的基本知识，使用程序设计语言实现简单算法。",
              "依据解决问题的需要，设计和表示简单算法；掌握一种程序设计语言的基本知识，利用程序设计语言实现简单算法，解决实际问题。"
            ],
            "domain": "算法",
            "prerequisites": [
              "it-h-data-structures"
            ],
            "courses": [
              "it-h-algorithm-concept"
            ]
          },
          {
            "id": "it-h-sorting-searching",
            "name": "排序与查找算法",
            "points": [
              "从生活实例出发，概述算法的概念与特征，运用恰当的描述方法和控制结构表示简单算法。",
              "掌握一种程序设计语言的基本知识，使用程序设计语言实现简单算法。",
              "依据解决问题的需要，设计和表示简单算法；掌握一种程序设计语言的基本知识，利用程序设计语言实现简单算法，解决实际问题。"
            ],
            "domain": "算法",
            "prerequisites": [
              "it-h-algorithm-concept"
            ],
            "courses": [
              "it-h-sorting-searching"
            ]
          },
          {
            "id": "it-h-network-basics",
            "name": "计算机网络基础（TCP/IP）",
            "points": [
              "观察日常生活中的信息系统，理解计算机网络在信息系统中的作用，通过组建小型无线网络，了解常见网络设备的功能，知道接入方式、带宽等因素对信息系统的影响。",
              "通过组建小型无线网络，了解常见网络设备的功能，知道接入方式、带宽等因素对信息系统的影响。"
            ],
            "domain": "网络与信息安全",
            "prerequisites": [
              "it-h-programming-basics"
            ],
            "courses": [
              "it-h-network-basics"
            ]
          },
          {
            "id": "it-h-internet-applications",
            "name": "互联网应用（HTTP/Web/邮件）",
            "points": [
              "观察日常生活中的信息系统，理解计算机网络在信息系统中的作用，通过组建小型无线网络，了解常见网络设备的功能，知道接入方式、带宽等因素对信息系统的影响。",
              "通过分析典型的信息系统，知道信息系统的组成与功能，理解计算机、移动终端在信息系统中的作用，描述计算机和移动终端的基本工作原理。",
              "探讨信息技术对社会发展、科技进步以及人们生活、工作与学习的影响，描述信息社会的特征，了解信息技术的发展趋势。"
            ],
            "domain": "网络与信息安全",
            "prerequisites": [
              "it-h-network-basics"
            ],
            "courses": [
              "it-h-internet-applications"
            ]
          },
          {
            "id": "it-h-information-security",
            "name": "信息安全与隐私保护",
            "points": [
              "2.5 通过分析信息系统应用实例，了解信息系统安全的基本方法和措施，认识信息安全的重要性。",
              "具备信息社会责任的学生，具有一定的信息安全意识与能力，能够遵守信息法律法规，信守信息社会的道德与伦理准则。",
              "理解信息安全对当今社会的影响，能安全、守法地应用信息系统。"
            ],
            "domain": "网络与信息安全",
            "prerequisites": [
              "it-h-internet-applications"
            ],
            "courses": [
              "it-h-information-security"
            ]
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "高中心理健康教育",
        "nodes": [
          {
            "id": "psych-h-g10-learning-strategy",
            "name": "学习策略与考试适应",
            "points": [
              "培养创新精神和创新能力，掌握学习策略，开发学习潜能，提高学习效率。",
              "积极应对考试压力，克服考试焦虑。"
            ],
            "domain": "学习辅导",
            "prerequisites": [
              "psych-h-g10-self-concept"
            ]
          },
          {
            "id": "psych-h-g10-self-concept",
            "name": "自我认同与理想信念",
            "points": [
              "帮助学生确立正确的自我意识，树立人生理想和信念，形成正确的世界观、人生观和价值观。"
            ],
            "domain": "认识自我"
          },
          {
            "id": "psych-h-g10-relationship",
            "name": "人际关系与沟通",
            "points": [
              "正确认识人际关系状况，培养人际沟通能力，促进积极情感反应和体验。",
              "正确对待和异性同伴的交往，知道友谊和爱情的界限。"
            ],
            "domain": "人际交往",
            "prerequisites": [
              "psych-h-g10-learning-strategy"
            ]
          }
        ]
      }
    ],
    "11": [
      {
        "subject": "chinese",
        "name": "高中语文",
        "nodes": [
          {
            "id": "chn-h-language-expression-h",
            "name": "语言表达简明连贯得体",
            "points": [
              "能凭借语感和对语言运用规律的把握，根据具体的语言情境和不同的对象，运用口头和书面语言文明得体地进行表达与交流。",
              "运用基本的语言规律和逻辑规则，判别语言运用的正误，准确、生动、有逻辑地表达自己的认识。",
              "讲究语言文字表达的效果及美感，具有创新意识。"
            ],
            "domain": "语言文字运用",
            "prerequisites": [
              "chn-h-sentence-revision-h"
            ],
            "courses": [
              "chn-h-language-expression-h"
            ]
          },
          {
            "id": "chn-h-literary-deep-analysis",
            "name": "文学类深度鉴赏",
            "points": [
              "鉴赏文学作品。感受和体验文学作品的语言、形象和情感之美，能欣赏、鉴别和评价不同时代、不同风格的作品，具有正确的价值观、高尚的审美情趣和审美品位。",
              "审美鉴赏与创造是指学生在语文学习中，通过审美体验、评价等活动形成正确的审美意识、健康向上的审美情趣与鉴赏品位，并在此过程中逐步掌握表现美、创造美的方法。",
              "从最使自己感动的故事、人物、场景、语言等方面入手，反复阅读品味，深入探究，欣赏语言表达的精彩之处，梳理小说的感人场景乃至整体的艺术架构，理清人物关系，感受、欣赏人物形象，探究人物的精神世界，体会小说的…"
            ],
            "domain": "现代文阅读",
            "prerequisites": [
              "chn-h-literary-reading-h",
              "chn-h-practical-reading"
            ],
            "courses": [
              "chn-h-literary-deep-analysis"
            ]
          },
          {
            "id": "chn-h-classical-translation-h",
            "name": "文言文翻译",
            "points": [
              "语言建构与运用是指学生在丰富的语言实践中，通过主动的积累、梳理和整合，逐步掌握祖国语言文字特点及其运用规律，形成个体言语经验，发展在具体语言情境中正确有效地运用祖国语言文字进行交流沟通的能力。",
              "能凭借语感和对语言运用规律的把握，根据具体的语言情境和不同的对象，运用口头和书面语言文明得体地进行表达与交流；能将具体的语言文字作品置于特定的交际情境和历史文化情境中理解、分析和评价。",
              "通过梳理和整合，将积累的语言材料和学习的语文知识结构化，将言语活动经验逐渐转化为具体的学习方法和策略，并能在语言实践中自觉地运用。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-h-classical-grammar-h"
            ],
            "courses": [
              "chn-h-classical-translation-h"
            ]
          },
          {
            "id": "chn-h-classical-prose-advanced",
            "name": "古文经典精读",
            "points": [
              "在阅读过程中，探索阅读整本书的门径，形成和积累自己阅读整本书的经验。重视学习前人的阅读经验，根据不同的阅读目的，综合运用精读、略读与浏览的方法阅读整本书，读懂文本，把握文本丰富的内涵和精髓。",
              "阅读整本书，应以学生利用课内外时间自主阅读、撰写笔记、交流讨论为主，不以教师的讲解代替或限制学生的阅读与思考。教师的主要任务是提出专题学习目标，组织学习活动，引导学生深入思考、讨论与交流。",
              "学生在反复阅读过程中，每读一遍，重点解决一两个问题，有些地方应仔细推敲，有些地方可以略读或浏览。阅读要有笔记，记下自己思考、探索、研究的心得。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-h-classical-translation-h"
            ],
            "courses": [
              "chn-h-classical-prose-advanced"
            ]
          },
          {
            "id": "chn-h-poetry-emotion",
            "name": "古诗词情感主旨",
            "points": [
              "鉴赏文学作品。感受和体验文学作品的语言、形象和情感之美，能欣赏、鉴别和评价不同时代、不同风格的作品。",
              "审美鉴赏与创造是指学生在语文学习中，通过审美体验、评价等活动形成正确的审美意识、健康向上的审美情趣与鉴赏品位。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-h-poetry-expression-h"
            ],
            "courses": [
              "chn-h-poetry-emotion"
            ]
          },
          {
            "id": "chn-h-advanced-composition",
            "name": "高级写作技巧",
            "points": [
              "语言表达与交流。能凭借语感和对语言运用规律的把握，根据具体的语言情境和不同的对象，运用口头和书面语言文明得体地进行表达与交流。",
              "美的表达与创造。能运用祖国语言文字表达自己的审美体验，表达自己的情感、态度和观念，表现和创造自己心中的美好形象；讲究语言文字表达的效果及美感，具有创新意识。",
              "发展逻辑思维。能够辨识、分析、比较、归纳和概括基本的语言现象和文学现象，并能有理有据地表达自己的观点和阐述自己的发现；运用基本的语言规律和逻辑规则，判别语言运用的正误，准确、生动、有逻辑地表达自己的认…"
            ],
            "domain": "写作",
            "prerequisites": [
              "chn-h-argumentative-essay"
            ],
            "courses": [
              "chn-h-advanced-composition"
            ]
          },
          {
            "id": "chn-h-task-driven-writing",
            "name": "任务驱动型作文",
            "points": [
              "学习任务群的设计着眼于培养语言文字运用基础能力，充分顾及问题导向、跨文化、自主合作、个性化、创造性等因素。",
              "语文课程还应当适应当代社会的发展需要，为培养创新人才发挥重要作用。要引导学生在语言文字运用的过程中发现问题，培养探究意识和发现问题的敏感性，探求解决问题和语言表达的创新路径。",
              "学习任务群以自主、合作、探究性学习为主要学习方式，凸显学生学习语文的根本途径。这些学习任务群追求语言、知识、技能和思想情感、文化修养等多方面、多层次目标发展的综合效应。"
            ],
            "domain": "写作",
            "prerequisites": [
              "chn-h-advanced-composition"
            ],
            "courses": [
              "chn-h-task-driven-writing"
            ]
          },
          {
            "id": "chn-h-red-chamber",
            "name": "《红楼梦》（长篇小说阅读）",
            "points": [
              "在指定范围内选择阅读一部长篇小说。通读全书，整体把握其思想内容和艺术特点。从最使自己感动的故事、人物、场景、语言等方面入手，反复阅读品味，深入探究。",
              "梳理小说的感人场景乃至整体的艺术架构，理清人物关系，感受、欣赏人物形象，探究人物的精神世界，体会小说的主旨，研究小说的艺术价值。",
              "联系个人经验，深入理解作品；享受读书的愉悦，从作品中汲取营养，丰富自己的精神世界，逐步形成正确的世界观、人生观和价值观。"
            ],
            "domain": "整本书阅读",
            "prerequisites": [
              "chn-h-countryside-china",
              "chn-h-literary-reading-h"
            ],
            "courses": [
              "chn-h-red-chamber"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "高中数学",
        "nodes": [
          {
            "id": "math-h-trigonometry-solution",
            "name": "解三角形",
            "points": [
              "必修课程包括五个主题，分别是预备知识、函数、几何与代数、概率与统计、数学建模活动与数学探究活动。",
              "三角函数是描述周期现象的重要数学模型，在数学和其他领域中都有广泛的应用。",
              "通过三角函数的学习，学生能理解三角函数是刻画现实世界周期变化现象的数学模型。"
            ],
            "domain": "三角函数",
            "prerequisites": [
              "math-h-law-of-sines-cosines"
            ],
            "courses": [
              "math-h-trigonometry-solution"
            ]
          },
          {
            "id": "math-h-space-figures",
            "name": "空间几何体的结构",
            "points": [
              "内容包括：集合、常用逻辑用语、相等关系与不等关系、从函数观点看一元二次方程和一元二次不等式。",
              "在集合、常用逻辑用语的教学中，教师应创设合适的教学情境，以义务教育阶段学过的数学内容为载体，引导学生用集合语言和常用逻辑用语梳理、表达学过的相应数学内容。"
            ],
            "domain": "立体几何",
            "courses": [
              "math-high-space-figures"
            ]
          },
          {
            "id": "math-h-space-lines-planes",
            "name": "空间点线面位置关系",
            "points": [
              "内容包括：集合、常用逻辑用语、相等关系与不等关系、从函数观点看一元二次方程和一元二次不等式。",
              "在集合、常用逻辑用语的教学中，教师应创设合适的教学情境，以义务教育阶段学过的数学内容为载体，引导学生用集合语言和常用逻辑用语梳理、表达学过的相应数学内容。"
            ],
            "domain": "立体几何",
            "prerequisites": [
              "math-h-space-figures"
            ],
            "courses": [
              "math-high-space-lines-planes"
            ]
          },
          {
            "id": "math-h-parallel-perpendicular",
            "name": "平行与垂直的判定",
            "points": [
              "内容包括：集合、常用逻辑用语、相等关系与不等关系、从函数观点看一元二次方程和一元二次不等式。",
              "在集合、常用逻辑用语的教学中，教师应创设合适的教学情境，以义务教育阶段学过的数学内容为载体，引导学生用集合语言和常用逻辑用语梳理、表达学过的相应数学内容。"
            ],
            "domain": "立体几何",
            "prerequisites": [
              "math-h-space-lines-planes"
            ],
            "courses": [
              "math-high-parallel-perpendicular"
            ]
          },
          {
            "id": "math-h-dihedral-angle",
            "name": "二面角",
            "points": [
              "②能用向量语言表述直线与直线、直线与平面、平面与平面的 夹角以及垂直与平行关系。 ③能用向量方法证明必修内容中有关直线、平面位置关系的判 定定理。 ④能用向量方法解决点到直线、点到平面、相互平行的直线…"
            ],
            "domain": "立体几何",
            "prerequisites": [
              "math-h-parallel-perpendicular"
            ],
            "courses": [
              "math-high-dihedral-angle"
            ]
          },
          {
            "id": "math-h-space-vectors",
            "name": "空间向量及其应用",
            "points": [
              "空间向量与代数专题，其中微积分2.5学分，空间向量与代数2学分，概率与统计1.5学分。供有志于学习数理类（如数学、物理、计算机、精密仪器等）专业的学生选择。",
              "B类课程包括微积分、空间向量与代数、应用统计、模型四个专题，其中微积分2学分，空间向量与代数1学分，应用统计2学分，模型1学分。"
            ],
            "domain": "立体几何",
            "prerequisites": [
              "math-h-dihedral-angle",
              "math-h-vector-coordinates"
            ],
            "courses": [
              "math-high-space-vectors"
            ]
          },
          {
            "id": "math-h-line-equation",
            "name": "直线方程与位置关系",
            "points": [
              "内容包括：集合、常用逻辑用语、相等关系与不等关系、从函数观点看一元二次方程和一元二次不等式。",
              "在集合、常用逻辑用语的教学中，教师应创设合适的教学情境，以义务教育阶段学过的数学内容为载体，引导学生用集合语言和常用逻辑用语梳理、表达学过的相应数学内容。"
            ],
            "domain": "解析几何",
            "prerequisites": [
              "math-h-vector-coordinates"
            ],
            "courses": [
              "math-high-line-equation"
            ]
          },
          {
            "id": "math-h-circle-equation",
            "name": "圆的方程",
            "points": [
              "（２）圆与方程 ①回顾确定圆的几何要素，在平面直角坐标系中，探索并掌握 圆的标准方程与一般方程。 ②能根据给定直线、圆的方程，判断直线与圆、圆与圆的位置 关系。 ③能用直线和圆的方程解决一些简单的数学…"
            ],
            "domain": "解析几何",
            "prerequisites": [
              "math-h-line-equation"
            ],
            "courses": [
              "math-high-circle-equation"
            ]
          },
          {
            "id": "math-h-analytic-geometry",
            "name": "解析几何综合",
            "points": [
              "高中数学课程内容突出函数、几何与代数、概率与统计、数学建模活动与数学探究活动四条主线，它们贯穿必修、选择性必修和选修课程。",
              "直观想象是指借助几何直观和空间想象感知事物的形态与变化，利用空间形式特别是图形，理解和解决数学问题的素养。",
              "几何与代数主题包括平面向量及其应用、复数、立体几何初步等内容。"
            ],
            "domain": "解析几何",
            "prerequisites": [
              "math-h-circle-equation"
            ],
            "courses": [
              "math-h-analytic-geometry"
            ]
          },
          {
            "id": "math-h-ellipse",
            "name": "椭圆",
            "points": [
              "②经历从具体情境中抽象出椭圆的过程，掌握椭圆的定义、标 准方程及简单几何性质。"
            ],
            "domain": "解析几何",
            "prerequisites": [
              "math-h-circle-equation"
            ],
            "courses": [
              "math-high-ellipse"
            ]
          },
          {
            "id": "math-h-hyperbola",
            "name": "双曲线",
            "points": [
              "③了解抛物线与双曲线的定义、几何图形和标准方程，以及它 们的简单几何性质。"
            ],
            "domain": "解析几何",
            "prerequisites": [
              "math-h-ellipse"
            ],
            "courses": [
              "math-high-hyperbola"
            ]
          },
          {
            "id": "math-h-parabola-h",
            "name": "抛物线",
            "points": [
              "③了解抛物线与双曲线的定义、几何图形和标准方程，以及它 们的简单几何性质。 ④通过圆锥曲线与方程的学习，进一步体会数形结合的思想。 ⑤了解椭圆、抛物线的简单应用。"
            ],
            "domain": "解析几何",
            "prerequisites": [
              "math-h-ellipse"
            ],
            "courses": [
              "math-high-parabola-h"
            ]
          },
          {
            "id": "math-h-counting-principles",
            "name": "计数原理（分类/分步）",
            "points": [
              "计数原理包括分类加法计数原理、分步乘法计数原理。分类加法计数原理针对完成一件事的不同方案，分步乘法计数原理针对完成一件事的多个步骤。",
              "能根据实际问题的特征，正确选择分类加法计数原理或分步乘法计数原理解决简单的实际问题。",
              "通过实例，理解排列、组合的概念，能利用计数原理推导排列数公式、组合数公式，并能解决简单的实际问题。"
            ],
            "domain": "概率与统计",
            "prerequisites": [
              "math-h-sets"
            ],
            "courses": [
              "math-high-counting-principles"
            ]
          },
          {
            "id": "math-h-binomial-theorem",
            "name": "二项式定理",
            "points": [
              "（３）二项式定理 能用多项式运算法则和计数原理证明二项式定理（参见案例１７， １８），会用二项式定理解决与二项展开式有关的简单问题。"
            ],
            "domain": "概率与统计",
            "prerequisites": [
              "math-h-counting-principles"
            ],
            "courses": [
              "math-high-binomial-theorem"
            ]
          },
          {
            "id": "math-h-probability-h",
            "name": "概率",
            "points": [
              "概率统计是必修课程的主题四，内容包括概率与统计两个单元。"
            ],
            "domain": "概率与统计",
            "prerequisites": [
              "math-h-counting-principles"
            ],
            "courses": [
              "math-high-probability-h"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "高中英语",
        "nodes": [
          {
            "id": "eng-h-vocab-3500",
            "name": "高中 3500 词汇",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "高考应以必修课程和选择性必修课程的内容以及学业质量水平二为命题主要依据。",
              "学生在完成选择性必修课程的8学分后，方可参加高考。"
            ],
            "domain": "词汇",
            "prerequisites": [
              "eng-h-word-formation-h"
            ],
            "courses": [
              "eng-h-vocab-3500"
            ]
          },
          {
            "id": "eng-h-non-finite-h",
            "name": "非谓语动词",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "所有的语言学习活动都应该在一定的主题语境下进行，即学生围绕某一具体的主题语境，基于不同类型的语篇，在解决问题的过程中，运用语言技能获取、梳理、整合语言知识和文化知识，深化对语言的理解。",
              "语言能力目标：具有一定的语言意识和英语语感，在常见的具体语境中整合性地运用已有语言知识，理解口头和书面语篇所表达的意义。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-h-tense-system"
            ],
            "courses": [
              "eng-h-non-finite-h"
            ]
          },
          {
            "id": "eng-h-subjunctive-mood",
            "name": "虚拟语气",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "语法知识是‘形式—意义—使用’的统一体，与语音、词汇、语篇和语用知识紧密相连，直接影响语言理解和表达的准确性和得体性。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-h-noun-clauses"
            ],
            "courses": [
              "eng-h-subjunctive-mood"
            ]
          },
          {
            "id": "eng-h-reading-purpose",
            "name": "阅读主旨与目的题",
            "points": [
              "语言能力目标：在常见的具体语境中整合性地运用已有语言知识，理解口头和书面语篇所表达的意义，识别其恰当表意所采用的手段。",
              "思维品质目标：能辨析语言和文化中的具体现象，梳理、概括信息，建构新概念，分析、推断信息的逻辑关系，正确评判各种思想观点。",
              "英语学习活动观：使学生通过学习理解、应用实践、迁移创新等一系列活动，获取、阐释和评判语篇意义，表达个人观点、意图和情感态度。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "eng-h-reading-inference-h"
            ],
            "courses": [
              "eng-h-reading-purpose"
            ]
          },
          {
            "id": "eng-h-reading-7-choose-5",
            "name": "七选五语篇填空",
            "points": [
              "语篇类型包括口头和书面语篇以及不同的文体形式，如记叙文、说明文、议论文、应用文、访谈、对话等连续性文本，以及图表、图示、网页、广告、漫画等非连续性文本，为语言学习提供文体素材。",
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看（viewing）、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。",
              "所有的语言学习活动都应该在一定的主题语境下进行，即学生围绕某一具体的主题语境，基于不同类型的语篇，在解决问题的过程中，运用语言技能获取、梳理、整合语言知识和文化知识，深化对语言的理解，重视对语篇的赏析…"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "eng-h-reading-purpose"
            ],
            "courses": [
              "eng-h-reading-7-choose-5"
            ]
          },
          {
            "id": "eng-h-cloze-comprehensive",
            "name": "完形填空综合",
            "points": [
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看（viewing）、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。",
              "所有的语言学习活动都应该在一定的主题语境下进行，即学生围绕某一具体的主题语境，基于不同类型的语篇，在解决问题的过程中，运用语言技能获取、梳理、整合语言知识和文化知识，深化对语言的理解，重视对语篇的赏析…",
              "英语学习活动观是指学生在主题意义引领下，通过学习理解、应用实践、迁移创新等一系列体现综合性、关联性和实践性等特点的英语学习活动，使学生基于已有的知识，依托不同类型的语篇，在分析问题和解决问题的过程中，…"
            ],
            "domain": "完形填空",
            "prerequisites": [
              "eng-h-cloze-narrative",
              "eng-h-context-vocab"
            ],
            "courses": [
              "eng-h-cloze-comprehensive"
            ]
          },
          {
            "id": "eng-h-continuation-writing",
            "name": "读后续写",
            "points": [
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看（viewing）、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。",
              "尝试运用所学语言创造性地表达个人意图、观点和态度，并通过运用各种学习策略，提高理解和表达的效果。",
              "英语学习活动观是指学生在主题意义引领下，通过学习理解、应用实践、迁移创新等一系列体现综合性、关联性和实践性等特点的英语学习活动。"
            ],
            "domain": "写作",
            "prerequisites": [
              "eng-h-essay-writing",
              "eng-h-attributive-clauses-h"
            ],
            "courses": [
              "eng-h-continuation-writing"
            ]
          },
          {
            "id": "eng-h-listening-long-h",
            "name": "长对话与独白听力",
            "points": [
              "语篇类型包括口头和书面语篇以及不同的文体形式，如记叙文、说明文、议论文、应用文、访谈、对话等连续性文本。",
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看（viewing）、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。"
            ],
            "domain": "听力",
            "prerequisites": [
              "eng-h-listening-short-h",
              "eng-h-adverbial-clauses-h"
            ],
            "courses": [
              "eng-h-listening-long-h"
            ]
          }
        ]
      },
      {
        "subject": "physics",
        "name": "高中物理",
        "nodes": [
          {
            "id": "phy-h-energy-conservation-general",
            "name": "能量守恒定律",
            "points": [
              "理解机械能守恒定律，体会守恒观念对认识物理规律的重要性。能用机械能守恒定律分析生产生活中的有关问题。",
              "通过实验，验证机械能守恒定律。"
            ],
            "domain": "功与能",
            "prerequisites": [
              "phy-h-energy-conservation-mech"
            ],
            "courses": [
              "phy-h-energy-conservation-general"
            ]
          },
          {
            "id": "phy-h-momentum-impulse",
            "name": "动量与冲量",
            "points": [
              "1.1 动量与动量守恒定律【内容要求】",
              "1.1.1 理解冲量和动量。通过理论推导和实验，理解动量定理和 动量守恒定律，能用其解释生产生活中的有关现象。知道动量守恒定 律的普适性。 例1 知道火箭的发射利用了反冲现象。 例2 查阅资料，了解中…",
              "1.1.2 通过实验，了解弹性碰撞和非弹性碰撞的特点。定量分析 一维碰撞问题并能解释生产生活中的弹性碰撞和非弹性碰撞现象。"
            ],
            "domain": "动量",
            "prerequisites": [
              "phy-h-newton-laws"
            ],
            "courses": [
              "phy-h-momentum-impulse"
            ]
          },
          {
            "id": "phy-h-momentum",
            "name": "动量",
            "points": [
              "1.1 动量与动量守恒定律【内容要求】",
              "1.1.1 理解冲量和动量。通过理论推导和实验，理解动量定理和 动量守恒定律，能用其解释生产生活中的有关现象。知道动量守恒定 律的普适性。 例1 知道火箭的发射利用了反冲现象。 例2 查阅资料，了解中…",
              "1.1.2 通过实验，了解弹性碰撞和非弹性碰撞的特点。定量分析 一维碰撞问题并能解释生产生活中的弹性碰撞和非弹性碰撞现象。"
            ],
            "domain": "动量",
            "semester": "上",
            "prerequisites": [
              "phy-h-momentum-impulse"
            ],
            "courses": [
              "phy-h-momentum"
            ]
          },
          {
            "id": "phy-h-momentum-conservation",
            "name": "动量守恒定律",
            "points": [
              "通过实验，验证机械能守恒定律。理解机械能守恒定律，体会守恒观念对认识物理规律的重要性。",
              "能用机械能守恒定律分析生产生活中的有关问题。"
            ],
            "domain": "动量",
            "prerequisites": [
              "phy-h-momentum-impulse"
            ],
            "courses": [
              "phy-h-momentum-conservation"
            ]
          },
          {
            "id": "phy-h-collision-types",
            "name": "碰撞与反冲",
            "points": [
              "1.1 动量与动量守恒定律【内容要求】",
              "1.1.1 理解冲量和动量。通过理论推导和实验，理解动量定理和 动量守恒定律，能用其解释生产生活中的有关现象。知道动量守恒定 律的普适性。 例1 知道火箭的发射利用了反冲现象。 例2 查阅资料，了解中…",
              "1.1.2 通过实验，了解弹性碰撞和非弹性碰撞的特点。定量分析 一维碰撞问题并能解释生产生活中的弹性碰撞和非弹性碰撞现象。"
            ],
            "domain": "动量",
            "prerequisites": [
              "phy-h-momentum-conservation",
              "phy-h-energy-conservation-mech"
            ],
            "courses": [
              "phy-h-collision-types"
            ]
          },
          {
            "id": "phy-h-electrostatics",
            "name": "静电现象",
            "points": [
              "3.1.1 通过实验，了解静电现象。能用原子结构模型和电荷守恒 的知识分析静电现象。 例1 通过多种方式使物体带电，观察静电现象。 例2 演示并分析静电感应现象。",
              "3.1.2 知道点电荷模型。知道两个点电荷间相互作用的规律。体 会探究库仑定律过程中的科学思想和方法。 例3 与质点模型类比，体会在什么情境下可将带电体抽象为点 电荷。 例4 体会库仑扭秤实验设计的巧…"
            ],
            "domain": "静电场",
            "prerequisites": [
              "phy-h-newton-laws"
            ],
            "courses": [
              "phy-h-electrostatics"
            ]
          },
          {
            "id": "phy-h-coulomb-law",
            "name": "库仑定律",
            "points": [
              "3.1.1 通过实验，了解静电现象。能用原子结构模型和电荷守恒 的知识分析静电现象。 例1 通过多种方式使物体带电，观察静电现象。 例2 演示并分析静电感应现象。",
              "3.1.2 知道点电荷模型。知道两个点电荷间相互作用的规律。体 会探究库仑定律过程中的科学思想和方法。 例3 与质点模型类比，体会在什么情境下可将带电体抽象为点 电荷。 例4 体会库仑扭秤实验设计的巧…"
            ],
            "domain": "静电场",
            "prerequisites": [
              "phy-h-electrostatics"
            ],
            "courses": [
              "phy-h-coulomb-law"
            ]
          },
          {
            "id": "phy-h-electric-field",
            "name": "电场与电场强度",
            "points": [
              "3.1.3 知道电场是一种物质。了解电场强度，体会用物理量之比 定义新物理量的方法。会用电场线描述电场。 例5 用电场线描绘两个等量异种点电荷周围的电场。",
              "3.1.4 了解生产生活中关于静电的利用与防护。 例6 分析讨论静电在激光打印、静电喷雾和静电除尘等技术中 的应用。知道在有可燃气体、粉尘的环境中如何防止静电事故。"
            ],
            "domain": "静电场",
            "prerequisites": [
              "phy-h-coulomb-law"
            ],
            "courses": [
              "phy-h-electric-field"
            ]
          },
          {
            "id": "phy-h-electric-potential",
            "name": "电势与电势能",
            "points": [
              "3.1.5 知道静电场中的电荷具有电势能。了解电势能、电势和电 --- 势差的含义。知道匀强电场中电势差与电场强度的关系。能分析带电 粒子在电场中的运动情况，能解释相关的物理现象。",
              "3.1.6 观察常见的电容器，了解电容器的电容，观察电容器的充、 放电现象。能举例说明电容器的应用。 例7 查阅资料，了解电容器在照相机闪光灯电路中的作用。 活动建议 （1）通过观察、查阅资料等方式，…"
            ],
            "domain": "静电场",
            "prerequisites": [
              "phy-h-electric-field"
            ],
            "courses": [
              "phy-h-electric-potential"
            ]
          },
          {
            "id": "phy-h-capacitor",
            "name": "电容器",
            "points": [
              "3.1.6 观察常见的电容器，了解电容器的电容，观察电容器的充、 放电现象。能举例说明电容器的应用。 例7 查阅资料，了解电容器在照相机闪光灯电路中的作用。 活动建议 （1）通过观察、查阅资料等方式，…"
            ],
            "domain": "静电场",
            "prerequisites": [
              "phy-h-electric-potential"
            ],
            "courses": [
              "phy-h-capacitor"
            ]
          },
          {
            "id": "phy-h-dc-circuits",
            "name": "恒定电流与欧姆定律",
            "points": [
              "3.2 电路及其应用【内容要求】",
              "3.2.1 观察并能识别常见的电路元器件，了解它们在电路中的作 用。会使用多用电表。",
              "3.2.2 通过实验，探究并了解金属导体的电阻与材料、长度和横 截面积的定量关系。会测量金属丝的电阻率。 例1 知道滑动变阻器的工作原理。 例2 通过I-U图像了解材料的电阻特性。"
            ],
            "domain": "直流电路",
            "prerequisites": [
              "phy-h-capacitor"
            ],
            "courses": [
              "phy-h-dc-circuits"
            ]
          },
          {
            "id": "phy-h-circuit-analysis",
            "name": "闭合电路与电路分析",
            "points": [
              "3.2.4 理解闭合电路欧姆定律。会测量电源的电动势和内阻。 例3 通过探究电源两端电压与电流的关系，体会图像法在研究 物理问题中的作用。",
              "3.2.5 理解电功、电功率及焦耳定律，能用焦耳定律解释生产生 活中的电热现象。",
              "3.2.6 能分析和解决家庭电路中的简单问题，能将安全用电和节 （2017年版2020年修订） 约用电的知识应用于生活实际。 例4 根据某家庭的电器设施，估算该家庭电路中所需导线的 规格。 活动建议 …"
            ],
            "domain": "直流电路",
            "prerequisites": [
              "phy-h-dc-circuits"
            ],
            "courses": [
              "phy-h-circuit-analysis"
            ]
          },
          {
            "id": "phy-h-electrical-experiments",
            "name": "电学实验",
            "points": [
              "通过实验，探究并了解闭合电路的欧姆定律。会测量电源的电动势和内阻。",
              "能完成“测量电源的电动势和内阻”等物理实验。能分析实验现象和数据，发现规律，形成结论，用已有的物理知识进行解释。",
              "引导学生运用控制变量等研究方法设计实验方案，学会分析和处理实验数据的方法，提高科学探究能力。"
            ],
            "domain": "直流电路",
            "prerequisites": [
              "phy-h-circuit-analysis"
            ],
            "courses": [
              "phy-h-electrical-experiments"
            ]
          },
          {
            "id": "phy-h-gas-laws",
            "name": "气体实验定律与理想气体（热学）",
            "points": [
              "3.1.6 通过实验，了解气体实验定律。知道理想气体模型。能用 分子动理论和统计观点解释气体压强和气体实验定律。 活动建议 （1）设计实验，比较肥皂水和清水的表面张力。 （2）通过调查，了解生活中表现…",
              "3.2.1 知道热力学第一定律。通过有关史实，了解热力学第一定 律和能量守恒定律的发现过程，体会科学探索中的挫折和失败对科学 发现的意义。",
              "3.2.2 理解能量守恒定律，能用能量守恒的观点解释自然现象。"
            ],
            "domain": "热学",
            "prerequisites": [
              "phy-h-energy-conservation-general"
            ],
            "courses": [
              "phy-h-gas-laws"
            ]
          }
        ]
      },
      {
        "subject": "chemistry",
        "name": "高中化学",
        "nodes": [
          {
            "id": "chem-h-molecular-structure",
            "name": "分子结构与性质",
            "points": [
              "认识化学是在原子、分子水平上研究物质的组成、结构、性质、转化及其应用的一门基础学科，其特征是认识物质和创造物质。",
              "能从元素和原子、分子水平认识物质的组成、结构、性质和变化，形成“结构决定性质”的观念。",
              "能认识化学现象与模型之间的联系，能运用多种认知模型来描述和解释物质的结构、性质和变化。"
            ],
            "domain": "原子结构与周期律",
            "prerequisites": [
              "chem-h-chemical-bond"
            ],
            "courses": [
              "chem-h-molecular-structure"
            ]
          },
          {
            "id": "chem-h-thermochemistry",
            "name": "热化学（焓变）",
            "points": [
              "认识化学变化的本质特征是有新物质生成，并伴有能量转化；认识化学变化有一定限度、速率，是可以调控的。",
              "关注化学变化中的能量转化；能用对立统一、联系发展和动态平衡的观点考察化学反应，预测在一定条件下某种物质可能发生的化学变化。",
              "选择性必修课程依据化学学科的基础性研究领域，设置“化学反应原理”模块。"
            ],
            "domain": "化学反应与能量",
            "prerequisites": [
              "chem-h-chemical-bond"
            ],
            "courses": [
              "chem-h-thermochemistry"
            ]
          },
          {
            "id": "chem-h-enthalpy-change",
            "name": "焓变与反应热",
            "points": [
              "认识化学变化的本质特征是有新物质生成，并伴有能量转化；认识化学变化有一定限度、速率，是可以调控的。",
              "关注化学变化中的能量转化；能用对立统一、联系发展和动态平衡的观点考察化学反应，预测在一定条件下某种物质可能发生的化学变化。"
            ],
            "domain": "化学反应与能量",
            "prerequisites": [
              "chem-h-thermochemistry"
            ],
            "courses": [
              "chem-h-enthalpy-change"
            ]
          },
          {
            "id": "chem-h-hess-law",
            "name": "盖斯定律",
            "points": [
              "认识化学变化的本质特征是有新物质生成，并伴有能量转化；认识化学变化有一定限度、速率，是可以调控的。",
              "能从内因与外因、量变与质变等方面较全面地分析物质的化学变化，关注化学变化中的能量转化；能用对立统一、联系发展和动态平衡的观点考察化学反应。"
            ],
            "domain": "化学反应与能量",
            "prerequisites": [
              "chem-h-enthalpy-change"
            ],
            "courses": [
              "chem-h-hess-law"
            ]
          },
          {
            "id": "chem-h-reaction-rate",
            "name": "化学反应速率",
            "points": [
              "认识化学变化有一定限度、速率，是可以调控的。能多角度、动态地分析化学变化，运用化学反应原理解决简单的实际问题。",
              "能从内因与外因、量变与质变等方面较全面地分析物质的化学变化，关注化学变化中的能量转化；能用对立统一、联系发展和动态平衡的观点考察化学反应。"
            ],
            "domain": "化学反应速率与平衡",
            "prerequisites": [
              "chem-h-hess-law"
            ],
            "courses": [
              "chem-h-reaction-rate"
            ]
          },
          {
            "id": "chem-h-chemical-equilibrium",
            "name": "化学平衡",
            "points": [
              "认识化学变化有一定限度、速率，是可以调控的。能多角度、动态地分析化学变化，运用化学反应原理解决简单的实际问题。",
              "能用对立统一、联系发展和动态平衡的观点考察化学反应，预测在一定条件下某种物质可能发生的化学变化。",
              "选择性必修课程设置3个模块，包括“化学反应原理”模块。"
            ],
            "domain": "化学反应速率与平衡",
            "prerequisites": [
              "chem-h-reaction-rate"
            ],
            "courses": [
              "chem-h-chemical-equilibrium"
            ]
          },
          {
            "id": "chem-h-reaction-rate-equilibrium",
            "name": "速率与平衡综合",
            "points": [
              "认识化学变化有一定限度、速率，是可以调控的。能多角度、动态地分析化学变化，运用化学反应原理解决简单的实际问题。",
              "能用对立统一、联系发展和动态平衡的观点考察化学反应，预测在一定条件下某种物质可能发生的化学变化。",
              "选择性必修课程依据化学学科的基础性研究领域，设置“化学反应原理”模块。"
            ],
            "domain": "化学反应速率与平衡",
            "prerequisites": [
              "chem-h-chemical-equilibrium"
            ],
            "courses": [
              "chem-h-reaction-rate-equilibrium"
            ]
          },
          {
            "id": "chem-h-le-chatelier",
            "name": "勒夏特列原理",
            "points": [
              "认识化学变化有一定限度、速率，是可以调控的。能多角度、动态地分析化学变化，运用化学反应原理解决简单的实际问题。",
              "能用对立统一、联系发展和动态平衡的观点考察化学反应，预测在一定条件下某种物质可能发生的化学变化。",
              "选择性必修课程中，依据化学学科的基础性研究领域，设置“化学反应原理”模块。"
            ],
            "domain": "化学反应速率与平衡",
            "prerequisites": [
              "chem-h-chemical-equilibrium"
            ],
            "courses": [
              "chem-h-le-chatelier"
            ]
          },
          {
            "id": "chem-h-equilibrium-constant",
            "name": "平衡常数",
            "points": [
              "认识化学变化有一定限度、速率，是可以调控的。能多角度、动态地分析化学变化，运用化学反应原理解决简单的实际问题。",
              "能用对立统一、联系发展和动态平衡的观点考察化学反应，预测在一定条件下某种物质可能发生的化学变化。"
            ],
            "domain": "化学反应速率与平衡",
            "prerequisites": [
              "chem-h-le-chatelier"
            ],
            "courses": [
              "chem-h-equilibrium-constant"
            ]
          },
          {
            "id": "chem-h-electrochemistry",
            "name": "电化学基础",
            "points": [
              "认识化学变化有一定限度、速率，是可以调控的。能多角度、动态地分析化学变化，运用化学反应原理解决简单的实际问题。",
              "认识化学变化的本质特征是有新物质生成，并伴有能量转化；",
              "了解实验、假说、模型、比较、分类等方法在化学科学研究中的运用。"
            ],
            "domain": "电化学",
            "prerequisites": [
              "chem-h-oxidation-reduction"
            ],
            "courses": [
              "chem-h-electrochemistry"
            ]
          },
          {
            "id": "chem-h-galvanic-cell",
            "name": "原电池",
            "points": [
              "情境素材建议：有关化学发现的故事：电离理论的建立、元素周期律的发展、原电池的发现、氯气的发现、人工合成尿素、工业合成氨、青蒿素的提取等。",
              "认识化学变化的本质特征是有新物质生成，并伴有能量转化；认识化学变化有一定限度、速率，是可以调控的。",
              "能从内因与外因、量变与质变等方面较全面地分析物质的化学变化，关注化学变化中的能量转化。"
            ],
            "domain": "电化学",
            "prerequisites": [
              "chem-h-electrochemistry"
            ],
            "courses": [
              "chem-h-galvanic-cell",
              "lithium-ion-battery-tech"
            ]
          },
          {
            "id": "chem-h-electrolysis",
            "name": "电解池",
            "points": [
              "认识有化合价变化的反应是氧化还原反应，了解氧化还原反应的本质是电子的转移，知道常见的氧化剂和还原剂。",
              "电解质的电离；探究溶液中离子反应的实质及发生条件（测定电流或溶液电导率的变化）。"
            ],
            "domain": "电化学",
            "prerequisites": [
              "chem-h-galvanic-cell"
            ],
            "courses": [
              "chem-h-electrolysis"
            ]
          },
          {
            "id": "chem-h-metal-corrosion-h",
            "name": "金属的腐蚀与防护（高中）",
            "points": [
              "认识有化合价变化的反应是氧化还原反应，了解氧化还原反应的本质是电子的转移，知道常见的氧化剂和还原剂。",
              "能多角度、动态地分析化学变化，运用化学反应原理解决简单的实际问题。",
              "紧密联系生产和生活实际，创设丰富多样的真实问题情境。"
            ],
            "domain": "电化学",
            "prerequisites": [
              "chem-h-electrolysis"
            ],
            "courses": [
              "chem-h-metal-corrosion-h"
            ]
          },
          {
            "id": "chem-h-corrosion-protection",
            "name": "防腐原理与应用",
            "points": [
              "认识有化合价变化的反应是氧化还原反应，了解氧化还原反应的本质是电子的转移，知道常见的氧化剂和还原剂。",
              "能多角度、动态地分析化学变化，运用化学反应原理解决简单的实际问题。",
              "紧密联系生产和生活实际，创设丰富多样的真实问题情境。"
            ],
            "domain": "电化学",
            "prerequisites": [
              "chem-h-metal-corrosion-h"
            ],
            "courses": [
              "chem-h-corrosion-protection"
            ]
          },
          {
            "id": "chem-h-organic-intro",
            "name": "有机化合物入门",
            "points": [
              "在选择性必修课程中，依据化学学科的基础性研究领域，设置“化学反应原理”“物质结构与性质”“有机化学基础”3个模块。",
              "选择性必修课程包括3个模块，每个模块2学分，共6学分。"
            ],
            "domain": "有机化学基础",
            "prerequisites": [
              "chem-h-chemical-bond"
            ],
            "courses": [
              "chem-h-organic-intro"
            ]
          },
          {
            "id": "chem-h-hydrocarbon",
            "name": "烃（烷/烯/炔/芳）",
            "points": [
              "【内容要求】2.1 烃的性质与应用 认识烷烃、烯烃、炔烃和芳香烃的组成和结构特点，比较这些有 机化合物的组成、结构和性质的差异。了解烃类在日常生活、有机合 成和化工生产中的重要作用。"
            ],
            "domain": "有机化学基础",
            "prerequisites": [
              "chem-h-organic-intro"
            ],
            "courses": [
              "chem-h-hydrocarbon"
            ]
          },
          {
            "id": "chem-h-hydrocarbons",
            "name": "烃类综合",
            "points": [
              "【内容要求】2.1 烃的性质与应用 认识烷烃、烯烃、炔烃和芳香烃的组成和结构特点，比较这些有 机化合物的组成、结构和性质的差异。了解烃类在日常生活、有机合 成和化工生产中的重要作用。 2.2 烃的衍生…"
            ],
            "domain": "有机化学基础",
            "prerequisites": [
              "chem-h-hydrocarbon"
            ],
            "courses": [
              "chem-h-hydrocarbons"
            ]
          },
          {
            "id": "chem-h-functional-groups",
            "name": "官能团（醇/酚/醛/酸/酯）",
            "points": [
              "2.2 烃的衍生物的性质与应用 认识卤代烃、醇、醛、羧酸、酯、酚的组成和结构特点、性质、 转化关系及其在生产、生活中的重要应用，知道醚、酮、胺和酰胺的 结构特点及其应用。"
            ],
            "domain": "有机化学基础",
            "prerequisites": [
              "chem-h-hydrocarbons"
            ],
            "courses": [
              "chem-h-functional-groups"
            ]
          },
          {
            "id": "chem-h-organic-derivatives",
            "name": "烃的衍生物",
            "points": [
              "在选择性必修课程中，依据化学学科的基础性研究领域，设置“化学反应原理”“物质结构与性质”“有机化学基础”3个模块。",
              "选择性必修课程设置3个模块。"
            ],
            "domain": "有机化学基础",
            "prerequisites": [
              "chem-h-functional-groups"
            ],
            "courses": [
              "chem-h-organic-derivatives"
            ]
          },
          {
            "id": "chem-h-organic-reactions",
            "name": "有机反应类型",
            "points": [
              "2.3 有机反应类型与有机合成 认识加成、取代、消去反应及氧化还原反应的特点和规律，了解 有机反应类型和有机化合物组成结构特点的关系。认识有机合成的关 键是碳骨架的构建和官能团的转化，了解设计有机合成…"
            ],
            "domain": "有机化学基础",
            "semester": "下",
            "prerequisites": [
              "chem-h-organic-derivatives"
            ],
            "courses": [
              "chem-h-organic-reactions"
            ]
          },
          {
            "id": "chem-h-organic-synthesis",
            "name": "有机合成路线设计",
            "points": [
              "在选择性必修课程中，依据化学学科的基础性研究领域，设置“化学反应原理”“物质结构与性质”“有机化学基础”3个模块。",
              "选择性必修课程包括3个模块，每个模块2学分，共6学分。"
            ],
            "domain": "有机化学基础",
            "prerequisites": [
              "chem-h-organic-reactions"
            ],
            "courses": [
              "chem-h-organic-synthesis"
            ]
          },
          {
            "id": "chem-h-biomolecules",
            "name": "生物大分子（糖/蛋白质/核酸）",
            "points": [
              "3.2 生物大分子 认识糖类和蛋白质的组成和性质特点。了解淀粉和纤维素及其与 葡萄糖的关系，了解葡萄糖的结构特点、主要性质与应用。知道糖类 在食品加工和生物质能源开发上的应用。认识氨基酸的组成、结构特…"
            ],
            "domain": "有机化学基础",
            "prerequisites": [
              "chem-h-organic-reactions"
            ],
            "courses": [
              "chem-h-biomolecules"
            ]
          },
          {
            "id": "chem-h-polymers",
            "name": "高分子合成与应用",
            "points": [
              "3.3 合成高分子 认识塑料、合成橡胶、合成纤维的组成和结构特点，了解新型高 分子材料的优异性能及其在高新技术领域中的应用。"
            ],
            "domain": "有机化学基础",
            "prerequisites": [
              "chem-h-organic-reactions"
            ],
            "courses": [
              "chem-h-polymers"
            ]
          }
        ]
      },
      {
        "subject": "biology",
        "name": "高中生物",
        "nodes": [
          {
            "id": "bio-h-internal-environment",
            "name": "内环境与稳态",
            "points": [
              "稳态与调节（2学分）生物与环境（2学分）生物技术与工程（2学分）分子与细胞（2学分）遗传与进化（2学分）必修选择性必修选修（每模块1学分)",
              "选择性必修部分有“稳态与调节”“生物与环境”和“生物技术与工程”三个模块；"
            ],
            "domain": "稳态与调节",
            "semester": "上",
            "courses": [
              "bio-h-internal-environment"
            ]
          },
          {
            "id": "bio-h-nervous-regulation",
            "name": "神经调节",
            "points": [
              "1.3 神经系统能够及时感知机体内、外环境的变化，并作出反应调控 各器官、系统的活动，实现机体稳态",
              "1.3.1 概述神经调节的基本方式是反射（可分为条件反射和非条 件反射），其结构基础是反射弧",
              "1.3.2 阐明神经细胞膜内外在静息状态具有电位差，受到外界刺 激后形成动作电位，并沿神经纤维传导"
            ],
            "domain": "稳态与调节",
            "semester": "上",
            "prerequisites": [
              "bio-h-internal-environment",
              "bio-h-atp"
            ],
            "courses": [
              "bio-h-nervous-regulation"
            ]
          },
          {
            "id": "bio-h-humoral-regulation",
            "name": "体液调节",
            "points": [
              "概念1 动物生命活动的调节包括神经调节、体液调节和免疫调节等方式，它们共同维持机体的稳态",
              "举例说明神经调节与体液调节相互协调，共同维持机体的稳态，如体温调节、水盐平衡调节等",
              "举例说明其他体液成分参与稳态的调节，如二氧化碳对呼吸运动的调节"
            ],
            "domain": "稳态与调节",
            "semester": "上",
            "prerequisites": [
              "bio-h-nervous-regulation"
            ],
            "courses": [
              "bio-h-humoral-regulation"
            ]
          },
          {
            "id": "bio-h-blood-sugar-regulation",
            "name": "血糖调节与糖尿病",
            "points": [
              "血糖调节属于选择性必修课程模块1“稳态与调节”的内容，该模块旨在帮助学生理解生命系统通过调节机制维持稳态。",
              "稳态与调节模块内容包括生物个体水平的稳态与平衡，如血糖调节、体温调节、水盐平衡调节等。"
            ],
            "domain": "稳态与调节",
            "prerequisites": [
              "bio-h-humoral-regulation"
            ],
            "courses": [
              "bio-h-blood-sugar-regulation"
            ]
          },
          {
            "id": "bio-h-immune-regulation",
            "name": "免疫调节",
            "points": [
              "免疫调节是机体维持内环境稳态的重要机制，包括非特异性免疫和特异性免疫。",
              "举例说明免疫细胞、免疫器官和免疫活性物质等是免疫调节的结构与物质基础。",
              "阐明特异性免疫是通过体液免疫和细胞免疫两种方式，针对特定病原体发生的免疫应答。"
            ],
            "domain": "稳态与调节",
            "semester": "上",
            "prerequisites": [
              "bio-h-humoral-regulation"
            ],
            "courses": [
              "bio-h-immune-regulation"
            ]
          },
          {
            "id": "bio-h-nervous-humoral-immune",
            "name": "神经—体液—免疫综合",
            "points": [
              "1.3 神经系统能够及时感知机体内、外环境的变化，并作出反应调控 各器官、系统的活动，实现机体稳态",
              "1.3.1 概述神经调节的基本方式是反射（可分为条件反射和非条 件反射），其结构基础是反射弧",
              "1.3.2 阐明神经细胞膜内外在静息状态具有电位差，受到外界刺 激后形成动作电位，并沿神经纤维传导"
            ],
            "domain": "稳态与调节",
            "prerequisites": [
              "bio-h-blood-sugar-regulation",
              "bio-h-immune-regulation"
            ],
            "courses": [
              "bio-h-nervous-humoral-immune"
            ]
          },
          {
            "id": "bio-h-plant-hormone",
            "name": "植物激素调节",
            "points": [
              "概念4 植物的生命活动受到多种因素的调节，其中植物激素调节发挥重要作用",
              "概述科学家经过不断的探索，发现了植物生长素，并揭示了它在调节植物生长时表现出两重性",
              "举例说明几种主要植物激素的作用，这些激素可通过协同、拮抗等方式共同实现对植物生命活动的调节"
            ],
            "domain": "稳态与调节",
            "prerequisites": [
              "bio-h-nervous-humoral-immune"
            ],
            "courses": [
              "bio-h-plant-hormone"
            ]
          },
          {
            "id": "bio-h-ecosystem",
            "name": "生态系统总论",
            "points": [
              "选择性必修部分有“稳态与调节”“生物与环境”和“生物技术与工程”三个模块",
              "选择性必修课程所选的内容是学生未来职业与专业发展的基础，有助于学生进一步加深对生物学大概念的理解"
            ],
            "domain": "生态学",
            "prerequisites": [
              "bio-h-community"
            ],
            "courses": [
              "bio-h-ecosystem"
            ]
          },
          {
            "id": "bio-h-population",
            "name": "种群及其特征",
            "points": [
              "种群是生物进化的基本单位，在一定空间内，同种生物所有个体形成的集合就是种群。",
              "不同种群在自然条件下基因不能自由交流的现象称为隔离。隔离是物种形成的必要条件。",
              "阐明具有优势性状的个体在种群中所占比例将会增加。"
            ],
            "domain": "生态学",
            "courses": [
              "bio-h-population"
            ]
          },
          {
            "id": "bio-h-community",
            "name": "群落",
            "points": [
              "本模块包括遗传的细胞基础、遗传的分子基础、遗传的基本规律、生物的变异和生物的进化等内容。",
              "通过进化形成物种多样性和适应性，进化的本质是遗传物质的改变。",
              "选取的现代生物进化理论和物种形成等知识，主要是为了阐明生物进化的过程和原因。"
            ],
            "domain": "生态学",
            "semester": "下",
            "prerequisites": [
              "bio-h-population"
            ],
            "courses": [
              "bio-h-community"
            ]
          },
          {
            "id": "bio-h-ecosystem-structure",
            "name": "生态系统结构",
            "points": [
              "构、生理特征和分布特点 2.2 生物群落与非生物的环境因素相互作用形成多样化的生态系统， 完成物质循环、能量流动和信息传递",
              "2.2.1 阐明生态系统由生产者、消费者和分解者等生物因素以及 阳光、空气、水等非生物因素组成，各组分紧密联系使生 态系统成为具有一定结构和功能的统一体",
              "2.2.2 讨论某一生态系统中生产者和消费者通过食物链和食物网 联系在一起形成复杂的营养结构"
            ],
            "domain": "生态学",
            "prerequisites": [
              "bio-h-community"
            ],
            "courses": [
              "bio-h-ecosystem-structure"
            ]
          },
          {
            "id": "bio-h-energy-flow",
            "name": "生态系统能量流动",
            "points": [
              "2.2.3 分析生态系统中的物质在生物群落与无机环境之间不断循 环、能量在生物群落中单向流动并逐级递减的规律",
              "2.2.4 举例说明利用物质循环和能量流动规律，人们能够更加科 学、有效地利用生态系统中的资源 ---"
            ],
            "domain": "生态学",
            "prerequisites": [
              "bio-h-ecosystem-structure"
            ],
            "courses": [
              "bio-h-energy-flow"
            ]
          },
          {
            "id": "bio-h-material-cycle-h",
            "name": "生态系统物质循环",
            "points": [
              "2.2.3 分析生态系统中的物质在生物群落与无机环境之间不断循 环、能量在生物群落中单向流动并逐级递减的规律",
              "2.2.4 举例说明利用物质循环和能量流动规律，人们能够更加科 学、有效地利用生态系统中的资源 ---"
            ],
            "domain": "生态学",
            "prerequisites": [
              "bio-h-ecosystem-structure"
            ],
            "courses": [
              "bio-h-material-cycle-h"
            ]
          },
          {
            "id": "bio-h-information-transmission",
            "name": "生态系统信息传递",
            "points": [
              "2.2.7 举例说出生态系统中物理、化学和行为信息的传递对生命 活动的正常进行、生物种群的繁衍和种间关系的调节起着 重要作用",
              "2.2.8 分析特定生态系统的生物与非生物因素决定其营养结构"
            ],
            "domain": "生态学",
            "prerequisites": [
              "bio-h-material-cycle-h",
              "bio-h-energy-flow"
            ],
            "courses": [
              "bio-h-information-transmission"
            ]
          },
          {
            "id": "bio-h-ecosystem-stability",
            "name": "生态系统稳定性",
            "points": [
              "生态系统的稳定性是指生态系统保持或恢复自身结构和功能相对稳定的能力。",
              "阐明生态系统通过自我调节作用抵御和消除一定限度的外来干扰，保持或恢复相对稳定的状态。",
              "举例说明生态系统的稳定性会受到自然或人为因素的影响，如气候变化、人类活动等。"
            ],
            "domain": "生态学",
            "prerequisites": [
              "bio-h-information-transmission"
            ],
            "courses": [
              "bio-h-ecosystem-stability"
            ]
          },
          {
            "id": "bio-h-biodiversity-h",
            "name": "生物多样性及其保护",
            "points": [
              "生物通过生殖、发育和遗传实现生命的延续和种族的繁衍，通过进化形成物种多样性和适应性。",
              "本模块的内容，对于学生理解生命的延续和发展，认识生物界及生物多样性，形成生物进化的观点，树立正确的自然观有重要意义。"
            ],
            "domain": "生态学",
            "prerequisites": [
              "bio-h-ecosystem-stability"
            ],
            "courses": [
              "bio-h-biodiversity-h"
            ]
          }
        ]
      },
      {
        "subject": "geography",
        "name": "高中地理",
        "nodes": [
          {
            "id": "geo-h-population-growth",
            "name": "人口增长与分布",
            "points": [
              "运用资料，描述人口分布、迁移的特点及其影响因素，并结合实例，解释区域资源环境承载力、人口合理容量。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据（综合思维、区域认知）。",
              "以基本社会经济活动的空间特点为线索组织教学内容。采用案例学习的方法，具体分析体现人类活动与自然环境关系的典型实例。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "courses": [
              "geo-h-population-growth"
            ]
          },
          {
            "id": "geo-h-population-migration",
            "name": "人口迁移",
            "points": [
              "运用资料，描述人口分布、迁移的特点及其影响因素，并结合实例，解释区域资源环境承载力、人口合理容量。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据（综合思维、区域认知）。",
              "以基本社会经济活动的空间特点为线索组织教学内容。采用案例学习的方法，具体分析体现人类活动与自然环境关系的典型实例。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-population-growth"
            ],
            "courses": [
              "geo-h-population-migration"
            ]
          },
          {
            "id": "geo-h-population-urbanization",
            "name": "人口与城市化综合",
            "points": [
              "运用资料，说明不同地区城镇化的过程和特点，以及城镇化的利弊。",
              "结合实例，解释城镇和乡村内部的空间结构，说明合理利用城乡空间的意义。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-population-migration"
            ],
            "courses": [
              "geo-h-population-urbanization"
            ]
          },
          {
            "id": "geo-h-urbanization",
            "name": "城市化",
            "points": [
              "运用资料，说明不同地区城镇化的过程和特点，以及城镇化的利弊。",
              "以某大都市为例，从区域空间组织的视角出发，说明大都市辐射功能。",
              "结合实例，解释城镇和乡村内部的空间结构，说明合理利用城乡空间的意义。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-population-migration"
            ],
            "courses": [
              "geo-h-urbanization"
            ]
          },
          {
            "id": "geo-h-urban-structure",
            "name": "城市空间结构",
            "points": [
              "结合实例，解释城镇和乡村内部的空间结构，说明合理利用城乡空间的意义。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据。",
              "以基本社会经济活动的空间特点为线索组织教学内容。采用案例学习的方法，具体分析体现人类活动与自然环境关系的典型实例。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-urbanization"
            ],
            "courses": [
              "geo-h-urban-structure"
            ]
          },
          {
            "id": "geo-h-urban-problems",
            "name": "城市化问题与城市规划",
            "points": [
              "运用资料，说明不同地区城镇化的过程和特点，以及城镇化的利弊。",
              "结合实例，解释城镇和乡村内部的空间结构，说明合理利用城乡空间的意义。",
              "以某大都市为例，从区域空间组织的视角出发，说明大都市辐射功能。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-urbanization"
            ],
            "courses": [
              "geo-h-urban-problems"
            ]
          },
          {
            "id": "geo-h-agriculture",
            "name": "农业",
            "points": [
              "结合实例，说明工业、农业和服务业的区位因素。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据（综合思维、区域认知）。",
              "以基本社会经济活动的空间特点为线索组织教学内容。采用案例学习的方法，具体分析体现人类活动与自然环境关系的典型实例。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "semester": "下",
            "prerequisites": [
              "geo-h-urbanization"
            ],
            "courses": [
              "geo-h-agriculture"
            ]
          },
          {
            "id": "geo-h-agriculture-location",
            "name": "农业区位因素",
            "points": [
              "结合实例，说明工业、农业和服务业的区位因素。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据（综合思维、区域认知）。",
              "采用案例学习的方法，具体分析体现人类活动与自然环境关系的典型实例，帮助学生理解...掌握分析人文地理问题的思路和方法。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-climate-types",
              "geo-h-natural-zones"
            ],
            "courses": [
              "geo-h-agriculture-location"
            ]
          },
          {
            "id": "geo-h-agriculture-types",
            "name": "主要农业地域类型",
            "points": [
              "结合实例，说明工业、农业和服务业的区位因素。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据（综合思维、区域认知）。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-agriculture-location"
            ],
            "courses": [
              "geo-h-agriculture-types"
            ]
          },
          {
            "id": "geo-h-industry-services",
            "name": "工业与服务业",
            "points": [
              "结合实例，说明工业、农业和服务业的区位因素。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据。",
              "以基本社会经济活动的空间特点为线索组织教学内容。采用案例学习的方法，具体分析体现人类活动与自然环境关系的典型实例。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "semester": "下",
            "prerequisites": [
              "geo-h-urbanization"
            ],
            "courses": [
              "geo-h-industry-services"
            ]
          },
          {
            "id": "geo-h-industry-location",
            "name": "工业区位",
            "points": [
              "结合实例，说明工业、农业和服务业的区位因素。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据。",
              "以基本社会经济活动的空间特点为线索组织教学内容。采用案例学习的方法，具体分析体现人类活动与自然环境关系的典型实例。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-industry-services"
            ],
            "courses": [
              "geo-h-industry-location"
            ]
          },
          {
            "id": "geo-h-industry-cluster",
            "name": "工业地域与工业集聚",
            "points": [
              "结合实例，说明工业、农业和服务业的区位因素。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据。",
              "以基本社会经济活动的空间特点为线索组织教学内容。采用案例学习的方法，具体分析体现人类活动与自然环境关系的典型实例。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-industry-location"
            ],
            "courses": [
              "geo-h-industry-cluster"
            ]
          },
          {
            "id": "geo-h-service-location",
            "name": "服务业区位",
            "points": [
              "结合实例，说明工业、农业和服务业的区位因素。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据（综合思维、区域认知）。",
              "以基本社会经济活动的空间特点为线索组织教学内容。采用案例学习的方法，具体分析体现人类活动与自然环境关系的典型实例。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-urbanization"
            ],
            "courses": [
              "geo-h-service-location"
            ]
          },
          {
            "id": "geo-h-transportation",
            "name": "交通运输布局",
            "points": [
              "结合实例，说明工业、农业和服务业的区位因素。",
              "结合实例，说明运输方式和交通布局与区域发展的关系。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-urbanization",
              "geo-h-industry-location"
            ],
            "courses": [
              "geo-h-transportation"
            ]
          },
          {
            "id": "geo-h-transportation-communication",
            "name": "交通与区域发展",
            "points": [
              "结合实例，说明工业、农业和服务业的区位因素。",
              "结合实例，说明运输方式和交通布局与区域发展的关系。",
              "能够描述人文地理事物的空间现象及其变化，解释不同地方的人们对产业活动进行区位选择的依据。"
            ],
            "domain": "人文地理（人口·城市·产业·交通）",
            "prerequisites": [
              "geo-h-transportation"
            ],
            "courses": [
              "geo-h-transportation-communication"
            ]
          },
          {
            "id": "geo-h-resource-energy",
            "name": "自然资源与能源",
            "points": [
              "结合实例，说明自然资源的数量、质量、空间分布与人类活动的关系。",
              "以某种战略性矿产资源为例，分析其分布特点及开发利用现状。",
              "运用图表，解释中国耕地资源的分布，说明其开发利用现状，以及耕地保护与粮食安全的关系。"
            ],
            "domain": "资源、环境与可持续发展",
            "prerequisites": [
              "geo-h-industry-services"
            ],
            "courses": [
              "geo-h-resource-energy"
            ]
          },
          {
            "id": "geo-h-environmental-issues",
            "name": "环境问题",
            "points": [
              "运用资料，归纳人类面临的主要环境问题，说明协调人地关系和可持续发展的主要途径及其缘由。",
              "结合实例，说明设立自然保护区对生态安全的意义。",
              "结合实例，说明污染物跨境转移对环境安全的影响。"
            ],
            "domain": "资源、环境与可持续发展",
            "prerequisites": [
              "geo-h-climate-change",
              "geo-h-resource-energy"
            ],
            "courses": [
              "geo-h-environmental-issues"
            ]
          },
          {
            "id": "geo-h-sustainable-development",
            "name": "可持续发展理念与实践",
            "points": [
              "运用资料，归纳人类面临的主要环境问题，说明协调人地关系和可持续发展的主要途径及其缘由。",
              "能够形成判断人类活动与资源环境问题关系的初步意识（人地协调观）。",
              "帮助学生理解党和国家提出的新的发展理念，掌握分析人文地理问题的思路和方法。"
            ],
            "domain": "资源、环境与可持续发展",
            "prerequisites": [
              "geo-h-environmental-issues"
            ],
            "courses": [
              "geo-h-sustainable-development"
            ]
          }
        ]
      },
      {
        "subject": "history",
        "name": "高中历史",
        "nodes": [
          {
            "id": "hist-h-prc-establishment",
            "name": "中华人民共和国成立",
            "points": [
              "认识中华人民共和国成立的伟大意义；概述新中国巩固人民政权的主要举措；认识新中国为民主政治建设和向社会主义过渡所作出的努力。",
              "了解20世纪50—70年代中国探索社会主义建设道路的曲折发展和伟大成就，认识“文化大革命”的错误及教训；理解政治、经济、外交、国防等领域所取得的成就在新中国历史上所具有的开创性、奠基性意义。"
            ],
            "domain": "中国近现代史",
            "prerequisites": [
              "hist-h-new-democracy"
            ],
            "courses": [
              "hist-h-prc-establishment"
            ]
          },
          {
            "id": "hist-h-reform-opening",
            "name": "改革开放",
            "points": [
              "认识真理标准问题讨论和党的十一届三中全会的历史意义；认识改革开放以来中国在各个领域取得的成就、综合国力及国际影响力的不断提高。",
              "认识邓小平理论对建设中国特色社会主义的重要指导意义；认识中国特色社会主义进入新时代的重大意义，认清我国发展新的历史方位。"
            ],
            "domain": "中国近现代史",
            "prerequisites": [
              "hist-h-prc-establishment"
            ],
            "courses": [
              "hist-h-reform-opening"
            ]
          },
          {
            "id": "hist-h-ancient-civ-h",
            "name": "古代亚非欧文明",
            "points": [
              "本课程以马克思主义为指导，通过对中外重大历史事件、历史人物和历史现象的叙述，展现人类发展进程中丰富的历史文化遗产，以及人类社会从古至今、从分散到整体、社会形态从低级到高级的发展历程。",
              "通过学习，学生应了解和掌握唯物史观的基本观点，体会唯物史观的科学性，理解不同时空条件下历史的延续、变迁与发展，学习史料实证的基本方法，能够在此基础上对历史作出正确的解释。",
              "深化对中华民族多元一体发展趋势的认识，认同社会主义核心价值观和中华优秀传统文化，了解世界历史发展的多样性，理解和尊重世界各国各地区的文化传统，拓宽国际视野，形成开放的世界意识。"
            ],
            "domain": "世界古代中世纪史",
            "courses": [
              "hist-h-ancient-civ-h"
            ]
          },
          {
            "id": "hist-h-classical-civ",
            "name": "古典文明（希腊/罗马）",
            "points": [
              "了解古希腊的城邦制度与雅典民主政治的特点。",
              "了解古罗马的法律制度及其对后世的影响。",
              "认识古希腊罗马文明在世界历史发展中的重要地位。"
            ],
            "domain": "世界古代中世纪史",
            "prerequisites": [
              "hist-h-ancient-civ-h"
            ],
            "courses": [
              "hist-classical-civilization"
            ]
          },
          {
            "id": "hist-h-medieval-h",
            "name": "中古时期（欧洲/亚洲/非洲美洲）",
            "points": [
              "本课程以通史的叙事框架，展示中国历史和世界历史发展的基本过程。",
              "马克思主义根据人类社会生产力与生产关系基本矛盾的不同性质，把人类历史发展分为原始社会、奴隶社会、封建社会、资本主义社会和共产主义社会几种社会形态。",
              "展现人类发展进程中丰富的历史文化遗产，以及人类社会从古至今、从分散到整体、社会形态从低级到高级的发展历程。"
            ],
            "domain": "世界古代中世纪史",
            "prerequisites": [
              "hist-h-classical-civ"
            ],
            "courses": [
              "hist-h-medieval-h"
            ]
          },
          {
            "id": "hist-h-age-of-exploration",
            "name": "新航路开辟与殖民扩张",
            "points": [
              "本课程以马克思主义为指导，通过对中外重大历史事件、历史人物和历史现象的叙述，展现人类发展进程中丰富的历史文化遗产，以及人类社会从古至今、从分散到整体、社会形态从低级到高级的发展历程。",
              "了解世界历史发展的多样性，理解和尊重世界各国各地区的文化传统，拓宽国际视野，形成开放的世界意识。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-h-medieval-h"
            ],
            "courses": [
              "hist-h-age-of-exploration"
            ]
          },
          {
            "id": "hist-h-enlightenment",
            "name": "文艺复兴、宗教改革与启蒙运动",
            "points": [
              "本课程以马克思主义为指导，通过对中外重大历史事件、历史人物和历史现象的叙述，展现人类发展进程中丰富的历史文化遗产，以及人类社会从古至今、从分散到整体、社会形态从低级到高级的发展历程。",
              "马克思主义根据人类社会生产力与生产关系基本矛盾的不同性质，把人类历史发展分为原始社会、奴隶社会、封建社会、资本主义社会和共产主义社会几种社会形态。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-h-age-of-exploration"
            ],
            "courses": [
              "hist-h-enlightenment"
            ]
          },
          {
            "id": "hist-h-bourgeois-revolution",
            "name": "资产阶级革命与资本主义制度确立",
            "points": [
              "了解英国资产阶级革命、美国独立战争和法国大革命的历史背景与过程，理解资产阶级革命的共同特征与差异。",
              "认识资本主义制度确立的历史意义，理解君主立宪制与民主共和制的基本特征。",
              "了解资本主义制度在世界范围内的扩展，认识其对人类社会发展的深远影响。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-h-enlightenment"
            ],
            "courses": [
              "hist-h-bourgeois-revolution"
            ]
          },
          {
            "id": "hist-h-industrial-rev-h",
            "name": "工业革命",
            "points": [
              "本课程以通史的叙事框架，展示中国历史和世界历史发展的基本过程。本课程共有24个专题，是高中历史学习的基本内容。",
              "通过对中外重大历史事件、历史人物和历史现象的叙述，展现人类发展进程中丰富的历史文化遗产，以及人类社会从古至今、从分散到整体、社会形态从低级到高级的发展历程。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-h-bourgeois-revolution"
            ],
            "courses": [
              "hist-h-industrial-rev-h"
            ]
          },
          {
            "id": "hist-h-marxism-russian",
            "name": "马克思主义与俄国革命",
            "points": [
              "马克思主义根据人类社会生产力与生产关系基本矛盾的不同性质，把人类历史发展分为原始社会、奴隶社会、封建社会、资本主义社会和共产主义社会几种社会形态。",
              "认识五四爱国运动的历史意义，认识马克思主义在中国的传播与中国共产党成立对中国革命的深远影响。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-h-industrial-rev-h"
            ],
            "courses": [
              "hist-h-marxism-russian"
            ]
          },
          {
            "id": "hist-h-colonialism-liberation",
            "name": "世界殖民体系与亚非拉民族独立运动",
            "points": [
              "了解西方列强对亚非拉地区的殖民扩张，认识世界殖民体系的形成过程及其对殖民地半殖民地社会的影响。",
              "了解拉丁美洲独立运动、亚洲觉醒和非洲抗争的基本史实，认识亚非拉民族独立运动的历史意义。",
              "认识殖民体系的形成与瓦解是世界历史发展的重要线索之一。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-h-marxism-russian"
            ],
            "courses": [
              "hist-h-colonialism-liberation"
            ]
          },
          {
            "id": "hist-h-political-system-evolution",
            "name": "中外政治制度演变",
            "points": [
              "历史选择性必修课程是学生根据个人兴趣、升学需求而选择修习的课程，设《国家制度与社会治理》《经济与社会生活》和《文化交流与传播》三个模块。",
              "选择性必修课程采取专题史方式，旨在让学生从多角度进一步了解人类历史的发展。",
              "《国家制度与社会治理》模块由若干学习专题构成，在各专题下的具体内容依照时序进行表述，呈现中外历史多方面的重要内容，引领学生从政治、经济与社会生活、文化等不同视角深入认识历史。"
            ],
            "domain": "专题史（选择性必修）",
            "prerequisites": [
              "hist-h-song-yuan-ming-qing-h"
            ],
            "courses": [
              "hist-h-political-system-evolution"
            ]
          },
          {
            "id": "hist-h-economic-history",
            "name": "经济史与社会生活",
            "points": [
              "历史选择性必修课程是学生根据个人兴趣、升学需求而选择修习的课程，设《国家制度与社会治理》《经济与社会生活》和《文化交流与传播》三个模块。",
              "选择性必修课程和选修课程采取专题史方式，旨在让学生从多角度进一步了解人类历史的发展。",
              "《经济与社会生活》模块由若干学习专题构成，在各专题下的具体内容依照时序进行表述，呈现中外历史多方面的重要内容，引领学生从经济与社会生活视角深入认识历史。"
            ],
            "domain": "专题史（选择性必修）",
            "prerequisites": [
              "hist-h-industrial-rev-h"
            ],
            "courses": [
              "hist-h-economic-history"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "高中思想政治",
        "nodes": [
          {
            "id": "pol-h-req3",
            "name": "政治与法治",
            "points": [
              "【课标】理解中国共产党领导是中国特色社会主义最本质的特征。",
              "【课标】理解人民当家作主是社会主义民主政治的本质和核心。",
              "【课标】理解全面依法治国是国家治理的一场深刻革命，建设法治中国。"
            ],
            "domain": "政治与法治",
            "prerequisites": [
              "pol-h-req2"
            ]
          },
          {
            "id": "pol-h-req4",
            "name": "哲学与文化",
            "points": [
              "【课标】掌握马克思主义哲学基本原理，坚持唯物辩证法，反对形而上学。",
              "【课标】理解社会历史发展规律，坚持历史唯物主义，实现人生价值。",
              "【课标】传承发展中华优秀传统文化，坚定文化自信，发展中国特色社会主义文化。"
            ],
            "domain": "哲学与文化",
            "prerequisites": [
              "pol-h-req3"
            ]
          },
          {
            "id": "pol-h-opt1",
            "name": "当代国际政治与经济",
            "points": [
              "【课标】了解国体政体与国家结构形式，理解世界多极化趋势。",
              "【课标】理解经济全球化与中国对外开放，了解主要国际组织与中国参与全球治理。",
              "【教材·当代国际政治与经济】各具特色的国家（国体与政体；国家的结构形式） | 世界多极化（多极化趋势；国际关系） | 经济全球化（走进经济全球化；经济全球化与中国） | 国际组织（主要的国际组织；中国…"
            ],
            "domain": "当代国际政治与经济",
            "prerequisites": [
              "pol-h-req4"
            ]
          }
        ]
      },
      {
        "subject": "info-tech",
        "name": "高中信息技术",
        "nodes": [
          {
            "id": "it-h-recursion",
            "name": "递归与分治",
            "points": [
              "从生活实例出发，概述算法的概念与特征，运用恰当的描述方法和控制结构表示简单算法。",
              "掌握一种程序设计语言的基本知识，使用程序设计语言实现简单算法。",
              "依据解决问题的需要，设计和表示简单算法；掌握一种程序设计语言的基本知识，利用程序设计语言实现简单算法，解决实际问题。"
            ],
            "domain": "算法",
            "prerequisites": [
              "it-h-algorithm-concept",
              "it-h-sorting-searching"
            ],
            "courses": [
              "it-h-recursion"
            ]
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "高中心理健康教育",
        "nodes": [
          {
            "id": "psych-h-g11-peer-support",
            "name": "同伴支持与合作学习",
            "points": [
              "培养人际沟通能力，在合作学习中建立支持性同伴关系。",
              "促进积极情感反应和体验。"
            ],
            "domain": "人际交往",
            "prerequisites": [
              "psych-h-g11-exam-wellness"
            ]
          },
          {
            "id": "psych-h-g11-emotion-resilience",
            "name": "情绪管理与抗挫力",
            "points": [
              "进一步提高承受失败和应对挫折的能力，形成良好的意志品质。",
              "学会恰当地、正确地体验情绪和表达情绪。"
            ],
            "domain": "情绪调适",
            "prerequisites": [
              "psych-h-g10-relationship"
            ]
          },
          {
            "id": "psych-h-g11-exam-wellness",
            "name": "考试心理与身心健康",
            "points": [
              "积极应对考试压力，克服考试焦虑，保持身心健康。",
              "掌握科学减压与情绪调适方法。"
            ],
            "domain": "抗挫与适应",
            "prerequisites": [
              "psych-h-g11-emotion-resilience"
            ]
          }
        ]
      }
    ],
    "12": [
      {
        "subject": "chinese",
        "name": "高中语文",
        "nodes": [
          {
            "id": "chn-h-classical-comprehensive",
            "name": "文言文综合鉴赏",
            "points": [
              "在阅读过程中，探索阅读整本书的门径，形成和积累自己阅读整本书的经验。重视学习前人的阅读经验，根据不同的阅读目的，综合运用精读、略读与浏览的方法阅读整本书，读懂文本，把握文本丰富的内涵和精髓。",
              "能够辨识、分析、比较、归纳和概括基本的语言现象和文学现象，并能有理有据地表达自己的观点和阐述自己的发现；运用基本的语言规律和逻辑规则，判别语言运用的正误，准确、生动、有逻辑地表达自己的认识；运用批判性…",
              "感受和体验文学作品的语言、形象和情感之美，能欣赏、鉴别和评价不同时代、不同风格的作品，具有正确的价值观、高尚的审美情趣和审美品位。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-h-classical-prose-advanced"
            ],
            "courses": [
              "chn-h-classical-comprehensive"
            ]
          },
          {
            "id": "chn-h-poetry-comparison-h",
            "name": "古诗词比较阅读",
            "points": [
              "鉴赏文学作品。感受和体验文学作品的语言、形象和情感之美，能欣赏、鉴别和评价不同时代、不同风格的作品。",
              "学习任务群的设计着眼于培养语言文字运用基础能力，充分顾及问题导向、跨文化、自主合作、个性化、创造性等因素。",
              "在语文学习中，通过审美体验、评价等活动形成正确的审美意识、健康向上的审美情趣与鉴赏品位。"
            ],
            "domain": "古诗文阅读",
            "prerequisites": [
              "chn-h-poetry-emotion"
            ],
            "courses": [
              "chn-h-poetry-comparison-h"
            ]
          },
          {
            "id": "chn-h-gaokao-essay",
            "name": "高考作文综合训练",
            "points": [
              "学生通过阅读与鉴赏、表达与交流、梳理与探究等语文学习活动，在语言建构与运用、思维发展与提升、审美鉴赏与创造、文化传承与理解几个方面都获得进一步的发展。",
              "能凭借语感和对语言运用规律的把握，根据具体的语言情境和不同的对象，运用口头和书面语言文明得体地进行表达与交流。",
              "运用基本的语言规律和逻辑规则，判别语言运用的正误，准确、生动、有逻辑地表达自己的认识；运用批判性思维审视语言文字作品，探究和发现语言现象和文学现象。"
            ],
            "domain": "写作",
            "prerequisites": [
              "chn-h-task-driven-writing"
            ],
            "courses": [
              "chn-h-gaokao-essay"
            ]
          },
          {
            "id": "chn-h-foreign-classics",
            "name": "外国文学经典",
            "points": [
              "在指定范围内选择阅读一部长篇小说。通读全书，整体把握其思想内容和艺术特点。从最使自己感动的故事、人物、场景、语言等方面入手，反复阅读品味，深入探究，欣赏语言表达的精彩之处，梳理小说的感人场景乃至整体的…",
              "利用书中的目录、序跋、注释等，学习检索作者信息、作品背景、相关评价等资料，深入研读作家作品。",
              "联系个人经验，深入理解作品；享受读书的愉悦，从作品中汲取营养，丰富自己的精神世界，逐步形成正确的世界观、人生观和价值观。用自己的语言撰写全书梗概或提要、读书笔记与作品评介，通过口头、书面形式或其他媒介…"
            ],
            "domain": "整本书阅读",
            "prerequisites": [
              "chn-h-red-chamber"
            ],
            "courses": [
              "chn-h-foreign-classics"
            ]
          }
        ]
      },
      {
        "subject": "math",
        "name": "高中数学",
        "nodes": [
          {
            "id": "math-h-conic-comprehensive",
            "name": "圆锥曲线综合",
            "points": [
              "（３）圆锥曲线与方程 ①了解圆锥曲线的实际背景，感受圆锥曲线在刻画现实世界和 解决实际问题中的作用。 ②经历从具体情境中抽象出椭圆的过程，掌握椭圆的定义、标 准方程及简单几何性质。 ③了解抛物线与双曲…"
            ],
            "domain": "解析几何",
            "prerequisites": [
              "math-h-hyperbola",
              "math-h-parabola-h"
            ],
            "courses": [
              "math-high-conic-comprehensive"
            ]
          },
          {
            "id": "math-h-random-variable",
            "name": "随机变量及其分布",
            "points": [
              "概率与统计是高中数学课程内容的主线之一，贯穿必修、选择性必修和选修课程。",
              "数据分析是研究随机现象的重要数学技术，是大数据时代数学应用的主要方法。"
            ],
            "domain": "概率与统计",
            "prerequisites": [
              "math-h-probability-h"
            ],
            "courses": [
              "math-high-random-variable"
            ]
          },
          {
            "id": "math-h-regression-analysis",
            "name": "统计推断（回归/独立性检验）",
            "points": [
              "数据分析是指针对研究对象获取数据，运用数学方法对数据进行整理、分析和推断，形成关于研究对象知识的素养。",
              "数据分析过程主要包括：收集数据，整理数据，提取信息，构建模型，进行推断，获得结论。",
              "概率与统计是高中数学课程内容四条主线之一，贯穿必修、选择性必修和选修课程。"
            ],
            "domain": "概率与统计",
            "prerequisites": [
              "math-h-random-variable"
            ],
            "courses": [
              "math-high-regression-analysis"
            ]
          },
          {
            "id": "math-h-derivative-concept",
            "name": "导数概念与运算",
            "points": [
              "A类课程包括微积分、空间向量与代数、概率与统计三个专题，其中微积分2.5学分。供有志于学习数理类（如数学、物理、计算机、精密仪器等）专业的学生选择。",
              "B类课程包括微积分、空间向量与代数、应用统计、模型四个专题，其中微积分2学分。供有志于学习经济、社会类（如数理经济、社会学等）和部分理工类（如化学、生物、机械等）专业的学生选择。",
              "E类大学数学先修课程包括三个专题：微积分、解析几何与线性代数、概率论与数理统计，每个专题6学分。"
            ],
            "domain": "导数与微积分初步",
            "prerequisites": [
              "math-h-function-models"
            ],
            "courses": [
              "math-high-derivative-concept"
            ]
          },
          {
            "id": "math-h-derivative-application",
            "name": "导数应用（极值/最值）",
            "points": [
              "掌握基本不等式√ab ≤ (a+b)/2（a,b≥0）。结合具体实例，能用基本不等式解决简单的最大值或最小值问题。",
              "会结合一元二次函数的图象，判断一元二次方程实根的存在性及实根的个数，了解函数的零点与方程根的关系。"
            ],
            "domain": "导数与微积分初步",
            "prerequisites": [
              "math-h-derivative-concept"
            ],
            "courses": [
              "math-high-derivative-application"
            ]
          }
        ]
      },
      {
        "subject": "english",
        "name": "高中英语",
        "nodes": [
          {
            "id": "eng-h-context-vocab",
            "name": "语境词义推断",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。",
              "学生围绕某一具体的主题语境，基于不同类型的语篇，在解决问题的过程中，运用语言技能获取、梳理、整合语言知识和文化知识，深化对语言的理解。"
            ],
            "domain": "词汇",
            "prerequisites": [
              "eng-h-vocab-3500"
            ],
            "courses": [
              "eng-h-context-vocab"
            ]
          },
          {
            "id": "eng-h-special-sentences",
            "name": "特殊句式（倒装/强调/省略）",
            "points": [
              "语言知识涵盖语音知识、词汇知识、语法知识、语篇知识和语用知识，是构成语言能力的重要基础。",
              "语法知识是‘形式—意义—使用’的统一体，与语音、词汇、语篇和语用知识紧密相连，直接影响语言理解和表达的准确性和得体性。"
            ],
            "domain": "语法",
            "prerequisites": [
              "eng-h-non-finite-h",
              "eng-h-attributive-clauses-h"
            ],
            "courses": [
              "eng-h-special-sentences"
            ]
          },
          {
            "id": "eng-h-reading-comprehension-advanced",
            "name": "高阶阅读综合",
            "points": [
              "学生通过学习理解、应用实践、迁移创新等一系列融语言、文化、思维为一体的活动，获取、阐释和评判语篇意义。",
              "思维品质指思维在逻辑性、批判性、创新性等方面所表现的能力和水平。思维品质的发展有助于提升学生分析和解决问题的能力。",
              "能辨析语言和文化中的具体现象，梳理、概括信息，建构新概念，分析、推断信息的逻辑关系，正确评判各种思想观点，创造性地表达自己的观点。"
            ],
            "domain": "阅读理解",
            "prerequisites": [
              "eng-h-reading-7-choose-5",
              "eng-h-advanced-grammar"
            ],
            "courses": [
              "eng-h-reading-comprehension-advanced"
            ]
          },
          {
            "id": "eng-h-summary-writing",
            "name": "概要写作",
            "points": [
              "语言技能分理解性技能和表达性技能，具体包括听、说、读、看（viewing）、写等，学生基于语篇所开展的学习活动即是基于这些语言技能，理解语篇和对语篇作出回应的活动。",
              "学生围绕某一具体的主题语境，基于不同类型的语篇，在解决问题的过程中，运用语言技能获取、梳理、整合语言知识和文化知识，深化对语言的理解，重视对语篇的赏析，比较和探究文化内涵，汲取文化精华；同时，尝试运用…",
              "语言能力指在社会情境中，以听、说、读、看、写等方式理解和表达意义的能力，以及在学习和使用语言的过程中形成的语言意识和语感。"
            ],
            "domain": "写作",
            "prerequisites": [
              "eng-h-continuation-writing",
              "eng-h-reading-purpose"
            ],
            "courses": [
              "eng-h-summary-writing"
            ]
          }
        ]
      },
      {
        "subject": "physics",
        "name": "高中物理",
        "nodes": [
          {
            "id": "phy-h-magnetic-field",
            "name": "磁场",
            "points": [
              "2.1.1 通过实验，认识安培力。能判断安培力的方向，会计算安 培力的大小。了解安培力在生产生活中的应用。 例1 利用电流天平等简易装置测量安培力。 例2 了解磁电式电表的结构和工作原理。",
              "2.1.2 通过实验，认识洛伦兹力。能判断洛伦兹力的方向，会计 算洛伦兹力的大小。"
            ],
            "domain": "电磁场与电磁感应",
            "prerequisites": [
              "phy-h-dc-circuits"
            ],
            "courses": [
              "phy-h-magnetic-field"
            ]
          },
          {
            "id": "phy-h-magnetic-field-h",
            "name": "磁场综合（安培力/磁通量）",
            "points": [
              "2.1.1 通过实验，认识安培力。能判断安培力的方向，会计算安 培力的大小。了解安培力在生产生活中的应用。 例1 利用电流天平等简易装置测量安培力。 例2 了解磁电式电表的结构和工作原理。",
              "2.1.2 通过实验，认识洛伦兹力。能判断洛伦兹力的方向，会计 算洛伦兹力的大小。"
            ],
            "domain": "电磁场与电磁感应",
            "prerequisites": [
              "phy-h-magnetic-field"
            ],
            "courses": [
              "phy-h-magnetic-field-h"
            ]
          },
          {
            "id": "phy-h-lorentz-force",
            "name": "洛伦兹力与带电粒子运动",
            "points": [
              "2.1.2 通过实验，认识洛伦兹力。能判断洛伦兹力的方向，会计 算洛伦兹力的大小。",
              "2.1.3 能用洛伦兹力分析带电粒子在匀强磁场中的圆周运动。了 解带电粒子在匀强磁场中的偏转及其应用。 例3 观察阴极射线在磁场中的偏转。 例4 了解质谱仪和回旋加速器的工作原理。 活动建议 （1）用…"
            ],
            "domain": "电磁场与电磁感应",
            "prerequisites": [
              "phy-h-magnetic-field-h"
            ],
            "courses": [
              "phy-h-lorentz-force"
            ]
          },
          {
            "id": "phy-h-em-induction",
            "name": "电磁感应",
            "points": [
              "2.2 电磁感应及其应用【内容要求】",
              "2.2.1 探究影响感应电流方向的因素，理解楞次定律。 例1 用能量的观点解释楞次定律。",
              "2.2.2 通过实验，理解法拉第电磁感应定律。"
            ],
            "domain": "电磁场与电磁感应",
            "prerequisites": [
              "phy-h-magnetic-field-h"
            ],
            "courses": [
              "phy-h-em-induction"
            ]
          },
          {
            "id": "phy-h-alternating-current",
            "name": "交变电流",
            "points": [
              "2.2.4 通过实验，认识交变电流。能用公式和图像描述正弦交变 电流。 例3 用示波器或其他设备观察交变电流的波形，并测算其峰值 和有效值。",
              "2.2.5 通过实验，探究并了解变压器原、副线圈电压与匝数的关 系。知道远距离输电时通常采用高压输电的原因。 例4 观察常见的变压器，了解其作用。 例5 探讨远距离输电中导致电能损耗的因素。",
              "2.2.6 了解发电机和电动机工作过程中的能量转化。认识电磁学 在人类生活和社会发展中的作用。 活动建议 （1）查阅资料，与同学讨论动车组进站过程中是如何进行能量转 化的。 （2）查阅资料，撰写报告分…"
            ],
            "domain": "电磁场与电磁感应",
            "semester": "下",
            "prerequisites": [
              "phy-h-em-induction"
            ],
            "courses": [
              "phy-h-alternating-current"
            ]
          },
          {
            "id": "phy-h-electromagnetic-waves",
            "name": "电磁波",
            "points": [
              "2.3 电磁振荡与电磁波【内容要求】",
              "2.3.1 初步了解麦克斯韦电磁场理论的基本思想，初步了解场的 统一性与多样性，体会物理学对统一性的追求。 例1 结合牛顿万有引力定律和麦克斯韦电磁场理论，体会物理 学发展过程中对统一性的追求。",
              "2.3.2 通过实验，了解电磁振荡。"
            ],
            "domain": "电磁场与电磁感应",
            "prerequisites": [
              "phy-h-alternating-current"
            ],
            "courses": [
              "phy-h-electromagnetic-waves"
            ]
          },
          {
            "id": "phy-h-mechanical-vibration-wave",
            "name": "机械振动与机械波",
            "points": [
              "1.2 机械振动与机械波【内容要求】",
              "1.2.1 通过实验，认识简谐运动的特征。能用公式和图像描述简 谐运动。",
              "1.2.2 通过实验，探究单摆的周期与摆长的定量关系。知道单摆 周期与摆长、重力加速度的关系。会用单摆测量重力加速度的大小。"
            ],
            "domain": "机械振动与波、光学",
            "semester": "下",
            "prerequisites": [
              "phy-h-energy-conservation-mech"
            ],
            "courses": [
              "phy-h-mechanical-vibration-wave"
            ]
          },
          {
            "id": "phy-h-wave-optics",
            "name": "光的波动性（干涉/衍射）",
            "points": [
              "1.3 光及其应用【内容要求】1.3.1 通过实验，理解光的折射定律。会测量材料的折射率。1.3.2 知道光的全反射现象及其产生的条件。初步了解光纤的工作原理。1.3.3 观察光的干涉、衍射和偏振现象…",
              "活动建议 （1）观察双缝干涉现象，测量光的波长。 （2）调查光的干涉、衍射和偏振现象在生活和生产中的应用。"
            ],
            "domain": "机械振动与波、光学",
            "prerequisites": [
              "phy-h-mechanical-vibration-wave"
            ],
            "courses": [
              "phy-h-wave-optics"
            ]
          },
          {
            "id": "phy-h-photoelectric-effect",
            "name": "光电效应",
            "points": [
              "3.4.1 通过实验，了解光电效应现象。知道爱因斯坦光电效应方 程及其意义。能根据实验结论说明光的波粒二象性。",
              "3.4.2 知道实物粒子具有波动性，了解微观世界的量子化特征。 体会量子论的建立对人们认识物质世界的影响。 例1 了解电子衍射实验。 例2 通过史实，了解量子概念的建构对人类认识自然的影响。"
            ],
            "domain": "近代物理",
            "prerequisites": [
              "phy-h-electromagnetic-waves"
            ],
            "courses": [
              "phy-h-photoelectric-effect"
            ]
          },
          {
            "id": "phy-h-quantum-intro",
            "name": "量子力学初步",
            "points": [
              "3.4.2 知道实物粒子具有波动性，了解微观世界的量子化特征。 体会量子论的建立对人们认识物质世界的影响。 例1 了解电子衍射实验。 例2 通过史实，了解量子概念的建构对人类认识自然的影响。 活动建议…"
            ],
            "domain": "近代物理",
            "prerequisites": [
              "phy-h-photoelectric-effect"
            ],
            "courses": [
              "phy-h-quantum-intro"
            ]
          },
          {
            "id": "phy-h-atomic-models",
            "name": "原子结构（汤姆孙/卢瑟福/玻尔）",
            "points": [
              "3.3 原子与原子核【内容要求】",
              "3.3.1 了解人类探索原子及其结构的历史。知道原子的核式结构 模型。通过对氢原子光谱的分析，了解原子的能级结构。",
              "3.3.2 了解原子核的组成和核力的性质。知道四种基本相互作用。 能根据质量数守恒和电荷守恒写出核反应方程。"
            ],
            "domain": "近代物理",
            "prerequisites": [
              "phy-h-photoelectric-effect"
            ],
            "courses": [
              "phy-h-atomic-models"
            ]
          },
          {
            "id": "phy-h-atomic-structure-h",
            "name": "原子能级",
            "points": [
              "3.3 原子与原子核【内容要求】",
              "3.3.1 了解人类探索原子及其结构的历史。知道原子的核式结构 模型。通过对氢原子光谱的分析，了解原子的能级结构。",
              "3.3.2 了解原子核的组成和核力的性质。知道四种基本相互作用。 能根据质量数守恒和电荷守恒写出核反应方程。"
            ],
            "domain": "近代物理",
            "prerequisites": [
              "phy-h-atomic-models"
            ],
            "courses": [
              "phy-h-atomic-structure-h"
            ]
          },
          {
            "id": "phy-h-nuclear-physics",
            "name": "原子核物理",
            "points": [
              "3.3.2 了解原子核的组成和核力的性质。知道四种基本相互作用。 能根据质量数守恒和电荷守恒写出核反应方程。",
              "3.3.3 了解放射性和原子核衰变。知道半衰期及其统计意义。了 解放射性同位素的应用，知道射线的危害与防护。",
              "3.3.4 认识原子核的结合能，了解核裂变反应和核聚变反应。关 注核技术应用对人类生活和社会发展的影响。"
            ],
            "domain": "近代物理",
            "prerequisites": [
              "phy-h-atomic-structure-h"
            ],
            "courses": [
              "phy-h-nuclear-physics"
            ]
          },
          {
            "id": "phy-h-nuclear-energy",
            "name": "核能与核反应",
            "points": [
              "3.3.3 了解放射性和原子核衰变。知道半衰期及其统计意义。了 解放射性同位素的应用，知道射线的危害与防护。",
              "3.3.4 认识原子核的结合能，了解核裂变反应和核聚变反应。关 注核技术应用对人类生活和社会发展的影响。",
              "3.3.5 了解人类对物质结构的探索历程。 例 了解直线加速器、同步加速器、粒子探测器在核物理和粒子 物理研究中的作用。 活动建议 查阅资料，了解华人科学家在粒子物理领域中的杰出贡献。"
            ],
            "domain": "近代物理",
            "prerequisites": [
              "phy-h-nuclear-physics"
            ],
            "courses": [
              "phy-h-nuclear-energy"
            ]
          }
        ]
      },
      {
        "subject": "history",
        "name": "高中历史",
        "nodes": [
          {
            "id": "hist-h-two-world-wars",
            "name": "两次世界大战",
            "points": [
              "了解第一次世界大战爆发的背景与帝国主义国家间的矛盾，理解战争对世界格局的深远影响和凡尔赛—华盛顿体系的形成。",
              "了解日本军国主义的侵华罪行；通过了解正面战场和敌后战场的抗战，认识中国战场是世界反法西斯战争的东方主战场，理解十四年抗战胜利在中华民族伟大复兴中的历史意义。",
              "了解雅尔塔体系与战后国际秩序的重建，理解联合国成立等机制对维护战后和平的意义。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-h-colonialism-liberation"
            ],
            "courses": [
              "hist-h-two-world-wars"
            ]
          },
          {
            "id": "hist-h-cold-war-h",
            "name": "冷战格局",
            "points": [
              "通过了解第二次世界大战后国际格局的变化，理解冷战的发生与发展，认识两极格局的特征及其对世界的影响。",
              "了解杜鲁门主义、马歇尔计划、北约与华约的对峙，认识美苏争霸对国际关系的影响。",
              "通过对古巴导弹危机、越南战争、阿富汗战争等热点事件的了解，理解冷战中的局部冲突与世界格局的复杂性。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-h-two-world-wars"
            ],
            "courses": [
              "hist-h-cold-war-h"
            ]
          },
          {
            "id": "hist-h-globalization-h",
            "name": "全球化与多极化",
            "points": [
              "了解世界历史发展的多样性，理解和尊重世界各国、各民族的文化传统，具有广阔的国际视野，树立正确的文化观。",
              "通过中外历史上重要的事件、人物和现象，展现人类社会从古至今、从分散到整体、从低级到高级的发展历程。",
              "拓宽国际视野，形成开放的世界意识。"
            ],
            "domain": "世界近现代史",
            "prerequisites": [
              "hist-h-cold-war-h"
            ],
            "courses": [
              "hist-h-globalization-h"
            ]
          },
          {
            "id": "hist-h-cultural-thought-history",
            "name": "文化史与思想史",
            "points": [
              "通过了解春秋战国时期的经济发展和政治变动，理解战国时期变法运动的必然性；了解老子、孔子学说；通过孟子、荀子、庄子等了解“百家争鸣”的局面及其意义。",
              "通过了解三国两晋南北朝政权更迭的历史脉络，隋唐时期封建社会的高度繁荣，认识三国两晋南北朝至隋唐时期的制度变化与创新、民族交融、区域开发和思想文化领域的新成就。",
              "了解明清时期社会经济、思想文化的重要变化；通过了解明清时期封建专制的发展、世界的变化对中国的影响，认识中国社会面临的危机。"
            ],
            "domain": "专题史（选择性必修）",
            "prerequisites": [
              "hist-h-ancient-culture",
              "hist-h-enlightenment"
            ],
            "courses": [
              "hist-h-cultural-thought-history"
            ]
          },
          {
            "id": "hist-h-science-technology-h",
            "name": "科技史",
            "points": [
              "选择性必修课程采取专题史方式，旨在让学生从多角度进一步了解人类历史的发展。",
              "历史选择性必修课程是学生根据个人兴趣、升学需求而选择修习的课程，设《国家制度与社会治理》《经济与社会生活》和《文化交流与传播》三个模块。",
              "更新教学内容，努力呈现经济、政治、文化、科技、社会、生态等发展的新成就、新成果。"
            ],
            "domain": "专题史（选择性必修）",
            "prerequisites": [
              "hist-h-industrial-rev-h"
            ],
            "courses": [
              "hist-h-four-great-inventions"
            ]
          },
          {
            "id": "hist-h-ideological-liberation",
            "name": "思想解放潮流",
            "points": [
              "概述新文化运动的主要内容，探讨其对近代中国思想解放的影响。",
              "认识五四爱国运动的历史意义，认识马克思主义在中国的传播与中国共产党成立对中国革命的深远影响。",
              "认识真理标准问题讨论和党的十一届三中全会的历史意义。"
            ],
            "domain": "专题史（选择性必修）",
            "prerequisites": [
              "hist-h-enlightenment"
            ],
            "courses": [
              "hist-h-ideological-liberation"
            ]
          },
          {
            "id": "hist-h-reform-comparison",
            "name": "中外改革比较",
            "points": [
              "（二）选择性必修课程模块1 国家制度与社会治理【内容要求】 本课程通过国家制度和社会治理的相关内容，揭示人类政治生活 的发展。本课程由6 个专题组成，是在必修课程基础上的递进与 拓展。 人类社会进入文…"
            ],
            "domain": "专题史（选择性必修）",
            "prerequisites": [
              "hist-h-reform-opening"
            ],
            "courses": [
              "hist-h-reform-comparison"
            ]
          }
        ]
      },
      {
        "subject": "politics",
        "name": "高中思想政治",
        "nodes": [
          {
            "id": "pol-h-opt2",
            "name": "法律与生活",
            "points": [
              "【课标】理解民事权利与义务，积极维护人身权利与各类物权。",
              "【课标】了解婚姻家庭、就业创业相关法律，学会运用法律解决社会争议。",
              "【教材·法律与生活】民事权利与义务（认真对待民事权利与义务；积极维护人身权利；保障各类物权；尊重知识产权） | 家庭与婚姻（珍惜婚姻关系；育小责任大） | 就业与创业（做个明白的劳动者；自主创业 公平…"
            ],
            "domain": "法律与生活",
            "prerequisites": [
              "pol-h-opt1"
            ]
          },
          {
            "id": "pol-h-opt3",
            "name": "逻辑与思维",
            "points": [
              "【课标】树立科学思维观念，把握逻辑要义，领会科学思维。",
              "【课标】遵循逻辑思维规则，运用辩证思维方法，提高创新思维能力。",
              "【教材·逻辑与思维】树立科学思维观念（走进思维世界；把握逻辑要义；领会科学思维） | 遵循逻辑思维规则（准确把握概念；正确运用判断；掌握演绎推理方法；学会归纳与类比推理） | 运用辩证思维方法（把握辩…"
            ],
            "domain": "逻辑与思维",
            "prerequisites": [
              "pol-h-opt2"
            ]
          }
        ]
      },
      {
        "subject": "psychology",
        "name": "高中心理健康教育",
        "nodes": [
          {
            "id": "psych-h-g12-life-transition",
            "name": "人生过渡与社会适应",
            "points": [
              "逐步适应生活和社会的各种变化，为走向社会做好心理准备。",
              "树立远大理想，培养社会责任意识。"
            ],
            "domain": "生活适应",
            "prerequisites": [
              "psych-h-g12-career-choice"
            ]
          },
          {
            "id": "psych-h-g12-career-choice",
            "name": "生涯规划与升学择业",
            "points": [
              "充分了解兴趣、能力、性格、特长和社会需要，确立职业志向，培养职业道德意识。",
              "进行升学就业的选择和准备，培养担当意识和社会责任感。"
            ],
            "domain": "生涯规划",
            "prerequisites": [
              "psych-h-g11-peer-support"
            ]
          },
          {
            "id": "psych-h-g12-mental-literacy",
            "name": "心理素养与终身发展",
            "points": [
              "形成积极心理品质，掌握心理保健常识和技能。",
              "具备自主自助维护心理健康的能力，促进终身发展。"
            ],
            "domain": "抗挫与适应",
            "prerequisites": [
              "psych-h-g12-life-transition"
            ]
          }
        ]
      }
    ]
  }
};
