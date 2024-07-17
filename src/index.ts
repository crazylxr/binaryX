/**
 * 将 ArrayBuffer 转换为 Blob
 * @param buffer ArrayBuffer 对象
 * @param mimeType Blob 的 MIME 类型
 * @returns Blob 对象
 */
export function arrayBufferToBlob(buffer: ArrayBuffer, mimeType: string = 'application/octet-stream'): Blob {
	return new Blob([buffer], { type: mimeType });
}

/**
 * 将 Blob 转换为 ArrayBuffer
 * @param blob Blob 对象
 * @returns Promise<ArrayBuffer>
 */
export async function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as ArrayBuffer);
		reader.onerror = reject;
		reader.readAsArrayBuffer(blob);
	});
}

/**
 * 将 ArrayBuffer 转换为 Base64 编码字符串
 * @param buffer ArrayBuffer 对象
 * @returns Base64 编码字符串
 */
export function arrayBufferToBase64(buffer: ArrayBuffer): string {
	const array = new Uint8Array(buffer);
	const base64String = array.reduce((data, byte) => data + String.fromCharCode(byte), '');
	return btoa(base64String);
}

/**
 * 将 Base64 编码字符串转换为 ArrayBuffer
 * @param base64String Base64 编码字符串
 * @returns ArrayBuffer 对象
 */
export function base64ToArrayBuffer(base64String: string): ArrayBuffer {
	const binaryString = atob(base64String);
	const array = new Uint8Array(binaryString.length);
	array.set(binaryString.split('').map(char => char.charCodeAt(0)));
	return array.buffer;
}

/**
 * 将 Blob 转换为 Base64 编码字符串
 * @param blob Blob 对象
 * @returns Promise<string>
 */
export async function blobToBase64(blob: Blob): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}

/**
 * 将 Base64 编码字符串转换为 Blob
 * @param base64String Base64 编码字符串
 * @param mimeType Blob 的 MIME 类型
 * @returns Blob 对象
 */
export function base64ToBlob(base64String: string, mimeType: string): Blob {
	const dataUriRegex = /^data:([a-zA-Z]+\/[a-zA-Z+.]+).*,.*/;
	const matches = base64String.match(dataUriRegex);
	if (matches) {
		const byteString = atob(base64String.split(',')[1]);
		const array = new Uint8Array(byteString.length);
		array.set(byteString.split('').map(char => char.charCodeAt(0)));
		return new Blob([array], { type: matches[1] });
	}
	throw new Error('Invalid Base64 string');
}

/**
 * 将 Blob 转换为 File
 * @param blob Blob 对象
 * @param fileName 文件名
 * @returns File 对象
 */
export function blobToFile(blob: Blob, fileName: string): File {
    return new File([blob], fileName);
}

/**
 * 将 File 转换为 Blob
 * @param file File 对象
 * @returns Blob 对象
 */
export function fileToBlob(file: File): Blob {
    return file;
}