import { Container, Content } from './styles'

interface IHeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: IHeaderProps) {
    return (
        <Container>
            <Content>
                <h1>
                    Money & Money
                </h1>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>                
            </Content>            
        </Container>

    )
}