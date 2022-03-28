import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex-grow p-6 overflow-auto bg-gray-200">
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 bg-white border border-gray-300">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card;