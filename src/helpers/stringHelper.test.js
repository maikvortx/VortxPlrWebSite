import { StringHelper } from './stringHelper'

describe('stringHelperTests', () => {
  it('deve retornar cpf com máscara aplicada', () => {
    const cpf = '00000000000'

    const cpfComMascara = StringHelper.mascaraCpf(cpf)
    expect(cpfComMascara).toEqual('000.000.000-00')
  })

  it('deve retornar cnpj com máscara aplicada', () => {
    const cnpj = '00000000000000'

    const cnpjComMascara = StringHelper.mascaraCnpj(cnpj)
    expect(cnpjComMascara).toEqual('00.000.000/0000-00')
  })

  it('deve retornar texto sem caracteres especiais', () => {
    const texto = 'texto@$%'

    const textoSemCaracteresEspeciais =
      StringHelper.removeCaracteresEspeciais(texto)

    expect(textoSemCaracteresEspeciais).toEqual('texto')
  })

  it('deve retornar CPF com máscara aplicada, usando formatacao CPF ou CNPJ', () => {
    const cpf = '00000000000'

    const cpfComMascara = StringHelper.formatMaskCpfCnpj(cpf)
    expect(cpfComMascara).toEqual('000.000.000-00')
  })

  it('deve retornar CNPJ com máscara aplicada, usando formatacao CPF ou CNPJ', () => {
    const cnpj = '00000000000000'

    const cnpjComMascara = StringHelper.formatMaskCpfCnpj(cnpj)
    expect(cnpjComMascara).toEqual('00.000.000/0000-00')
  })

  it('deve retonar e-mail com máscara aplicada', () => {
    const email = 'test@vortx.com.br'

    const emailComMascara = StringHelper.mascaraEmail(email)
    expect(emailComMascara).toEqual('te**@vortx.com.br')
  })
})
