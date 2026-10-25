import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";

const TheHeader = () => {
    return (
        <header className="flex items-center justify-between p-4">
            <Container className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Logo size="sm" />
                    <span className="text-lg font-bold">سامانه حقوقی</span>
                </div>
                <div className="flex items-center gap-2">
                    <Button color="primary" variant="text" >
                        خانه
                    </Button>
                    <Button color="primary" variant="text" >
                        درباره ما
                    </Button>
                    <Button color="primary" variant="fill" >
                        ورود
                    </Button>
                </div>
            </Container>

        </header>
    )
}

export default TheHeader