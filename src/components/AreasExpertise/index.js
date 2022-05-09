// Styles
import Styles from './styles.module.scss';

const Card = ({ item }) => {
    return (
        <div className = { Styles.expertise_card }>
            <div className = { item.class } />
            <h4>{ item.title }</h4>
            <ul>
                { item.descr.map((listItem, idx) => <li key = { idx }>{ listItem }</li>) }
            </ul>
        </div>
    );
};

const expertise = [
    {
        id: 1, title: 'Web', descr: ['Website development', 'Corporate websites and company intranets', 'Custom solutions: portals, games, automatization of management'], class: Styles.card_icon_web,
    },
    {
        id: 2, title: 'Apps', descr: ['Native android apps', 'Native iOS apps', 'Unity cross-platform apps'], class: Styles.card_icon_apps,
    },
    {
        id: 3, title: 'DeFi', descr: ['Landings', 'Games', 'Tokens', 'Smart contracts'], class: Styles.card_icon_defi,
    },
    {
        id: 4, title: 'ML', descr: ['Image analysis', 'Natural language processing', 'Predictive modeling for time series'], class: Styles.card_icon_ml,
    },
    {
        id: 5, title: 'Visual', descr: ['UI design', 'UX design', 'Logo design', 'Branding'], class: Styles.card_icon_art,
    },
];

const AreasExpertise = () => {
    return (
        <section className = { Styles.wrapper }>
            <h2 className = { Styles.title }>{ 'Areas of expertise' }</h2>
            <div className = { Styles.descr }>
                <p>{ 'We act as project managers to bring you the best talent, manage end-to-end solutions and deliver results all within budget and deadlines. The value we provide is a quickly released MVP, that can be tailored to achieve changing objectives' }</p>
                <p>{ 'Our agility allows us to move team members around to offer the best solutions for your workflow' }</p>
                <p>{ 'Our community of 1,200 people is willing to make the world a better place. We are ready to offer you a range of services to help your business grow' }</p>
            </div>
            <div className = { Styles.expertise }>
                {
                    expertise.map((item) => {
                        return <Card key = { item.id } item = { item } />;
                    })
                }
            </div>
        </section>
    );
};

export default AreasExpertise;
