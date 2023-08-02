import type { Artist } from "@prisma/client";
import type { Album } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { Resolver } from "@quramy/prisma-fabbrica/lib/internal";
export { initialize, resetSequence, registerScalarFieldValueGenerator, resetScalarFieldValueGenerator } from "@quramy/prisma-fabbrica/lib/internal";
type BuildDataOptions = {
    readonly seq: number;
};
type ArtistFactoryDefineInput = {
    id?: string;
    name?: string;
    biography?: string;
    createdAt?: Date;
    updatedAt?: Date;
    albums?: Prisma.AlbumCreateNestedManyWithoutArtistInput;
};
type ArtistFactoryDefineOptions = {
    defaultData?: Resolver<ArtistFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<ArtistFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type ArtistTraitKeys<TOptions extends ArtistFactoryDefineOptions> = keyof TOptions["traits"];
export interface ArtistFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "Artist";
    build(inputData?: Partial<Prisma.ArtistCreateInput>): PromiseLike<Prisma.ArtistCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ArtistCreateInput>): PromiseLike<Prisma.ArtistCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ArtistCreateInput>[]): PromiseLike<Prisma.ArtistCreateInput[]>;
    pickForConnect(inputData: Artist): Pick<Artist, "id">;
    create(inputData?: Partial<Prisma.ArtistCreateInput>): PromiseLike<Artist>;
    createList(inputData: number | readonly Partial<Prisma.ArtistCreateInput>[]): PromiseLike<Artist[]>;
    createForConnect(inputData?: Partial<Prisma.ArtistCreateInput>): PromiseLike<Pick<Artist, "id">>;
}
export interface ArtistFactoryInterface<TOptions extends ArtistFactoryDefineOptions = ArtistFactoryDefineOptions> extends ArtistFactoryInterfaceWithoutTraits {
    use(name: ArtistTraitKeys<TOptions>, ...names: readonly ArtistTraitKeys<TOptions>[]): ArtistFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link Artist} model.
 *
 * @param options
 * @returns factory {@link ArtistFactoryInterface}
 */
export declare function defineArtistFactory<TOptions extends ArtistFactoryDefineOptions>(options?: TOptions): ArtistFactoryInterface<TOptions>;
type AlbumartistFactory = {
    _factoryFor: "Artist";
    build: () => PromiseLike<Prisma.ArtistCreateNestedOneWithoutAlbumsInput["create"]>;
};
type AlbumFactoryDefineInput = {
    id?: string;
    name?: string;
    releaseYear?: string;
    createdAt?: Date;
    updatedAt?: Date;
    artist: AlbumartistFactory | Prisma.ArtistCreateNestedOneWithoutAlbumsInput;
};
type AlbumFactoryDefineOptions = {
    defaultData: Resolver<AlbumFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<AlbumFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type AlbumTraitKeys<TOptions extends AlbumFactoryDefineOptions> = keyof TOptions["traits"];
export interface AlbumFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "Album";
    build(inputData?: Partial<Prisma.AlbumCreateInput>): PromiseLike<Prisma.AlbumCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.AlbumCreateInput>): PromiseLike<Prisma.AlbumCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.AlbumCreateInput>[]): PromiseLike<Prisma.AlbumCreateInput[]>;
    pickForConnect(inputData: Album): Pick<Album, "id">;
    create(inputData?: Partial<Prisma.AlbumCreateInput>): PromiseLike<Album>;
    createList(inputData: number | readonly Partial<Prisma.AlbumCreateInput>[]): PromiseLike<Album[]>;
    createForConnect(inputData?: Partial<Prisma.AlbumCreateInput>): PromiseLike<Pick<Album, "id">>;
}
export interface AlbumFactoryInterface<TOptions extends AlbumFactoryDefineOptions = AlbumFactoryDefineOptions> extends AlbumFactoryInterfaceWithoutTraits {
    use(name: AlbumTraitKeys<TOptions>, ...names: readonly AlbumTraitKeys<TOptions>[]): AlbumFactoryInterfaceWithoutTraits;
}
/**
 * Define factory for {@link Album} model.
 *
 * @param options
 * @returns factory {@link AlbumFactoryInterface}
 */
export declare function defineAlbumFactory<TOptions extends AlbumFactoryDefineOptions>(options: TOptions): AlbumFactoryInterface<TOptions>;
