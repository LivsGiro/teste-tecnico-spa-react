import Container from "../../components/Container";
import Header from "../../components/Header";
import styles from "./Page404.module.css"

function Page404 () {
    return (
        <>
        <Header />
        <Container>
            <div className={styles.notfound}>
            <p>Ué... cadê os Pokemon?!</p>
            </div>
        </Container>
        </>
    )
}

export default Page404