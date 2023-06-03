import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  access_token: string;
  issue_at: number;
  access_expired_at: number;
  refresh_token: string;
  refresh_expired_at: number;
}
// data: LoginData data 对象必须满足 LoginData 接口约束
// axios.post<LoginRes> <> 表示泛型，约束了必须返回符合 LoginRes 的接口约束
export function login(data: LoginData) {
  return axios.post<LoginRes>('/mcenter/api/v1/token', data);
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
