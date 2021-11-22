import fetch from 'utils/fetch';

export const getRelayList = (params: any) => {
    return fetch.get('/v1/call/phones', params);
};

export const updateRelayNumber = (id: number, data: any) => {
    return fetch.put(`/v1/call/phones/${id}`, data);
};

export const renewRelayNumber = (id: number, data: any) => {
    return fetch.post(`/v1/call/phones/${id}/ents`, data);
};

export const bindRelayNumber = (id: number, data: any) => {
    return fetch.post(`/v1/call/phones/${id}/ents`, data);
};

export const unbindRelayNumber = (id: number, ent_id: number) => {
    return fetch.delete(`/v1/call/phones/${id}/ents/${ent_id}`);
};

export const deleteRelayNumber = (id: number) => {
    return fetch.delete(`/v1/call/phones/${id}`);
};

export const addNewRelayNumber = (data: any) => {
    return fetch.post('/v1/call/phones', data);
};

export const getSipList = (params: any) => {
    return fetch.get('/v1/call/sips', params);
};

export const unbindSipNumber = (id: number, ent_id: number) => {
    return fetch.delete(`/v1/call/sips/${id}/ents/${ent_id}`);
};

export const deleteSipNumber = (id: number) => {
    return fetch.delete(`/v1/call/sips/${id}`);
};

export const bindSipNumber = (id: number, data: any) => {
    return fetch.post(`/v1/call/sips/${id}/ents`, data);
};

export const renewSipNumber = (id: number, data: any) => {
    return fetch.post(`/v1/call/sips/${id}/ents`, data);
};

export const updateSipNumber = (id: number, data: any) => {
    return fetch.put(`/v1/call/sips/${id}`, data);
};

export const addNewSipNumber = (data: any) => {
    return fetch.post('/v1/call/sips', data);
};
