import { FormEvent, useState } from 'react';
import { api } from '../../lib/api';

export function Form() {
  const [name, setName] = useState('');
  const [adminId, setAdminId] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [complement, setSComplement] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post('/library', {
      name,
      adminId,
      street,
      city,
      state,
      zip,
      streetNumber,
      complement,
      latitude,
      longitude,
    });

    window.alert('Cadastrado com sucesso!');
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-5 items-center justify-center"
    >
      <div className="flex flex-col">
        <label htmlFor="">Nome da instituição</label>
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">ID do aministrador</label>
        <input
          onChange={e => setAdminId(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Nome da Rua</label>
        <input
          onChange={e => setStreet(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Nº do local</label>
        <input
          onChange={e => setStreetNumber(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Nome da cidade</label>
        <input
          onChange={e => setCity(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">UF do estado</label>
        <input
          onChange={e => setState(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="">CEP do local</label>
        <input
          onChange={e => setZip(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Complemento</label>
        <input
          onChange={e => setSComplement(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Latitude da instituição</label>
        <input
          onChange={e => setLatitude(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Longitude da instituição</label>
        <input
          onChange={e => setLongitude(e.target.value)}
          type="text"
          className="border rounded-md h-12 px-5"
        />
      </div>

      <div className="mt-5">
        <button
          type="submit"
          className="bg-blue-300 rounded-md h-12 px-5 text-white font-bold hover:bg-blue-400"
        >
          Cadastrar instituição
        </button>
      </div>
    </form>
  );
}
