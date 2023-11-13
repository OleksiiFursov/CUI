import Button from "./components/Button";
import Card from "./components/Card/";

import "@crossfox/css-start";
import Init from "./components/Init/index.jsx";

function App() {
    return (
        <>
            <Init/>
            <div style={{display: 'flex'}}>


                <Button onClick={() => alert('test')}>Text </Button>
                <div style={{display: 'flex', gap: '15px', width: '100%'}}>
                    <Card> Test </Card>
                    <Card> Test </Card>
                    <Card> Test </Card>
                </div>
            </div>

        </>
    )
}

export default App
