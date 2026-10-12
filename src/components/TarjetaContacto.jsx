import styles from './TarjetaContacto.module.css'

const TarjetaContacto = ({ personas, Mensaje }) => {
    return (
        <div className={styles.contact}>
            <div>
                <div className={styles.logo}>
                    <img className={styles.imageLogo} src="./images/Logo.png" alt="Logo" />
                    <h3>Tecno Store</h3>
                </div>
                <hr /><br />
                <p>Computación y Gaming</p>
                <div className={styles.socialNetworks}>
                    <img className={styles.img} src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="logo-instagram" />
                    <img className={styles.img} src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="logo-facebook" />
                    <img className={styles.img} src="https://img.icons8.com/?size=100&id=fdfLpA6fsXN2&format=png&color=000000" alt="logo-tiktok" />
                </div>
            </div>
            <div>
                <h3 className={styles.contactTitle} >{Mensaje}</h3>
                <hr /><br />
                <p>Quienes somos</p>
            </div>
            <div className={styles.contactData}>
                <h3>Contacto</h3>
                <hr /><br />
                <p>Whatsapp</p>
                <p>+5411112222</p>
                <p>Correo</p>
                <p>info@mail.com</p>
                <p>Local / Showroom</p>
                <p>Florida 530 Local 300 (PB), CABA</p>
                <p>LUN - VIE 10:00 - 19:00</p>
            </div>
            <div className={styles.contactList}>
                {personas.map((persona) => (
                    <div className={styles.itemList} key={persona.id}>
                        <div className={styles.contactCard}>
                            <p className={styles.name}>{persona.nombre}</p>
                            <p>Mail: {persona.mail}</p>
                            <p>Puesto: {persona.puesto}</p>
                        </div>
                        <img className={styles.imageCard} src={persona.imagen} alt={persona.nombre} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TarjetaContacto;