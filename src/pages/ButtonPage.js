import Button from "../components/Button"
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go'

function ButtonPage(){
    return <div>
        <div>
        <Button  primary rounded outline className="mb-5">
            <GoBell>
                </GoBell>Click me!</Button>
            </div>
            <div>
        <Button outline warning className="mb-5">
            <GoCloudDownload>
                </GoCloudDownload> Buy Now!</Button>
            </div>
            <div>
        <Button secondary rounded className="mb-5"> <GoDatabase>
            </GoDatabase>See Deal! </Button>
            </div>
            </div>
}

export default ButtonPage