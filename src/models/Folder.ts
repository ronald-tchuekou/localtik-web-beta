export interface Folder {
  id: string,
  code: string,
  name: string
}

export const DEFAULT_FOLDER: Folder = {
  id: '',
  code: '',
  name: ''
}

export const FAKE_FOLDERS: Folder[] = [
  {id: 'id_1', code: 'code_1', name: 'Dossier 1'},
  {id: 'id_2', code: 'code_2', name: 'Dossier 2'},
  {id: 'id_3', code: 'code_3', name: 'Dossier 3'},
]
