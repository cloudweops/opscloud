import axios from 'axios';

export interface MyProjectRecord {
  id: number;
  name: string;
  description: string;
  peopleNumber: number;
  contributors: {
    name: string;
    email: string;
    avatar: string;
  }[];
}
export function queryMyProjectList() {
  return axios.post('/api/user/my-project/list');
}

export interface MyTeamRecord {
  id: number;
  avatar: string;
  name: string;
  peopleNumber: number;
}
export function queryMyTeamList() {
  return axios.post('/api/user/my-team/list');
}


export function queryUserList() {
  return axios.post('/api/user/list');
}

export interface Profile {
  real_name: string;
  nick_name: string;
  phone: string;
  email: string;
  address: string;
  gender: string;
  city: string;
  province: string;
}

export interface User {
  id: string;
  create_at: number;
  update_at: number;
  update_by: string;
  provider: string;
  type: string;
  create_by: string;
  domain: string;
  username: string;
  profile: Profile;
}

export interface McenterUserSet {
  total: number;
  items: User[];
}

export interface queryMcenterUserReq {
  pageSize: number;
  pageNumber: number;
  keywords?: string
}

export function queryMcenterUserSet(data: queryMcenterUserReq) {
  return axios.get('/mcenter/api/v1/user/sub', { params: data });
}

export interface LatestActivity {
  id: number;
  title: string;
  description: string;
  avatar: string;
}
export function queryLatestActivity() {
  return axios.post<LatestActivity[]>('/api/user/latest-activity');
}

export function saveUserInfo() {
  return axios.post('/api/user/save-info');
}

export interface BasicInfoModel {
  email: string;
  nickname: string;
  countryRegion: string;
  area: string;
  address: string;
  profile: string;
}

export interface EnterpriseCertificationModel {
  accountType: number;
  status: number;
  time: string;
  legalPerson: string;
  certificateType: string;
  authenticationNumber: string;
  enterpriseName: string;
  enterpriseCertificateType: string;
  organizationCode: string;
}

export type CertificationRecord = Array<{
  certificationType: number;
  certificationContent: string;
  status: number;
  time: string;
}>;

export interface UnitCertification {
  enterpriseInfo: EnterpriseCertificationModel;
  record: CertificationRecord;
}

export function queryCertification() {
  return axios.post<UnitCertification>('/api/user/certification');
}

export function userUploadApi(
  data: FormData,
  config: {
    controller: AbortController;
    onUploadProgress?: (progressEvent: any) => void;
  }
) {
  // const controller = new AbortController();
  return axios.post('/api/user/upload', data, config);
}
