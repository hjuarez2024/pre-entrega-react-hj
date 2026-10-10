import styles from './TarjetaContacto.module.css'

const TarjetaContacto = ({ personas, Mensaje }) => {
    return (
        <div>
            <h3 className={styles.contactTitle} >{Mensaje}</h3>
            <ul className={styles.contactList}>
                {personas.map((persona) => (
                    <li className={styles.itemList} key={persona.id}>
                        <div className={styles.contactCard}>
                            <p className={styles.name}>{persona.nombre}</p>
                            <p>Mail: {persona.mail}</p>
                            <p>Puesto: {persona.puesto}</p>
                        </div>
                        <img className={styles.image} src={persona.imagen} alt={persona.nombre} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TarjetaContacto;