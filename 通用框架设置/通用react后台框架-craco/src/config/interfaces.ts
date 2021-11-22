import React, { createContext } from 'react'

import { FormComponentProps } from 'antd/lib/form/Form'

export interface VBasicFormContext {
  form: any; // FormComponentProps
  closeFlag?: boolean
}

export const FormContext = createContext<VBasicFormContext>(
  {} as VBasicFormContext,
)

export type keyOfValueItem = {
  [k: number | string]: any
}

// multipart/form-data: 上传文件
export interface UploadFileParams {
  data?: any;
  name?: string;
  file: File | Blob;
  filename?: string;
  [key: string]: any;
}