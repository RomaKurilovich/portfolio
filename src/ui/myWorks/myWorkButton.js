
import styled from 'styled-components';

const MyWorkButton = styled.div`
    cursor: pointer;
    font-size: 20px;
    border-radius: 15px;
    background: ${props => props.selected ? '#0B9ADC' : '#ffffff'};
    color: ${props => props.selected ? '#ffffff' : '#9D9B9D'};
    cursor: ${props => props.selected ? 'default' : 'pointer'};
    text-align: center;
    padding: 5px;
    margin-right: 30px;
`
export default MyWorkButton; 