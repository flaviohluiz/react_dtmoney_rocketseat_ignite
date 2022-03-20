import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable(){
    
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])
    
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de app</td>
                        <td className="deposit">R$15.000</td>
                        <td>Desenvolvimento</td>
                        <td>25/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.300</td>
                        <td>Casa</td>
                        <td>15/02/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de frontend</td>
                        <td className="deposit">R$5.000</td>
                        <td>Desenvolvimento</td>
                        <td>15/02/2022</td>
                    </tr>                     
                </tbody>
            </table>
        </Container>
    );
};