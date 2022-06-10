import { entity, field } from '@herbsjs/gotu'
import { useCallback } from 'react'
import TiposPersona from '../../domain/valueObjects/TiposPersona'

export const FormularioCadastroSchema = entity('Formulário Cadastro', {
  tipo: field(String, {
    validation: {
      presence: true,
      contains: {
        allowed: [
          TiposPersona.EMISSOR,
          TiposPersona.FUNDO_INVESTIMENTO,
          TiposPersona.INVESTIDOR_PJ,
          TiposPersona.PESSOA_FISICA
        ]
      }
    }
  }),
  documento: field(String, {
    validation: {
      presence: true,
      format:
        // eslint-disable-next-line no-useless-escape
        /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
    }
  }),
  email: field(String, {
    validation: {
      presence: true,
      email: true
    }
  })
})

export const useGotuValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      const entity = new FormularioCadastroSchema()
      entity.tipo = data.tipo
      entity.email = data.email
      entity.documento = data.documento
      entity.fundoInvestimento = data.fundoInvestimento

      if (entity.isValid()) {
        return { values: {}, isDirty: true, isValid: true, errors: {} }
      }

      return {
        values: {},
        isDirty: true,
        isValid: false,
        errors: Object.entries(entity.errors).reduce(
          (allErrors, currentError) => ({
            ...allErrors,
            [currentError.path]: {
              type: currentError.type ?? 'validation',
              message: currentError.message
            }
          }),
          {}
        )
      }
    },
    [validationSchema]
  )
