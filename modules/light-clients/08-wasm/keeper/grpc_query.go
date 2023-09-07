package keeper

import (
	"context"
	"encoding/hex"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	errorsmod "cosmossdk.io/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"
)

var _ types.QueryServer = (*Keeper)(nil)

// Code implements the Query/Code gRPC method
func (k Keeper) Code(c context.Context, req *types.QueryCodeRequest) (*types.QueryCodeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	codeHash, err := hex.DecodeString(req.CodeHash)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid code hash")
	}

	// Only return code hashes we previously stored, not arbitrary code hashes that might be stored via e.g Wasmd.
	if !types.HasCodeHash(sdk.UnwrapSDKContext(c), k.cdc, codeHash) {
		return nil, status.Error(codes.NotFound, errorsmod.Wrap(types.ErrWasmCodeHashNotFound, req.CodeHash).Error())
	}
	code, err := k.wasmVM.GetCode(codeHash)
	if err != nil {
		return nil, status.Error(codes.NotFound, errorsmod.Wrap(types.ErrWasmCodeHashNotFound, req.CodeHash).Error())
	}

	return &types.QueryCodeResponse{
		Data: code,
	}, nil
}

// CodeHashes implements the Query/CodeHashes gRPC method. It returns a list of hex encoded code hashes stored.
func (k Keeper) CodeHashes(c context.Context, req *types.QueryCodeHashesRequest) (*types.QueryCodeHashesResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)

	var codeHashes []string
	storedHashes := types.GetCodeHashes(ctx, k.cdc)
	for _, hash := range storedHashes.CodeHashes {
		codeHashes = append(codeHashes, hex.EncodeToString(hash))
	}

	return &types.QueryCodeHashesResponse{
		CodeHashes: codeHashes,
	}, nil
}
