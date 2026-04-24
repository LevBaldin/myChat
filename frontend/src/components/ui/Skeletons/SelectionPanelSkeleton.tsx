import { Skeleton } from "@mui/material"
import { ol, ul } from "framer-motion/client"

function SelectionPanelSkeleton() {
    return (
        <>
            <div className="flex flex-row justify-center items-center gap-3 p-3 w-full">
                <Skeleton variant="circular" animation="wave" width={65} height={65} className="shrink-0" />
                <div>
                    <Skeleton variant="text" width={200} animation="wave" height={30} className="" />
                    <Skeleton variant="text" width={300} animation="wave" height={20} className="" />
                    <Skeleton variant="text" width={300} animation="wave" height={20} className="" />
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 p-3 w-full">
                <Skeleton variant="circular" animation="wave" width={65} height={65} className="shrink-0" />
                <div>
                    <Skeleton variant="text" width={200} animation="wave" height={30} className="" />
                    <Skeleton variant="text" width={300} animation="wave" height={20} className="" />
                    <Skeleton variant="text" width={300} animation="wave" height={20} className="" />
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 p-3 w-full">
                <Skeleton variant="circular" animation="wave" width={65} height={65} className="shrink-0" />
                <div>
                    <Skeleton variant="text" width={200} animation="wave" height={30} className="" />
                    <Skeleton variant="text" width={300} animation="wave" height={20} className="" />
                    <Skeleton variant="text" width={300} animation="wave" height={20} className="" />
                </div>
            </div>
        </>
    )
}

export default SelectionPanelSkeleton
