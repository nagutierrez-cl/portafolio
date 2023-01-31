import { Container } from "@mui/material"

import { About } from "./sections/About"
import { Intro } from "./sections/Intro"
import { Projects } from "./sections/Projects"
import { Services } from "./sections/Services"
import { Skills } from "./sections/Skills"

export const MainPage = () => {
    return (
        <Container maxWidth='xl'>

            <Intro />

            <Container>
                <About />
                <Skills />
                <Services />
                <Projects />
            </Container>

        </Container>
    )
}
