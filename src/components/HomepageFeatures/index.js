import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'EF-私密的、基于Git的投资策略管理软件',
    Svg: require('@site/static/img/Coins-amico.svg').default,
    description: (
      <>
        基于Git，财经文档就有了版本控制系统，能够记录每一次变更。
        基于Gitea/Forgejo，如果部署在公司内网，就能公司内部访问与创作。
        基于Gitea/Forgejo，如果部署在公网，在您授权下，就能在公网访问与创作。
      </>
    ),
  },
  {
    title: 'SK-屏幕快捷按钮',
    Svg: require('@site/static/img/home-intellisense.svg').default,
    description: (
      <>
        懒得记快捷键，可以试试SK，
        节省心力、节省时间<code>节省时间</code>
      </>
    ),
  },
  {
    title: 'CY-投资策略图',
    Svg: require('@site/static/img/Seminar-amico.svg').default,
    description: (
      <>
        投资策略图，AI绘图
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
