import { gql } from '@apollo/client'

export const ENVIAR_CONVITE = gql`
  mutation EnviarConviteCadastral(
    $documento: String
    $email: String
    $tipo: String
  ) {
    enviarConviteCadastral(documento: $documento, email: $email, tipo: $tipo) {
      socialNumber
      email
      cellPhone
      check
      status
      isExternal
      userId
      reSendInvite
      representative {
        socialNumber
        name
        email
        relationship
        full
      }
      madeByRepresentative
      type
      isEscrow
      createdAt
      expirationDate
      isRepresentativeFilling
    }
  }
`
