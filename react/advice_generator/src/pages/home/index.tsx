import {
    Container, 
    Content,
} from './styles';
import Assets from '../../assets/Assets'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

type slip = {
    slip: {
        id: number;
        advice: string;
    }
}

function Home() {
    const [isFetching, setIsFetching] = useState(true);
    const [dataFetching, setDataFetching] = useState<slip>();
    const [delay, setDelay] = useState<boolean>(false);
    let [random, setRandom] = useState<number>(0);

    useEffect(() => {
        setIsFetching(true);

        axios.get('https://api.adviceslip.com/advice')
        .then((res) => {    
            setDataFetching(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log('Acabou');
            setIsFetching(false)
            console.log(dataFetching);
            
        })
    }, [random]);


    return(
        <>
            <Container>
                    {
                        isFetching ? (
                            <ReactLoading type='spin' color='var(--neon)'/>
                        ) : (
                            <Content>
                                <h2>Advice #{dataFetching?.slip.id}</h2>
                                <h1>"{dataFetching?.slip.advice}"</h1>
                                <img src={Assets.divider.divider_desktop} alt="" />
                            </Content>
                        )
                    }
                    <button>
                        <img src={Assets.icons.dice} alt="Dice icon" onClick={() => setRandom(random + 1)}/>
                    </button>
            </Container>
        </>
    );
};

export default Home;