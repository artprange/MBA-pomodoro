import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 0;
    padding: 1rem;
    justify-content: flex-start;
    font-size: 2rem;
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['gray-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 768px) {
    gap: 0;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  @media (max-width: 768px) {
    display: flex;
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

