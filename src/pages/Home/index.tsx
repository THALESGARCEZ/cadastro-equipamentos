import React, { useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { HomeContainer, Form, Table, Equipment } from './styles'

interface IEquipments {
  cod: string
  serialNumber: string
  description: string
  type: string
}

export const Home = () => {
  const [ equipments, setEquipments ] = useState<IEquipments[]>([])
  const [ cod, setCode ] = useState('')
  const [ serialNumber, setSerialNumber] = useState('')
  const [ description, setDescription ] = useState('')
  const [ type, setType ] = useState('')

  useEffect(() => {
    const storagedEquipments = localStorage.getItem("@equipments")

    if (storagedEquipments) {
      setEquipments(JSON.parse(storagedEquipments))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("@equipments", JSON.stringify(equipments))
  }, [equipments])

  function handleSubmitForm(event: any) {
    event.preventDefault()
    if (cod === "" || serialNumber === "" || description === "" || type === "") {
      alert("Preencha todos os campos corretamente")
      return
    }

    const equipmentExists = equipmentAlreadyExists(cod)

    if (equipmentExists) {
      alert("Código existente! Cadastre um código diferente")
      return
    }

    const equipment = {
      cod,
      serialNumber,
      description,
      type
    }

    setEquipments([...equipments, equipment])
    setCode('')
    setSerialNumber('')
    setDescription('')
    setType('')
  }


  function removeEquipment(cod: string) {
    const filteredEquipments = equipments.filter(equipment => equipment.cod !== cod)

    setEquipments(filteredEquipments)
  }

  function equipmentAlreadyExists(cod: string) {
    const equipment = equipments.find(equipment => equipment.cod === cod)

    if (!equipment) {
      return false
    }

    return true
  }

  return (
    <HomeContainer>
      <Form onSubmit={handleSubmitForm}>
       <h1>Cadastro de equipamentos</h1>

        <fieldset>
          <p>Código do Patrimonio</p>
          <input 
            type="text" 
            value={cod}
            onChange={event => setCode(event.target.value)}
          />
        </fieldset>

        <fieldset>
          <p>Número de Série</p>
          <input 
            type="text"
            value={serialNumber}
            onChange={event => setSerialNumber(event.target.value)}
          />
        </fieldset>

        <fieldset>
          <p>Descrição</p>
          <input 
            type="text"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </fieldset>

        <fieldset>
          <p>Tipo</p>
          <input 
            type="text"
            value={type}
            onChange={event => setType(event.target.value)}
          />
        </fieldset>

        <button type="submit">Cadastrar</button>
      </Form>


      <Table>
        <thead>
          <th>Cod. Patrimonio</th>
          <th>Número de Série</th>
          <th>Descrição</th>
          <th>Tipo</th>
        </thead>
        <tbody>

          {
            equipments && equipments.map(equipment => (
              <Equipment key={equipment.cod}>
                <td>{equipment.cod}</td>
                <td>{equipment.serialNumber}</td>
                <td>{equipment.description}</td>
                <td>{equipment.type}</td>
                <td>
                  <BsTrash size={24} onClick={() => removeEquipment(equipment.cod)} />
                </td>
              </Equipment>
            ))
          }

        </tbody>
      </Table>
    </HomeContainer>
  )
}