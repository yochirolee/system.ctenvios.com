import { UploadCloud, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "../../../../../components/ui/input";
import { Progress } from "../../../../../components/ui/progress";
import { ScrollArea } from "../../../../../components/ui/scroll-area";
import apiTracking from "@/Agency/Api/apiTracking";
import { SheetTable } from "../Table/SheetTable";
import { Spinner } from "@/Agency/Components/ui/Spinner";
import { AlertDestructive } from "../Alert";
/*
const uploadExcelFileMutation = async (file, setUploadProgress) => {
	const response = await apiTracking.tracking.upsertByExcelFile(file, setUploadProgress);
	return response.data;
};

export const ExcelUpload = () => {
	const [fileToUpload, setFileToUpload] = useState(null);
	const [updatedData, setUpdatedData] = useState(null);
	const [uploadProgress, setUploadProgress] = useState(0);

	const mutation = useMutation(uploadExcelFileMutation, {
		onSuccess: (data) => {
			// Handle success
			console.log("Data uploaded successfully", data);
			setUpdatedData(data);
		},
		onError: (error) => {
			// Handle error
			console.log("Data upload failed", error);
		},
	});

	const onDrop = useCallback(
		(acceptedFiles) => {
			if (acceptedFiles.length > 0) {
				setFileToUpload(acceptedFiles[0]);
				console.log(acceptedFiles, fileToUpload, "acceptedFiles");
				mutation.mutate(
					{ file: acceptedFiles[0], setUploadProgress },
					{
						onSettled: () => setUploadProgress(0), // Reset progress to 0 when upload is complete
						onMutate: () => setUploadProgress(0), // Reset progress to 0 when starting a new upload
					},
				);
			}
		},
		[mutation, setUploadProgress],
	);

	const onDropRejected = (fileRejections) => {
		fileRejections.forEach(({ file, errors }) => {
			errors.forEach((error) => {
				console.log(error.code);
				switch (error.code) {
					case "file-invalid-type":
						console.log(`${file.path} is not an accepted file type`);
						break;
					case "file-too-large":
						console.log(`${file.path} is too large`);
						break;
					// Handle other validation errors here
					default:
						console.log(`An error occurred while uploading ${file.path}`);
						break;
				}
			});
		});
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		onDropRejected,
		accept: ".xlsx,.xls", // Accept only Excel files
		maxSize: 1048576, // Accept only files smaller than 1MB
	});
	return (
		<div>
			<div>
				<label
					{...getRootProps()}
					className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
				>
					<div className=" text-center">
						<div className=" border p-2 rounded-md max-w-min mx-auto">
							<UploadCloud size={20} />
						</div>

						<p className="mt-2 text-sm text-gray-600">
							<span className="font-semibold">Drag an Excel file</span>
						</p>
						<p className="text-xs text-gray-500">
							Click to upload files &#40;files should be under 2 MB &#41;
						</p>
					</div>
				</label>

				<Input
					{...getInputProps()}
					id="dropzone-file"
					accept="xlsx"
					type="file"
					className="hidden"
				/>
			</div>

			{fileToUpload && (
				<div>
					<ScrollArea className="h-40">
						<p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
							Excel File to upload
						</p>
						<div className="space-y-2 pr-3">
							{fileToUpload && (
								<div className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2">
									<div className="flex flex-col gap-2 items-center flex-1 p-2">
										<div className="w-full ml-2 space-y-1">
											<div className="text-sm flex justify-between">
												<p className="text-muted-foreground ">{fileToUpload.name.slice(0, 25)}</p>
												<span className="text-xs">{uploadProgress}%</span>
											</div>
											<Progress value={uploadProgress} />
										</div>
										{uploadProgress === 100 ? (
											<div className="w-full mx-auto mt-2 space-y-1">
												<div className="text-sm flex justify-center items-center gap-2">
													<p className="text-muted-foreground ">
														<Spinner />
													</p>
													<span>Processing please wait</span>
												</div>
											</div>
										) : null}
									</div>
								</div>
							)}
						</div>
					</ScrollArea>
				</div>
			)}
			<div className=" mt-4">
				<ScrollArea className="h-40">
					<SheetTable data={updatedData} />
				</ScrollArea>
			</div>
		</div>
	);
};*/

export const ExcelUpload = () => {
	const [filesToUpload, setFilesToUpload] = useState([]);
	const [isError, setIsError] = useState(false);
	const [updatedData, setUpdatedData] = useState(null);
	const [uploadProgress, setUploadProgress] = useState(0);

	const uploadExcelFile = async (file) => {
		try {
			const response = await apiTracking.tracking.upsertByExcelFile(file, setUploadProgress);
			setUpdatedData(response);
			return response;
		} catch (e) {
			setIsError(true);
		}
	};

	const onDrop = useCallback(async (acceptedFiles) => {
		setFilesToUpload((prevUploadProgress) => {
			uploadExcelFile(acceptedFiles[0]);
			return [
				...prevUploadProgress,
				...acceptedFiles.map((file) => {
					return {
						progress: 0,
						File: file,
						source: null,
					};
				}),
			];
		});
	}, []);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div>
			<div>
				<label
					{...getRootProps()}
					className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
				>
					<div className=" text-center">
						<div className=" border p-2 rounded-md max-w-min mx-auto">
							<UploadCloud size={20} />
						</div>

						<p className="mt-2 text-sm text-gray-600">
							<span className="font-semibold">Drag an Excel file</span>
						</p>
						<p className="text-xs text-gray-500">
							Click to upload files &#40;files should be under 2 MB &#41;
						</p>
					</div>
				</label>

				<Input
					{...getInputProps()}
					id="dropzone-file"
					accept="xlsx"
					type="file"
					className="hidden"
				/>
			</div>

			{isError ? (
				<div className="mt-4">
					<AlertDestructive
						title="Error"
						message="An error occurred while uploading the file, please review your data"
					/>
				</div>
			) : (
				filesToUpload.length > 0 &&
				!updatedData && (
					<div>
						<ScrollArea className="h-40">
							<p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
								Excel File to upload
							</p>
							<div className="space-y-2 pr-3">
								{filesToUpload.map((fileUploadProgress) => {
									return (
										<div className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2">
											<div className="flex flex-col gap-2 items-center flex-1 p-2">
												<div className="w-full ml-2 space-y-1">
													<div className="text-sm flex justify-between">
														<p className="text-muted-foreground ">
															{fileUploadProgress.File.name.slice(0, 25)}
														</p>
														<span className="text-xs">{uploadProgress}%</span>
													</div>
													<Progress value={uploadProgress} />
												</div>
												{uploadProgress === 100 ? (
													<div className="w-full mx-auto mt-2 space-y-1">
														<div className="text-sm flex justify-center items-center gap-2">
															<p className="text-muted-foreground ">
																<Spinner />
															</p>
															<span>Processing please wait</span>
														</div>
													</div>
												) : null}
											</div>
										</div>
									);
								})}
							</div>
						</ScrollArea>
					</div>
				)
			)}
			<div className=" mt-4">
				<ScrollArea className="h-96">
					<SheetTable data={updatedData} />
				</ScrollArea>
			</div>
		</div>
	);
};
/*  */
